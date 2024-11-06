import { Link } from "react-router-dom";

const FlatItem = ({
  slug,
  header,
  katha,
  location,
  building,
  parking,
  noOfFlat,
  sizeOfFlat,
  lift,
  parkingDesc,
  roofFacilities,
}) => {
  return (
    <div className="text-center col-lg-6 col-12 col-md-6">
      <div className="item">
        <div className="item-image">
          <img
            className="img-fluid"
            src={
              slug === "gemstone-primero"
                ? "/img/GemstoneCalalgoPrimero2.jpg"
                : "/img/building.jpg"
            }
            alt="flat"
          />
        </div>
        <div className="item-description">
          <div className="d-flex justify-content-between mb-3">
            <span className="item-title">{header}</span>
            <span className="text-xs font-semibold">{katha}</span>
          </div>
          <div className="item-icon d-flex alig-items-center justify-content-between">
            <div>
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span className="pl-1">{location}</span>
            </div>
          </div>
          <div className="item-icon d-flex alig-items-center justify-content-between mt-2">
            <div>
              <i className="fas fa-check-circle"></i>
              <span className="pl-1 text-xs">{building}</span>
            </div>

            <div></div>
          </div>
          <div className="item-icon d-flex alig-items-center justify-content-between mt-2">
            <div>
              <i className="fas fa-check-circle"></i>
              <span className="pl-1 text-xs">Flats: {noOfFlat}</span>
            </div>

            <div></div>
          </div>
          <div className="item-icon d-flex alig-items-center justify-content-between mt-2">
            <div>
              <i className="fas fa-check-circle"></i>
              <span className="pl-1 text-xs">Size of Flats: {sizeOfFlat}</span>
            </div>
          </div>
          <div className="item-icon d-flex alig-items-center justify-content-between mt-2">
            <div>
              <i className="fas fa-check-circle"></i>
              <span className="pl-1 text-xs">Lift: {lift}</span>
            </div>
          </div>
          <div className="item-icon d-flex alig-items-center justify-content-between mt-2">
            <div>
              <i className="fas fa-check-circle"></i>
              <span className="pl-1 text-xs">Parkings: {parking}</span>
            </div>
          </div>
          <div className="item-icon d-flex alig-items-center justify-content-between mt-2">
            <div>
              <i className="fas fa-check-circle"></i>
              <span className="pl-1 text-xs">Parking: {parkingDesc}</span>
            </div>
          </div>
          <div className="item-icon d-flex justify-content-between mt-2">
            <div>
              <i className="fas fa-check-circle"></i>
              <span className="pl-1 text-xs">
                Roof facilities: {roofFacilities}
              </span>
            </div>
          </div>
          <div className="item-icon d-flex alig-items-center justify-content-between">
            <div>
              <i className="fas fa-check-circle"></i>
              <span className="pl-1 text-xs">
                Developer: Gemstone Real Estate Limited.
              </span>
            </div>
            <Link to={`/flat/${slug}`} className="item-title">
              <button className="btn btn-detail">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatItem;
