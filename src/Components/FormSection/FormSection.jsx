import { useState } from "react";
import StyledButton from "../Buttons/StyledButton";
import Input from "./FormComponents/Input";
import Select from "./FormComponents/Select";
import StyledFormSection from "./StyledFormSection";
import TotalValue from "./TotalSection/total";

function FormSection({ objectValues, children }) {
  const options = ["Entrada", "Saída"];
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("0");

  function handleDescription(event) {
    setDescription(event.target.value);
  }

  function handleValue(event) {
    const formattedInput = event.target.value.replace(/\D/g, "");
    const floatedNumber = parseFloat(formattedInput);
    const finalValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(floatedNumber / 100);
    setValue(finalValue);
  }

  function handleSelected(event) {
    setSelected(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();
    if (!value || !description) {
      return;
    }
    const values = {
      id: Date.now(),
      description,
      value,
      selected,
    };

    objectValues(values);
    setDescription("");
    setValue("");
  }

  return (
    <StyledFormSection>
      <form onSubmit={submitForm}>
        <Input
          label={"Descrição"}
          id={"description"}
          placeholder={"Digite aqui sua descrição"}
          type={"text"}
          onChange={handleDescription}
          value={description}
        />
        <span>Ex: Compra de roupas</span>
        <Input
          label={"Valor (R$)"}
          id={"input-value"}
          placeholder={"Digite aqui o valor"}
          type={"text"}
          onChange={handleValue}
          value={value}
        />
        <Select
          label={"Tipo de valor"}
          id={"select-id"}
          placeholder={"Entrada"}
          options={options}
          onChange={handleSelected}
        />
        <StyledButton primaryButton type="submit">
          Inserir valor
        </StyledButton>
      </form>
      {children}
    </StyledFormSection>
  );
}

export default FormSection;
