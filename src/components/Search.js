import Topratedrest from "./Topratedrest";
const Search = () => {
  return (
    <div className="Search-box">
      <input type="text" placeholder="Search for Restaurants and food" />
      <button type="submit">Search</button>
      <Topratedrest/>
    </div>
    
  );
};
export default Search;
