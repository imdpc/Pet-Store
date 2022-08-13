import React from "react";
import ExploreMoreCard from "../Components/ExploreMoreCard/ExploreMoreCard";
import Nav from "../Components/Nav/Nav";
import PetShopFooter from "../Components/PetShopFooter/PetShopFooter";
import ProductNav from "../Components/ProductNav/ProductNav";
import ReviewRewards from "../Components/ReviewRewards/ReviewRewards";
import UkStore from "../Components/UkStore/UkStore";
import HomeShopNow from "./../Components/HomeShopNow/HomeShopNow";
import AboutUs from "./AboutUs/AboutUs";
import FeaturedIn from "./FeaturedIn/FeaturedIn";
import ProductPage from "./ProductPage/ProductPage";
import ShopOurInstagram from "./ShopOurInstagram/ShopOurInstagram";
import TargetSale from "./TargetSales/TargetSale";
import ExploreWorld from "./ExploreWorld/ExploreWorld";
import ExploreMore from "./ExploreMore/ExploreMore";
import ResponsiveNav from "../Components/ResponsiveNav/ResponsiveNav";

const Home = () => {
  return (
    <>
      <Nav />
      <HomeShopNow />
      <TargetSale />
      <FeaturedIn />
      <ExploreWorld />
      <UkStore />
      <ProductNav />
      <ExploreMore />
      {/* <ProductPage /> */}
      <ShopOurInstagram />
      {/* <AboutUs /> */}
      <PetShopFooter />
    </>
  );
};

export default Home;
