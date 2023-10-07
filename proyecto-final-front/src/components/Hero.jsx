import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const PrevArrow = (props) => {
  return (
    <button onClick={props.onClick}>
      <svg
        className="w-6 h-6 text-white dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
        />
      </svg>
    </button>
  );
};

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const NextArrow = (props) => {
  return (
    <button onClick={props.onClick}>
      <svg
        className="w-6 h-6 text-white dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
        />
      </svg>
    </button>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const items = [
   { id: 1, name: "Laptops & Notebooks", image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/14d50122564395.56361f7cc8ff6.jpg" },
   { id: 2, name: "Laptops & Notebooks", image: "https://t4.ftcdn.net/jpg/06/22/39/91/360_F_622399137_jlEDsEN0pUMZA6jMKShRoq2po69QBQXj.jpg" },
   { id: 3, name: "Laptops & Notebooks", image: "https://www.infobae.com/new-resizer/7MxwerIKUX2B3TIqryN6OGp1LEg=/arc-anglerfish-arc2-prod-infobae/public/WJXAWHBY3RCMFLMB6JAPTBYV74.jpg" },
   { id: 4, name: "Laptops & Notebooks", image: "https://www.mypress.mx/img/articulos/1997.jpg" },
];

const Hero = () => {
  const sliderRef = React.useRef(null);

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="py-16">
      <Slider {...settings} ref={sliderRef}>
        {items.map((item) => (
      <>
      <div className="">
          <div key={item.id} className="relative h-[100vh] flex items-center justify-center before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-sky-950/50">
            <img src={item.image} alt={item.name} className="absolute -z-10 top-0 left-0 w-full h-full object-cover" />
            <div className="container relative px-2 mx-auto">
              <button className="absolute inset-y-0 left-0 w-16 " onClick={goToPrevSlide}>
                {settings.prevArrow}
              </button>
              <h1 className="text-5xl text-center font-black text-white">{item.name}</h1>
              <button className="absolute inset-y-0 right-4 w-16 " onClick={goToNextSlide}>
                {settings.nextArrow}
              </button>
            </div>
            </div>
          </div>
          </>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;

