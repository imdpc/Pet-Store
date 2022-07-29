import "./App.css";
import FeaturedIn from "./Containers/FeaturedIn/FeaturedIn";
import TargetSale from "./Containers/TargetSales/TargetSale";
import HomeShopNow from "./Components/HomeShopNow/HomeShopNow";
import NavBar from "./Components/NavBar/NavBar";
import ExploreWorld from "./Containers/ExploreWorld/ExploreWorld";
import UkStore from "./Components/UkStore/UkStore";
import ProductNav from "./Components/ProductNav/ProductNav";
import ReviewRewards from "./Components/ReviewRewards/ReviewRewards";
import PetShopFooter from "./Components/PetShopFooter/PetShopFooter";
import ShopOurInstagram from "./Containers/ShopOurInstagram/ShopOurInstagram";
import ExploreMore from "./Containers/ExploreMore/ExploreMore";

function App() {
  return (
    <>
      <NavBar />
      <HomeShopNow />
      <TargetSale />
      <FeaturedIn />
      <ExploreWorld />
      <UkStore />
      <ProductNav />
      <ReviewRewards />
      <ExploreMore />
      <ShopOurInstagram />
      <PetShopFooter />
    </>
  );
}

export default App;
