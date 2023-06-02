import StyledButton from "../../Buttons/StyledButton";
import StyledListItem from "./StyledListItem";

function ListItem({ value, removeItem }) {
  function removeItemByID() {
    removeItem(value.id);
  }

  return (
    <StyledListItem valueType={value.selected}>
      <div>
        <h3>{value.description}</h3>
        <span>{value.value} </span>
      </div>
      <div>
        {value.selected === "0" && <span>Entrada</span>}
        {value.selected === "1" && <span>Saída</span>}
        <StyledButton onClick={removeItemByID}>Excluir</StyledButton>
      </div>
    </StyledListItem>
  );
}

export default ListItem;
