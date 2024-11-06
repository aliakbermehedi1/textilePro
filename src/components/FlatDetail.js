import React from "react";
import ImageGallery from "react-image-gallery";
import { useLocation } from "react-router-dom";

const FlatDetail = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const images = [
    {
      original: "/img/building_Details_0.jpg",
      thumbnail: "/img/building_Details_0.jpg",
    },
    {
      original: "/img/building_Details_1.jpg",
      thumbnail: "/img/building_Details_1.jpg",
    },
    {
      original: "/img/building_Details_2.jpg",
      thumbnail: "/img/building_Details_2.jpg",
    },
    {
      original: "/img/building_Details_3.jpg",
      thumbnail: "/img/building_Details_3.jpg",
    },
    {
      original: "/img/building_Details_4.jpg",
      thumbnail: "/img/building_Details_4.jpg",
    },
    {
      original: "/img/building_Details_5.jpg",
      thumbnail: "/img/building_Details_5.jpg",
    },
    {
      original: "/img/building_Details_6.jpg",
      thumbnail: "/img/building_Details_6.jpg",
    },
  ];

  const imagesSec = [
    {
      original: "/img/GemstoneCalalgoPrimero1.png",
      thumbnail: "/img/GemstoneCalalgoPrimero1.png",
    },
    {
      original: "/img/GemstoneCalalgoPrimero2.jpg",
      thumbnail: "/img/GemstoneCalalgoPrimero2.jpg",
    },
    {
      original: "/img/GemstoneCalalgoPrimero3.jpg",
      thumbnail: "/img/GemstoneCalalgoPrimero3.jpg",
    },
    {
      original: "/img/GemstoneCalalgoPrimero4.jpg",
      thumbnail: "/img/GemstoneCalalgoPrimero4.jpg",
    },
  ];

  return (
    <div className="flat-detail">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">DETAIL</h1>
              <h2 className="page-description">
                <h2 className="page-description">
                  {pathname.includes("gemstone-shaheen-tower")
                    ? "Gemstone Shaheen Tower"
                    : pathname.includes("gemstone-primero")
                    ? "Gemstone Primero"
                    : "Default Title"}
                </h2>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="fd-top flat-detail-content">
              <div>
                <h3 className="flat-detail-title">
                  <h2 className="page-description">
                    {pathname.includes("gemstone-shaheen-tower")
                      ? "Gemstone Shaheen Tower"
                      : pathname.includes("gemstone-primero")
                      ? "Gemstone Primero"
                      : ""}
                  </h2>
                </h3>
                <p className="fd-address">
                  <i className="fas fa-map-marker-alt"></i>
                  {pathname.includes("gemstone-shaheen-tower")
                    ? "Sher-e-bangla Road."
                    : pathname.includes("gemstone-primero")
                    ? "Block - F, Bashundhara, Dhaka."
                    : ""}
                </p>
              </div>
              <div>{/* <span className="fd-price">$650</span> */}</div>
            </div>
            {pathname.includes("gemstone-shaheen-tower") ? (
              <ImageGallery
                flickThreshold={0.5}
                slideDuration={0}
                items={images}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
              />
            ) : pathname.includes("gemstone-primero") ? (
              <ImageGallery
                flickThreshold={0.5}
                slideDuration={0}
                items={imagesSec}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
              />
            ) : null}
            <div className="row">
              <div className="col-lg-12">
                {pathname.includes("gemstone-shaheen-tower") ? (
                  <div>
                    <div className="fd-item">
                      <h4>Description</h4>
                      <p className="text-justify">
                        <b>Gemstone Real Estate Ltd.</b> proudly announcing a
                        unique project at Sher-e- Bangla Road, West Dhanmondhi,
                        Dhaka Namely Gemstone Shaheen Tower.{" "}
                      </p>
                      <p className="pt-4 text-justify">
                        The Location of the project is excellent in respect of
                        communica- tion and position. There are so many
                        facilities connecting the project like super market,
                        International School, University, Convention Hall,
                        Hospitals etc. The project is 15 minutes walking
                        distance to Satmasjid Road in north-east direction and
                        also 15 minutes walking distance to Jigatola Bus stand
                        in south-east direction. Renowned structural Engineer
                        and Architect have designed this project considering the
                        Bangladesh National Build- ing Code (BNBC). Maximum
                        earthquake factor and wind load has taken into
                        consideration in designing, Cross-ventilation, natural
                        lighting system and air circulation with other hygienic
                        factors are main aspects of the project.
                      </p>
                    </div>
                  </div>
                ) : pathname.includes("gemstone-primero") ? (
                  <div className="fd-item">
                    <h4>Description</h4>
                    <p className="text-justify">
                      We are very much delighted to bring your notice to the
                      announcement of our project at Bashundhara R/A, Dhaka, the
                      most sought after location of the city dwellers. The name
                      of the project is <b>'Gemstone PRIMERO'</b> located at
                      Plot - 630, Road - 19, Block - F, Bashundhara R/A, Dhaka.
                      The location is also special for its quiet and calm
                      environment, away from hustle of the city crowd.
                    </p>
                    <p className="pt-3 text-justify">
                      The plot is south facing with 25' wide road. the place is
                      also pollution free with quiet and calm environment.
                    </p>
                    <p className="pt-3 text-justify">
                      While designing, the architect put most of his efforts on
                      maximization of the functional aspects and aesthetics. 7
                      Exclusive apartments with some car parking facilities the
                      project is a symbol of perfect contemporary architecture,
                      equipped with modern stylish and elegant fittings and
                      fixtures.
                    </p>
                  </div>
                ) : (
                  ""
                )}

                {pathname.includes("gemstone-shaheen-tower") ? (
                  <div className="fd-item fd-property-detail">
                    <h4>Features & Amenities</h4>
                    <div className="row">
                      <div className="col-lg-12">
                        <span className="font-semibold">
                          MAJOR STRUCTURAL AND ENGINEERING MATERIALS:{" "}
                        </span>
                        <ul className="list-disc">
                          <li>
                            R.C.C framed structure designed as per BNBC code
                            recommendation considering sufficient earth quake
                            load & wind force using latest software.
                          </li>
                          <li>
                            Piling and pile-cap foundation on the basis of soil
                            test report.
                          </li>
                          <li>
                            Construction supervision will be done by graduate
                            Civil Engineers with wide range of professional
                            experience.
                          </li>
                          <li>
                            Best quality stone chips, first class bricks, best
                            quality sand etc.. will be used.
                          </li>
                          <li>
                            500W MS Bar, best quality cement etc. will be used
                            directly from factory.
                          </li>
                          <li>
                            To ensure highest quality of workmanship in
                            Implementation of design at every phase, a team of
                            qualified professional Engineers will be engaged.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">M.S BAR</span>
                        <ul className="list-disc">
                          <li>500WMS Bar From BSRM/KSRM/ AKS/ equivalent.</li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">CEMENT</span>
                        <ul className="list-disc">
                          <li>
                            Entire structural work, Bricks work, plastering and
                            finishing will be done by Shah/Bashundhara/ Fresh
                            and equivalent brand.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">BRICKS</span>
                        <ul className="list-disc">
                          <li>
                            1st class bricks from a reputed Company directly
                            from Brick field.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">AGGREGATES</span>
                        <ul className="list-disc">
                          <li>
                            3/4 "downgraded stone chips will be used for piling,
                            foundation, column and beams.
                          </li>
                          <li>Sylhet sand with FM 2.5.</li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">FINISHING WORK</span>
                        <ul className="list-disc">
                          <li>
                            24"X 24" Homogeneous RAK/ CBC/ GREAT WALL/
                            equivalent brand in main floor.
                          </li>
                          <li>
                            Homogeneous tiles in the stair case and lift lobby.
                          </li>
                          <li>Special type homogenous tiles for stair case.</li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">WALL</span>
                        <ul className="list-disc">
                          <li>
                            5" Brick wall with 1st class bricks including
                            plaster.
                          </li>
                          <li>
                            Plastic paint on inner side walls & weather
                            coat(Asian paint / Berger paint) on outer surface of
                            out side walls.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">MAIN DOOR</span>
                        <ul className="list-disc">
                          <li>
                            Decorative main entrance door shutter will be of
                            solid Segun wood with French polish/ sprit polish.
                          </li>
                          <li>
                            Door frame will be of best quality Mahogoany/
                            gamari/ shilkarai equivalent.
                          </li>
                          <li>Good quality door lock, Check viewer.</li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">INTERNAL DOOR</span>
                        <ul className="list-disc">
                          <li>
                            Door Shutter will be of Pertex/Super board/Akiz
                            (Gargon) flus door.
                          </li>
                          <li>
                            Door frames will be of solid Mahogany wood /Gamari/
                            Shilkarai equivalent.
                          </li>
                          <li>Good quality door lock at all bed room doors.</li>
                          <li>
                            Very attractive plastic door will be provided in all
                            Bathrooms.
                          </li>
                          <li>
                            All kitchen and Veranda door will be of veneered
                            flus door with Enamel paint.
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">WINDOW</span>
                        <ul className="list-disc">
                          <li>
                            Windows will be of aluminum framed sliding section
                            with 5 mm white glass.
                          </li>
                          <li>Safety grills in all windrows</li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">BATHROOM FEATURES</span>
                        <ul className="list-disc">
                          <li>
                            Wall tiles of CBC/RAK/ GREAT WALL/ SHELTECH /
                            equivalent Ceramic with matching floor tiles.
                          </li>
                          <li>
                            Floor with Non slip RAK/ CBC/ SHELTECH / homogeneous
                            or equivalent.
                          </li>
                          <li>
                            Fitting and fixture of Sharif/ Nazma /Shatter
                            equivalent.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">KITCHEN FEATURES</span>
                        <ul className="list-disc">
                          <li>
                            12"X12" RAK/CBC/ GREAT WALL/ SHELTECH/ equivalent.
                          </li>
                          <li>
                            Homogeneous floor tiles and glazed wall tiles (8"x
                            12") up to 7' height of the wall.
                          </li>
                          <li>
                            Platform with best quality tiles on top and
                            provision for double burner gas outlet.
                          </li>
                          <li>One stainless steel sink bowl.</li>
                          <li>
                            Provision for exhaust fan at suitable position.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">RAILING</span>
                        <ul className="list-disc">
                          <li>
                            Beautiful looking verandah railing will be provide.
                          </li>
                          <li>
                            Stair railing will be of MS metal post and MS
                            railing.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">LIFT</span>
                        <ul className="list-disc">
                          <li>
                            2 Nos lift of 8 person capacity each(FUJI/ SIGMA)
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">
                          GENERATOR & SUBSTATION
                        </span>
                        <ul className="list-disc">
                          <li>
                            Adequate capacity generator from a reputed company
                            for lift, water pump, Emergency lighting.
                          </li>
                          <li>
                            Adequate capacity substation with transformer and
                            panels from a reputed company.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : pathname.includes("gemstone-primero") ? (
                  <div className="fd-item fd-property-detail">
                    <h4>Features & Amenities</h4>
                    <div className="row">
                      {/* Start */}
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Building</span>
                        <ul className="list-disc">
                          <li>08-storied (G+7) R.C.C frame structure.</li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Ground Floor</span>
                        <ul className="list-disc">
                          <li>Car Parking, Toilet, Guard room, waiting etc.</li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Roof</span>
                        <ul className="list-disc">
                          <li>
                            Common to all owners for cloth drying and general
                            with community space use.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">R.C.C</span>
                        <ul className="list-disc">
                          <li>In Foundation, Column & Grade Beam:</li>
                          <li>
                            Proportion 1:1.5:3 concrete using stone chips and
                            Sylhet sand. In Slab, Beam Railing, Drop Wall, False
                            Slab, etc. Proportion of 1:2:4 using stone chips and
                            50% Sylhet sand. 72 grade M.S. deformed bar to be
                            used as reinforcement. Structural design shall be
                            done considering earthquake and wind force as per
                            requirements set in the Bangladesh National Building
                            Code (BNBC).
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Walls</span>
                        <ul className="list-disc">
                          <li>
                            a. 125mm solid brick walls with well burnt 1st class
                            Auto brick.
                          </li>
                          <li>
                            b. Proportion 1:6 using local sand to prevent
                            salinity.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Plaster</span>
                        <ul className="list-disc">
                          <li>
                            Sand cement plaster using washed clean medium sand.
                            External plaster shall have admixture to prevent
                            dampness.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Floor</span>
                        <ul className="list-disc">
                          <li>
                            400mm x 400mm Homogeneous tiles (FU wang/RAK/CBC OR
                            equivalent).
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">
                          Lobby & Stair Case
                        </span>
                        <ul className="list-disc">
                          <li>
                            Homogeneous tiles (Great Wall/CBC OR equivalent).
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Main Door</span>
                        <ul className="list-disc">
                          <li>
                            Chawkat of Teak Chamble. Solid wooden shutter of
                            Segun wood with door chain, door viewer & good
                            quality handle lock.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Internal Doors:</span>
                        <ul className="list-disc">
                          <li>
                            Chawkat of Teak Chamble. Door shutter shall be of
                            Garjon veneered /flush door partex / Equivalent with
                            mortice lock. Toilet doors shall be of uPVC/ plastic
                            shutter. All wooden surfaces shall be polished and
                            finished with clear varnish.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Painting</span>
                        <ul className="list-disc">
                          <li>
                            a. Interior: Plastic Emulsion paint of Berger,
                            Elite, Asian or equivalent of elegant colour.
                          </li>
                          <li>
                            b. Exterior: Weather coat paint of Berger, Elite,
                            Asian or equivalent of elegant colour.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Toilet</span>
                        <ul className="list-disc">
                          <li>
                            Master Toilet: Commode/ Pan with lowdown, basin with
                            pedestal (Glory Ceramics, Star or equivalent). Hot &
                            cold water line. Moving head shower & mixer. 300mm x
                            450mm glazed tiles (Akiz/ X Ceramic Group /Great
                            Wall or equivalent) on wall. 300mm x 300mm
                            Homogeneous tiles (Euro/CBC or equivalent) on floor.
                          </li>
                          <li>
                            Second Toilet: Commode/ Pan with lowdown (Glory
                            Ceramics/RAK or equivalent). Basin with pedestal &
                            Mirror of appropriate size & shape, Moving hand
                            shower. 300mm x 300mm Homogeneous Tiles (Euro/CBC or
                            equivalent) on floor.
                          </li>

                          <li>
                            Common Toilet: Water closet (WC) with lowdown (RAK/
                            Excellent or equivalent). Basin with pedestal &
                            Mirror of appropriate size & shape, Moving hand
                            shower. 300mm x 300mm Homogeneous Tiles (Euro/CBC or
                            equivalent) on floor.
                          </li>

                          <li>
                            Others: All toilet fittings will be of local made
                            good quality (Ratan Metal/ Sattar/ Nazma or
                            equivalent) Geyser excluded.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Kitchen</span>
                        <ul className="list-disc">
                          <li>
                            300mm x 450mm glazed tiles (FU Wang/ X Ceramic Group
                            /RAK or equivalent) on wall. 400mm x 400mm
                            Homogeneous Tiles (Great Wall/RAK/CBC OR equivalent)
                            on Floor. Single-bowl single-tray stainless steel
                            sink. Double burner gas outlet.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Electrical</span>
                        <ul className="list-disc">
                          <li>
                            Concealed wiring with BRB/ BBS cables through PVC
                            conduits.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Lift</span>
                        <ul className="list-disc">
                          <li>
                            1 Nos- 6 (SIX) - person Fuji HD, Sigma elevator or
                            equivalent.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <span className="font-semibold">Generator</span>
                        <ul className="list-disc">
                          <li>
                            Stand - by diesel generator of residential type
                            silencer & sound canopy to supply adequate power to
                            meet emergency need of apartments plus power for
                            lift, stair and parking area (Europian Standard,
                            China Imported).
                          </li>
                        </ul>
                      </div>
                      {/* End */}
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="fd-item fd-features">
                  <h4>Terms & Conditions</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <i className="fa fa-check"></i>
                      <span>ALLOTMENT</span>

                      <ul className="pt-1 list-disc">
                        <li>
                          Interested buyers are welcome to submit an application
                          form along with the first down payment or booking
                          payment to get an allotment.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <i className="fa fa-check"></i>
                      <span>ALLOTMENT PREFERENCE</span>

                      <ul className="pt-1 list-disc">
                        <li>
                          Allotment will be made on first come first serve
                          basis. Buyer willing to make one time payment will be
                          given preference. The possession of the apartment will
                          be given only after full payment.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <i className="fa fa-check"></i>
                      <span>PAYMENT</span>

                      <ul className="pt-1 list-disc">
                        <li>
                          All payment should be made on payable to Gemstone Real
                          Estate Ltd. Installment of payment to be made on due
                          dates. Any delay of payment up to two months will make
                          the buyer liable to pay an interest of 4% per month on
                          the amount payment delayed. If the payment is delayed
                          beyond two months then the company shall have the
                          right to cancel theallotment. In such an event, the
                          amount paid by the buyer will be refunded after
                          deducting earnest money Tk. 200,000/- (Taka Two lac
                          only).
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <i className="fa fa-check"></i>
                      <span>COMPANY RIGHT</span>

                      <ul className="pt-1 list-disc">
                        <li>
                          The company reserves the right to accept or reject any
                          application for allotment. The company may change the
                          design and specification of the project for the
                          overall interest of the buyers or due to unavoidable
                          reasons.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <i className="fa fa-check"></i>
                      <span>TRANSFER COST</span>

                      <ul className="pt-1 list-disc">
                        <li>
                          The buyer will bear all cost relating to registration
                          transfer fee including VAT charges (if any) and other
                          charges as admissible by the govt. authority.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <i className="fa fa-check"></i>
                      <span>INCIDENTAL COST</span>

                      <ul className="pt-1 list-disc">
                        <li>
                          Connection fees, security deposit and other incidental
                          charges and cost relating to gas, water & sewerage,
                          electricity connection are not including in the price
                          of apartment, extra charge for solar panel may be
                          imposed incaseof electricity connection.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <i className="fa fa-check"></i>
                      <span>OWNER'S CO-OPERATIVE SOCIETY</span>

                      <ul className="pt-1 list-disc">
                        <li>
                          Owner's association will be formed. All allottees
                          after full payment of installments and dues must
                          become member of this association for the common
                          interest. Each allottee (for each allotment of
                          apartments) must initially deposit TK. 50,000/-(TK
                          Fifty thousand) only with the company in the reserve
                          fund for the management expenses of the complex which
                          will be refunded to the owner's association after hand
                          over of the project by the company.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <i className="fa fa-check"></i>
                      <span>REFUND</span>

                      <ul className="pt-1 list-disc">
                        <li>
                          For any reason beyond the control to the company
                          including natural disaster or economic depression the
                          company may abandon the project and terminate the
                          contract. In such an event, the company shall refund
                          to the buyer all money including the deposit.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <i className="fa fa-check"></i>
                      <span>BANK LOAN</span>

                      <ul className="pt-1 list-disc">
                        <li>
                          Company will make all possible arrangement with loan
                          giving agencies but approval of loan shall depend on
                          the bank and the allottee's eligibility. Allottee will
                          take all steps to make all possible payment as per
                          company's payment schedule irrespective of bank loan.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="fd-item">
                  <h4>Maps</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.23366322062492!2d90.36196289679911!3d23.7566988298619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5bc450fc35%3A0x71d77e7d3f2d3401!2sDutch-Bangla%20Bank%20Limited%20(DBBL)!5e0!3m2!1sen!2sbd!4v1729507816085!5m2!1sen!2sbd"
                    width="100%"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div> */}

                {pathname.includes("gemstone-shaheen-tower") ? (
                  <img
                    className="img-fluid w-[200px]"
                    src="/img/building_Details_0.jpg"
                    alt="flat"
                  />
                ) : pathname.includes("gemstone-primero") ? (
                  <img
                    className="img-fluid w-[200px]"
                    src="/img/GemstoneCalalgoPrimero1.png"
                    alt="flat"
                  />
                ) : null}
              </div>
              {/* <div className="col-lg-4">
                <div className="fd-sidebar-item">
                  <h4>Recently Added</h4>
                  <div className="recently-item">
                    <img src="/img/building.jpg" alt="detail" width="50px" />
                    <span>Gemstone Real Estate Ltd.</span>
                  </div>
                  <div className="recently-item">
                    <img
                      src="/img/GemstoneCalalgoPrimero2.jpg"
                      alt="detail"
                      width="50px"
                    />
                    <span>Gemstone Primero</span>
                  </div>
                </div>
                <div className="fd-sidebar-item">
                  <h4>Category</h4>
                  <ul className="category-ul">
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                  </ul>
                </div>
                <div className="fd-sidebar-item">
                  <h4>Recently Added</h4>
                  <div className="recently-item">
                    <img src="/img/product1.jpeg" alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                  <div className="recently-item">
                    <img src="/img/product1.jpeg" alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                  <div className="recently-item">
                    <img src="/img/product1.jpeg" alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatDetail;
