import toppicksImg from "../utils/toppicksImg";
const Topicksection = ({ picks }) => {
  return (
    <div className="topicks">
       <div className="dish-img">
        <img src={toppicksImg+picks.creativeId}></img>
       </div>
    </div>
  );
};
export default Topicksection;
