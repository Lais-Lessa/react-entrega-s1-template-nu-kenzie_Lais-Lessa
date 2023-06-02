import StyledTotalSection from "./StyledTotal";

function TotalValue({ totalBalance }) {
  return (
    <StyledTotalSection>
      <div>
        <h3> Valor total </h3>
        <span>{totalBalance}</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </StyledTotalSection>
  );
}

export default TotalValue;
