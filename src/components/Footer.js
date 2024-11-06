import React from "react";
const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* <i className="fas fa-home"></i> */}
              <img src="/img/logo.png" alt="product" className="w-12 h-10" />
              <span className="footer-other-text d-block mt-3 mb-3">
              Gemstone Real Estate Ltd. proudly announcing unique project Gemstone Shaheen Tower & Gemstone Primero.
              </span>
              <div className="footer-social">
                <div className="footer-social-item">
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="footer-social-item">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="footer-social-item">
                  {" "}
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <p className="footer-title">Menu</p>
              <ul className="footer-ul">
                <li>Home</li>
                {/* <li>Blog</li> */}
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <div>
                <p className="footer-title">Categories</p>
                <ul className="footer-ul">
                  <li>Gemstone Shaheen Tower</li>
                  <li>Gemstone Primero</li>
                  {/* <li>Category 2</li>
                  <li>Category 3</li>
                  <li>Category 4</li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <p className="footer-title">Contact</p>
              <ul className="footer-ul">
                <li className="d-flex">
                  <div className="footer-info-item">
                    <i className="fas fa-clock"></i>
                  </div>{" "}
                  <span>08:00-18:00</span>
                </li>
                <li className="d-flex">
                  <div className="footer-info-item">
                    <i className="fas fa-envelope"></i>
                  </div>{" "}
                  <span>gemstonereltd@gmail.com</span>
                </li>
                <li className="d-flex">
                  <div className="footer-info-item">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>{" "}
                  <span className="pl-2">
                    Nest Osmium Tower (4th Floor), 1/1, Satmasjid Road, Block-E,
                    Mohammadpur Housing Estate, Dhaka-1207.
                  </span>
                </li>
                <li className="d-flex">
                  <div className="footer-info-item">
                    <i className="fas fa-phone-alt"></i>
                  </div>{" "}
                  <span>01776-767687, 01776-767685, 01776-767609</span>
                </li>
              </ul>
            </div>
            {/* <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Subscribe</p>
                        <span className="footer-other-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna
                        </span>
                        <div className="subscribe-area mb-2 mt-2">
                            <input type="text" placeholder="Email" className="inp-footer w-100" />
                        </div>
                        <button className="btn-subscribe">Subscribe</button>
                    </div> */}
          </div>
        </div>
      </section>

      <div className="text-xs md:text-sm py-2 bg-gray-700 text-white text-center">
        Copyright © 2024 Gemstone Real Estate - All Rights Reserved.
      </div>
      {/* end */}
    </div>
  );
};

export default Footer;
