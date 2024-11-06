import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title"
import BestFlatItem from "./BestFlatItem"

export default class BestFlatList extends Component {
    render() {
        const title = {
            text: "Gemstone Real Estate Ltd.",
            description: "Gemstone Real Estate Ltd. proudly announcing a unique project at Sher-e- Bangla Road, West Dhanmondhi, Dhaka Namely Gemstone Shaheen Tower."
        }
        const settings = {
            infinite: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoPlay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };
        return (
            <section className="section-best-estate z-10"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={title.text} description={title.description} />
                            <Slider {...settings}>
                                <BestFlatItem flatState="For Sale" imageD="/img/building.jpg" />
                                <BestFlatItem flatState="For Sale" imageD="/img/GemstoneCalalgoPrimero2.jpg" />
                                <BestFlatItem flatState="For Sale" imageD="/img/building.jpg" />
                                <BestFlatItem flatState="For Sale" imageD="/img/GemstoneCalalgoPrimero2.jpg" />
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}