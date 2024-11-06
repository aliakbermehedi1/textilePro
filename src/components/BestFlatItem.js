import {Link} from "react-router-dom"
const BestFlatItem = ({flatState, imageD}) => {
    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img h-96" src={imageD} alt="flat" />
                    <div className={`best-estate-state ${flatState ==="For Rent" ? "bg-green" : "bg-red" }`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">Gemstone Real Estate Ltd.</Link></h4>
                    <span><Link to="/">Gemstone Shaheen Tower.</Link></span>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Sher-e-bangla Road.</span>
                        </div>
                        {/* <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>2 Bathrooms</span>
                        </div> */}
                    </div>
                    {/* <h5 className="best-estate-price">$650</h5> */}
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem