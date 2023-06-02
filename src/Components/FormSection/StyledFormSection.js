import styled from "styled-components";
import theme from "../../styles/Theme";

const StyledFormSection = styled.section`
  width: 40%;
  height: 434px;
  margin-top: 39px;

  form {
    max-width: 355px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 30px 22px 28px 21px;
  }

  label {
    font-weight: 400;
    font-size: 12px;
    color: ${theme.colors.Grey4};
    margin-bottom: 12px;
    margin-top: 12px;
  }

  input {
    height: 52px;
    border-radius: 8px;
    border: 2px solid ${theme.colors.Grey1};
    padding: 0px 16px;
    background-color: ${theme.colors.Grey1};
  }

  span {
    color: ${theme.colors.Grey3};
    font-size: 12px;
    font-weight: 400;
    margin-top: 9px;
  }

  select {
    height: 48px;
    border-radius: 8px;
    padding: 0px 16px;
    border: 2px solid ${theme.colors.Grey1};
    background-color: ${theme.colors.Grey1};
    color: ${theme.colors.Grey3};
    font-size: 12px;
    font-weight: 400;
  }

  button {
    margin-top: 28px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default StyledFormSection;
