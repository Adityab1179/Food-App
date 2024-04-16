import mockdata from "../utils/mockdata";
import { useState } from "react";

const Topratedrest = () => {
  const [restdata, setRestList] = useState(mockdata);

  const handleFilterClick = () => {
    const filteredData = mockdata.filter((res) => res.info.avgRating > 4);
    setRestList(filteredData);
  };

  return (
    <button className="filter-btn" onClick={handleFilterClick}>
      Filter
    </button>
  );
};

export default Topratedrest;
