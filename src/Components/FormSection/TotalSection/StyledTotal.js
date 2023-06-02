import styled from "styled-components";
import theme from "../../../styles/Theme";

const StyledTotalSection = styled.section`
  max-width: 355px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 18px;
  border-radius: 4px;
  padding: 20px 23px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.Grey4};
  }

  span {
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.primary};
  }

  p {
    font-family: "Nunito", sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: ${theme.colors.Grey3};
    margin-top: 6px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export default StyledTotalSection;
