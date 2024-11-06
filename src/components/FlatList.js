import Title from "./Title";
import FlatItem from "./FlatItem";

const FlatList = () => {
  const title = {
    text: "Project at a glance",
    description:
      "Gemstone Real Estate Ltd. proudly announcing unique project Gemstone Shaheen Tower & Gemstone Primero.",
  };
  return (
    <section className="section-all-re">
      <div className="container">
        <Title title={title.text} description={title.description} />
        <div className="row">
          <FlatItem
            header="Gemstone Shaheen Tower."
            katha="10.75 Katha."
            location="Sher-e-bangla Road."
            building="Building: B+G+9 (10 Storied)"
            parking="26 Nos."
            noOfFlat="Total 36 Nos. (per floor 4 units)"
            sizeOfFlat="1650 sft, 1550 sft, 1500 sft, 1200 sft. (Approx)"
            lift="2 Nos lift of 8 persons capacity each."
            parkingDesc="Basement and Ground floor is reserved for car parking, etc."
            roofFacilities="Roof Top Garden , Community Space, Lift Machine Room etc."
            slug="gemstone-shaheen-tower"
          />

          <FlatItem
            header="Gemstone Primero"
            katha="4 Katha"
            location="Block - F, Bashundhara, Dhaka."
            building="(G+7) = 8 Storied Building."
            parking="07 Nos."
            noOfFlat="Total 7 Nos. ( 1 unit per floor )."
            sizeOfFlat="1950 Sft. (Approx.)"
            lift="1 Nos Lift of 6 Persons Capacity."
            parkingDesc="Ground Floor is Reserved for Car Parking."
            roofFacilities="Roof Top is Available for Cloth Dryin Community Space etc."
            slug="gemstone-primero"
          />
          {/* <FlatItem slug="lorem-ipsum-3" />
          <FlatItem slug="lorem-ipsum-4" />
          <FlatItem slug="lorem-ipsum-5" />
          <FlatItem slug="lorem-ipsum-6" /> */}
        </div>
      </div>
    </section>
  );
};

export default FlatList;
