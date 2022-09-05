const express = require("express");
const { number } = require("joi");
const Joi = require("joi");
const router = express.Router();
const db = require("../db");
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");

const queryParamsSchema = Joi.object().keys({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1),
});

const getProducts = async () => {
  try {
    const result = await db.query(
      `SELECT
        p.id,
        p.name,
        p.description,
        p.price,
        pc.name AS "categoryName",
        pi.name AS "imageName",
        pi.description AS "imageDescription",
        pd.value AS "discountValue",
        discount_type."type" AS "discountType"
      FROM product p
      LEFT JOIN product_category pc ON p.product_category_id = pc.id
      LEFT JOIN product_image pi ON p.product_image_id = pi.id
      LEFT JOIN product_discount AS pd ON p.id = pd.id
      LEFT JOIN	discount_type	ON pd.discount_type_id = discount_type.id
      ORDER BY
        p.id
      `
    );
    return result.rows;
  } catch (error) {
    throw Error(error);
  }
};

router.get(
  "/",
  queryParamValidationMiddleware(queryParamsSchema),
  async (req, res, next) => {
    try {
      // setting up pagination
      // limit page to display to 10 products only per page
      // if there is no page specified than default to page 1
      // return result in json with page, pageCount and products
      // if page specified exceeds the number of pages that is available than return an error message saying page is not found

      const products = await getProducts();
      const pageCount = Math.ceil(products.length / 10);
      let page = parseInt(req.query.page) || 1;

      if (page > pageCount) {
        // return 404 if page is greater than pageCount
        return res.status(404).json({
          message: "page not found",
        });
      }

      // if no page is specified, default to page 1
      if (!page) {
        page = 1;
      }

      // return results in json with page, pageCount and products
      const responseResults = {
        page: page,
        pageCount: pageCount,
        products: products.slice(page * 10 - 10, page * 10),
      };

      return res.json(responseResults);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
