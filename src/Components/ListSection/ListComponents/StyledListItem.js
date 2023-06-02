import styled from "styled-components";
import theme from "../../../styles/Theme";

const StyledListItem = styled.li`
  list-style: none;
  background-color: ${theme.colors.Grey1};
  max-width: 560px;
  height: 87px;
  border-radius: 4px;
  margin-top: 29px;
  border-left: 4px solid
    ${(props) =>
      props.valueType === "1"
        ? `${theme.colors.Grey2}`
        : `${theme.colors.secundary}`};

  div {
    display: flex;
    justify-content: space-between;
    padding: 8px 18px;

    h3 {
      font-size: 16px;
      font-weight: 700;
      color: ${theme.colors.Grey4};
    }

    span {
      font-size: 12px;
      font-weight: 400;
      color: ${theme.colors.Grey4};
    }

    span {
      font-size: 12px;
      font-weight: 400;
      color: ${theme.colors.Grey3};
    }
  }

  @media (max-width: 768px) {
    height: 156px;

    div {
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export default StyledListItem;
