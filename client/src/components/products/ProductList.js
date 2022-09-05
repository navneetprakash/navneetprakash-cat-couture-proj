import Product from "./Product";
import styled from "styled-components";

const StyledList = styled.ul`
  padding-left: 0;
  margin: 1rem;
  list-style: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr) minmax(
      min-content,
      1fr
    );
  @media only screen and (max-width: 998px) {
    grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr);
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: minmax(min-content, 1fr);
  }
`;

const ProductList = ({ products, className }) => {
  return (
    <StyledList className={className}>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageName={product.imageName}
          imageDescription={product.imageDescription}
          discountValue={product.discountValue}
          discountType={product.discountType}
        />
      ))}
    </StyledList>
  );
};

export default ProductList;
