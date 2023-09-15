import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../../img/prof.jpg";

const Images = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="image-slider">
      <div className="p-2">
        <img src={Image} alt="Image1" className=" w-full aspect-square object-cover" />
      </div>
      <div className="p-2">
        <img src={Image} alt="Image1" className=" w-full aspect-square object-cover" />
      </div>
      <div className="p-2">
        <img src={Image} alt="Image1" className=" w-full aspect-square object-cover" />
      </div>
      <div className="p-2">
        <img src={Image} alt="Image1" className=" w-full aspect-square object-cover" />
      </div>
      <div className="p-2">
        <img src={Image} alt="Image1" className=" w-full aspect-square object-cover" />
      </div>
    </Slider>
  );
};

export default Images;
