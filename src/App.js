import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogStandardPage from "./pages/blog-standard";
import About from "./pages/about";
import Contact from "./pages/contact";
import ReturnExchange from "./pages/return-ecchange";
import CustomerReview from "./pages/customer-review";
import Faq from "./pages/faq";
import BlogDetails from "./pages/blog-details";
import Shop from "./pages/shop";
import ProductDetails from "./pages/product-details";
import Checkout from "./pages/checkout";
import Compare from "./pages/compare";
import BrandCategory from "./pages/brand-category";
import SingleBrandCategory from "./pages/single-brand-category";
import CarDeatils from "./pages/car-deatils";
import CarAuctionDetails from "./pages/car-auction-details";
import CarListingLeftSidebar from "./pages/car-listing-left-sidebar";
import CarListingRightSidebar from "./pages/car-listing-right-sidebar";
import CarListingNoSidebarPage from "./pages/car-listing-no-sidebar";
import SpecialOffer from "./pages/special-offer";
import "../src/assets/css/bootstrap-icons.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/boxicons.min.css";
import "../src/assets/css/fontawesome.min.css";
import "../src/assets/css/nice-select.css";
import "../src/assets/css/swiper-bundle.min.css";
import "../src/assets/css/style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/return-enchange" element={<ReturnExchange />} />
      <Route path="/customer-review" element={<CustomerReview />} />
      <Route path="/blog-standard" element={<BlogStandardPage />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/brand-category" element={<BrandCategory />} />
      <Route path="/single-brand-category" element={<SingleBrandCategory />} />
      <Route path="/car-deatils" element={<CarDeatils />} />
      <Route path="/car-auction-details" element={<CarAuctionDetails />} />
      <Route path="/car-listing-left-sidebar" element={<CarListingLeftSidebar />} />
      <Route path="/car-listing-right-sidebar" element={<CarListingRightSidebar />} />
      <Route path="/car-listing-no-sidebar" element={<CarListingNoSidebarPage />} />
      <Route path="/special-offer" element={<SpecialOffer />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
}

export default App;
