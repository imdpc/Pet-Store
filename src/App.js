import "./App.css";
import ResponsiveNav from "./Components/ResponsiveNav/ResponsiveNav";
import AddAddress from "./Containers/AddAddress/AddAddress";
import ShowAddress from "./Containers/AddAddress/showAddress";
import StoreViewCart from "./Containers/Cart/Cart";
import DawnScreen from "./Containers/DawnScreen/DawnScreen";
import Home from "./Containers/Home";
import { Payment } from "./Containers/Payment/payment";
import PreviewTheme from "./Containers/PreviewTheme/PreviewTheme";
import LandingPageMobile from "./Containers/LandingPageMobile/LandingPageMobile ";
import Blog from './Components/Blog/Blog';
import AllBlogList from './Containers/AllBlogList/AllBlogList';
import SingleBlogPreview from "./Containers/SingleBlogPreview/SingleBlogPreview";

function App() {
  return (
    <>
      {/* <StoreViewCart /> */}
      {/* <PreviewTheme /> */}
      {/* <AddAddress /> */}
      {/* <ShowAddress /> */}
      {/* <Payment /> */}
      {/* <DawnScreen /> */}
      {/* <LandingPageMobile /> */}
      {/* <Blog /> */}
      {/* <AllBlogList /> */}
      {/* <SingleBlogPreview /> */}
      <Home/>
    </>
  );
}

export default App;
