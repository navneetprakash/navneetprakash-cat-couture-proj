const request = require("supertest");
const path = require("path");
const jestOpenAPI = require("jest-openapi").default;
const app = require("../app");
const db = require("../db");

jestOpenAPI(path.join(__dirname, "../apispec.yaml"));

describe("GIVEN that the GET /products route exist", () => {
  afterAll(() => {
    db.end();
  });

  describe("WHEN the client sends a request for a specific page of products", () => {
    test("WHEN the page query parameter is not valid as per the API spec THEN return status 400 and an appropriate error message", async () => {
      const response = await request(app)
        .get("/api/products?page=a")
        .set("Accept", "application/json");

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('"page" must be a number');
      expect(response).toSatisfyApiSpec();
    });
  });
});
