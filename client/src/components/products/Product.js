import styled from "styled-components";
import DiscountBadge from "./DiscountBadge";

const StyledProduct = styled.li`
  position: relative;
  display: grid;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: transform 3s ease-in-out;
`;

const StyledDiscountBadge = styled(DiscountBadge)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffc107;
  opacity: 0.8;
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const StyledButton = styled.button`
  background-color: #0a99f5;
  font-size: 1.2rem;
  color: white;
  height: 2.5rem;
  align-self: center;
  display: grid;
  align-content: center;
  align-self: center;
  border: none;
  cursor: pointer;
  grid-template-columns: 1fr;
  width: 160px;
  justify-self: end;
  transition: background 0.3s ease-in-out;
  &&:hover {
    background-color: #008cba;
  }
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  overflow: clip;
  z-index: 1;
  position: relative;
  p {
    font-size: 1.5rem;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  &&:hover {
    background-color: black;
    opacity: 0.8;
  }
`;

const StyledText = styled.div`
  height: 65px;
  p {
    font-size: 1.2rem;
    margin: 0.5rem;
  }
`;

const Product = ({
  name,
  description,
  price,
  imageName,
  imageDescription,
  discountType,
  discountValue,
}) => {
  return (
    <StyledProduct>
      <div className="card">
        <div>
          {imageName ? (
            <StyledImage
              src={`./img/${imageName}`}
              alt={imageDescription}
              className="product-image"
            />
          ) : (
            <img
              src="./img/cat-photo-default.jpg"
              alt="Default product cat"
              className="product-image"
            />
          )}
          {discountValue && discountType && (
            <StyledDiscountBadge
              discountValue={discountValue}
              discountType={discountType}
            />
          )}
        </div>
        <StyledCard>
          <h3>{name}</h3>
          <p>Price {price}</p>
          <StyledText>
            <p data-testid="product-description">{description}</p>
          </StyledText>
          <StyledButton>Add to Cart</StyledButton>
        </StyledCard>
      </div>
    </StyledProduct>
  );
};

export default Product;
