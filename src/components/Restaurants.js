import RestaurantCards from "./RestaurantCards"
import reslist from "../utils/mockdata";
import Search from "./Search"
const Restaurants = () => {
    return (
      <div className="section-2">
         <Search/>
      <div className="restaurants-section">
        {reslist.map(restaurant => (<RestaurantCards resdata={restaurant}/> ))}
      </div>
      </div>
    );
  };
  export default Restaurants;