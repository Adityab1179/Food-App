import DealsLink from "../utils/DealsLink";

const DealSection = ({DealsData}) => {

  return (
    <div className="Deals-for-you">
          <div className="Deals">
            <img src={DealsLink +DealsData.info.offerLogo}></img>
            <div className="Deals-desc"></div>
            <h3>{DealsData.info.header}</h3>
            <p>{DealsData.info.description}</p>
          </div>;
    </div>
  );
};
export default DealSection;
