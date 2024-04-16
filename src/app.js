import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header"
import Restaurants from "./components/Restaurants"
import Topratedrest from "./components/Topratedrest";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Restaurants/>
    </div>
  );
};

ReactDOM.render(<AppLayout />, document.querySelector(".root"));
