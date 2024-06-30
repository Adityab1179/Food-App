import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header"
import Restaurants from "./components/Restaurants"
import BannerSection from "./components/Bannersection";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <BannerSection/>
      <Restaurants/>
    </div>
  );
};

ReactDOM.render(<AppLayout />, document.querySelector(".root"));
