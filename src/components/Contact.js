const Contact = () => {
  return (
    <section className="contact">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">Contact</h1>
              <h2 className="page-description">Lanhong Textile</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <h5>Mail</h5>
                    <h6>info@lanhongtextile.com</h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <h5>Address</h5>
                    <h6>
                      Oldstitch Zhejiang Lanhong Textile Technology Co., LTD
                      <br />
                      <br />
                      Dhaka Office: Level #2, House # 18, Road #10, Sector #1,
                      Uttara, Dhaka-1230
                      <br />
                      <br />
                      Phone: +8801784393953,{" "}
                      <span className="pl-3">
                        Email: info@lanhongtextile.com
                      </span>
                      <br />
                      <br />
                      Zhejiang Office: <br />
                      Room 701, Building 1, Conan Business Center, Keqiao
                      District, Shaoxing, Zhejiang
                      <br />
                      Dongguan Office: 145 Renmin North Road, Humen Town,
                      Dongguan City, Guangdong Province
                    </h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-item">
                    <i className="fas fa-phone-alt"></i>
                    <h5>Phone</h5>
                    <h6>+8801784-393953</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-12">
              <div className="row mt-5">
                <div className="col-lg-6">
                  <label>Name Surname</label>
                  <input type="text" className="inp-contact" />
                </div>
                <div className="col-lg-6">
                  <label>Phone</label>
                  <input type="text" className="inp-contact" />
                </div>
                <div className="col-lg-12">
                  <label>Subject</label>
                  <input type="text" className="inp-contact" />
                </div>
                <div className="col-lg-12">
                  <label>Message</label>
                  <textarea
                    type="text"
                    className="ta-contact"
                    rows="4"
                  ></textarea>
                </div>
                <div className="col-lg-12">
                  <button className="btn-contact">Send Message</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
