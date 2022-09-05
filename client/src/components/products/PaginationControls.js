import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPaginationControls = styled.div`
  width: 100%;
  max-width: 200px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledPaginationButton = styled.button`
  background: lightgrey;
  border: none;
  padding: 0.3rem;
  cursor: pointer;
`;

const PaginationControls = ({
  onPrev,
  onNext,
  currentPage = null,
  totalPages = null,
}) => {
  return (
    <StyledPaginationContainer>
      <StyledPaginationControls>
        <div>
          <StyledPaginationButton
            disabled={currentPage <= 1}
            aria-label="Previous page"
            onClick={onPrev}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </StyledPaginationButton>
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div>
          <StyledPaginationButton
            disabled={currentPage >= totalPages}
            aria-label="Next page"
            onClick={onNext}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </StyledPaginationButton>
        </div>
      </StyledPaginationControls>
    </StyledPaginationContainer>
  );
};

export default PaginationControls;
