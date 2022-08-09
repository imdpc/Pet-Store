import "./App.css";
import FeaturedIn from "./Containers/FeaturedIn/FeaturedIn";
import TargetSale from "./Containers/TargetSales/TargetSale";
import HomeShopNow from "./Components/HomeShopNow/HomeShopNow";

import ExploreWorld from "./Containers/ExploreWorld/ExploreWorld";
import UkStore from "./Components/UkStore/UkStore";
import ProductNav from "./Components/ProductNav/ProductNav";
import ReviewRewards from "./Components/ReviewRewards/ReviewRewards";
import PetShopFooter from "./Components/PetShopFooter/PetShopFooter";
import ShopOurInstagram from "./Containers/ShopOurInstagram/ShopOurInstagram";
import ExploreMore from "./Containers/ExploreMore/ExploreMore";
import ProductPage from "./Containers/ProductPage/ProductPage";
import Nav from "./Components/Nav/Nav";


function App() {
  return (
    <>
      <Nav />
      <HomeShopNow />
      <TargetSale />
      <FeaturedIn />
      <ExploreWorld />
      <UkStore />
      <ProductNav />
      {/* <ReviewRewards /> */}
      <ExploreMore />
      <ShopOurInstagram />
      <PetShopFooter /> */}
      <ProductPage />


    </>
  );
}

export default App;
