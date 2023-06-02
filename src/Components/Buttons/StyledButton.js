import styled from "styled-components";
import theme from "../../styles/Theme";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.primaryButton ? `${theme.colors.primary}` : `${theme.colors.Grey2}`};
  width: ${(props) => (props.primaryButton ? "100%" : "49px")};
  height: ${(props) => (props.primaryButton ? "48px" : "19px")};
  border-radius: ${(props) => (props.primaryButton ? "8px" : "2px")};
  color: ${(props) =>
    props.primaryButton ? `#ffffff` : `${theme.colors.Grey4}`};
  font-size: ${(props) => (props.primaryButton ? "16px" : "10px")};
  font-weight: ${(props) => (props.primaryButton ? "500" : "400")};
  cursor: ${(props) => (props.primaryButton ? "pointer" : "pointer")};
  border: ${(props) =>
    props.primaryButton ? `2px solid ${theme.colors.primary}` : "none"};
`;
export default StyledButton;
