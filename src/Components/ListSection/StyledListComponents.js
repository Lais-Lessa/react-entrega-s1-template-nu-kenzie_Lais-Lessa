import styled from "styled-components";
import theme from "../../styles/Theme";

const StyledListComponents = styled.section`
  margin-top: 39px;
  width: 60%;

  h3 {
    font-size: 16px;
    font-weight: 700;
    font-family: "Nunito", sans-serif;
    color: ${theme.colors.Grey4};
  }

  h2{
    margin-top: 32px;
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: ${theme.colors.Grey3}
}

@media (max-width: 768px) {
  width: 100%;
}
}
`;

export default StyledListComponents;
