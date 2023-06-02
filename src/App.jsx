import { useState } from "react";
import FormSection from "./Components/FormSection/FormSection";
import List from "./Components/ListSection/List";
import MainComponent from "./Components/Main/MainComponent";
import TotalValue from "./Components/FormSection/TotalSection/total";

function App() {
  const [movementValues, setValues] = useState([]);

  function addValues(values) {
    setValues([...movementValues, values]);
  }

  function totalValues() {
    return movementValues.reduce((acumulator, valorAtual) => {
      if (valorAtual.selected == 0) {
        return (
          acumulator + parseFloat(valorAtual.value.replace(/\D/g, "") / 100)
        );
      } else {
        return (
          acumulator - parseFloat(valorAtual.value.replace(/\D/g, "") / 100)
        );
      }
    }, 0);
  }
  const total = totalValues();

  function formatValueTotal(total) {
    return total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function removeItem(valueId) {
    return setValues(movementValues.filter((item) => item.id !== valueId));
  }

  return (
    <>
      <MainComponent>
        <FormSection objectValues={addValues}>
          {movementValues.length > 0 && (
            <TotalValue totalBalance={formatValueTotal(total)} />
          )}
        </FormSection>
        <List value={movementValues} remove={removeItem} />
      </MainComponent>
    </>
  );
}

export default App;
