import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin: auto;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export default TableOperations;
