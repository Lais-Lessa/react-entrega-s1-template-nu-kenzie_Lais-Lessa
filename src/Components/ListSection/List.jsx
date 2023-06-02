import ListItem from "./ListComponents/ListItem";
import StyledListComponents from "./StyledListComponents";

function List({ value, remove }) {
  return (
    <StyledListComponents>
      <h3>Resumo financeiro</h3>
      {value.length === 0 && <h2>Você ainda não possui nenhum lançamento</h2>}
      <ul>
        {value.map((value, index) => {
          return <ListItem key={index} value={value} removeItem={remove} />;
        })}
      </ul>
    </StyledListComponents>
  );
}

export default List;
