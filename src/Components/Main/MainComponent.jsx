import HeaderComponents from "../Header/HeaderComponents";
import StyledMainComponent from "./StyledMainComponent";

function MainComponent({ children }) {
  return (
    <>
      <HeaderComponents />
      <StyledMainComponent>{children}</StyledMainComponent>
    </>
  );
}
export default MainComponent;
