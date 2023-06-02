import styled from "styled-components";

const StyledMainComponent = styled.main`
  display: flex;
  max-width: 1036px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 21px;
  }
`;

export default StyledMainComponent;
