import "./App.css";
import Home from "./Components/Home/Home";
import FeaturedIn from "./Containers/FeaturedIn/FeaturedIn";
import HomeScreen from "./Containers/HomeScreen.css/HomeScreen";
import TargetSale from "./Containers/TargetSales/TargetSale";

function App() {
  return (
    <>
      {/* <Home />
      <HomeScreen /> */}
      <TargetSale />
      <FeaturedIn />
    </>
  );
}

export default App;
