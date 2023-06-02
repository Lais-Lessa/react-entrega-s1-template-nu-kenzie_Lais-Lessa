import styled from "styled-components";
import theme from "../../styles/Theme";

const StyledHeader = styled.header`
  height: 88px;
  box-shadow: 0px 4px 32px -12px #00000040;
  background-color: ${theme.colors.Grey1};

  div {
    max-width: 1036px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 21px 14px;
  }
`;
export default StyledHeader;
