import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";

const Restaurants = () => {
  const [restdata, setRestdata] = useState([]);

  const Ratingfilter = () => {
    setRestdata([]);
    <Shimmer />;
    setTimeout(() => {
      const filteredData = restdata.filter((res) => res.info.avgRating > 4.1);
      setRestdata(filteredData);
    }, 400);
  };
  const Vegfilter = () => {
    setRestdata([]);
    <Shimmer />;
    setTimeout(() => {
      const filteredData = restdata.filter((res) => res.info.veg === true);
      setRestdata(filteredData);
    }, 400);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9680035&lng=77.55520659999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setRestdata(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (restdata.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="section-2">
      <div className="res-card-heading">
        <h1>Top Restaurant Chain in Saharanpur</h1>
        <div className="heading-btn">
          <button className="filter-btn" onClick={Ratingfilter}>
            Top rated restaurants
          </button>
          <button className="filter-btn" onClick={Vegfilter}>
            Veg
          </button>
        </div>
      </div>
      <div className="restaurants-section">
        {restdata.map((restaurant) => (
          <RestaurantCards key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
