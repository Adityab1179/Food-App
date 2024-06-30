import { useState } from "react";
import RestaurantCards from "./RestaurantCards";
import reslist from "../utils/mockdata";

const Restaurants = () => {
  const [restdata, setRestdata] = useState(reslist);

  const handleFilterClick = () => {
    const filteredData = restdata.filter((res) => res.info.avgRating > 4);
    setRestdata(filteredData);
  };

  return (
    <div className="section-2">
      <button className="filter-btn" onClick={handleFilterClick}>
        Top rated restaurants
      </button>
      <div className="restaurants-section">
        {restdata.map((restaurant) => (
          <RestaurantCards key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
