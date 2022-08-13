import "./App.css";
import ResponsiveNav from "./Components/ResponsiveNav/ResponsiveNav";
import AddAddress from "./Containers/AddAddress/AddAddress";
import ShowAddress from "./Containers/AddAddress/showAddress";
import Home from "./Containers/Home";
import PreviewTheme from "./Containers/PreviewTheme/PreviewTheme";

function App() {
  return (
    <>
      <ShowAddress />
      <AddAddress />
      {/* <PreviewTheme /> */}
    </>
  );
}

export default App;
