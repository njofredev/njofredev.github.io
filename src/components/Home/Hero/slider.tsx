import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pricedeta } from "@/app/api/data";
import { Icon } from "@iconify/react";

const CardSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="lg:-mt-4 mt-16 pb-12">
      <Slider {...settings}>
        {pricedeta.map((item, index) => (
          <div key={index} className="pr-6">
            <div className="px-5 py-6 bg-dark_grey bg-opacity-60 backdrop-blur-md border border-dark_border border-opacity-5 rounded-xl hover:border-primary hover:border-opacity-35 transition-all duration-300 group">
              <div className="flex items-center gap-5">
                <div
                  className={`bg-[#0c372a] bg-opacity-35 p-3 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                >
                  <Icon
                    icon={item.icon}
                    className="w-9 h-9"
                  />
                </div>
                <div>
                  <p className="text-white text-16 font-bold mb-0 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </p>
                  <span className="text-muted text-opacity-50 text-13 font-normal">
                    {item.short}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <div>
                  <p className="text-14 font-medium text-white mb-0 leading-none">
                    {item.price}
                  </p>
                </div>
                <div>
                  <span className="bg-primary bg-opacity-10 text-primary border border-primary border-opacity-20 px-2 py-0.5 rounded text-12 font-medium">
                    {item.mark}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
