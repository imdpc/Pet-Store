import "./App.css";
import ResponsiveNav from "./Components/ResponsiveNav/ResponsiveNav";
import AddAddress from "./Containers/AddAddress/AddAddress";
import ShowAddress from "./Containers/AddAddress/showAddress";
import StoreViewCart from "./Containers/Cart/Cart";
import DawnScreen from "./Containers/DawnScreen/DawnScreen";
// import FeaturedIn from "./Containers/FeaturedIn/FeaturedIn";
// import TargetSale from "./Containers/TargetSales/TargetSale";
// import HomeShopNow from "./Components/HomeShopNow/HomeShopNow";

// import ExploreWorld from "./Containers/ExploreWorld/ExploreWorld";
// import UkStore from "./Components/UkStore/UkStore";
// import ProductNav from "./Components/ProductNav/ProductNav";
// import ReviewRewards from "./Components/ReviewRewards/ReviewRewards";
// import PetShopFooter from "./Components/PetShopFooter/PetShopFooter";
// import ShopOurInstagram from "./Containers/ShopOurInstagram/ShopOurInstagram";
// import ExploreMore from "./Containers/ExploreMore/ExploreMore";
// import ProductPage from "./Containers/ProductPage/ProductPage";
// import Nav from "./Components/Nav/Nav";
// import AboutUs from "./Containers/AboutUs/AboutUs";
// import ResponsiveNav from "./Components/ResponsiveNav/ResponsiveNav";
import Home from "./Containers/Home";
import { Payment } from "./Containers/Payment/payment";
import PreviewTheme from "./Containers/PreviewTheme/PreviewTheme";

function App() {
  return (
    <>
      {/* <StoreViewCart /> */}
      {/* <PreviewTheme /> */}
      {/* <AddAddress /> */}
      {/* <ShowAddress /> */}
      {/* <Payment /> */}
      <DawnScreen />
    </>
  );
}

export default App;
