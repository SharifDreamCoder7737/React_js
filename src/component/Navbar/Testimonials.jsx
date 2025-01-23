import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from 'framer-motion'


const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://fastly.picsum.photos/id/571/101/101.jpg?hmac=134dwbWqdogE6FB9oUCU_QCMJFOvWZn2bDMycsNNYq0",
  },
  {
    id: 2,
    name: "Sabir ali",
    test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://fastly.picsum.photos/id/922/102/102.jpg?hmac=S8YVs0W4sQVFMsS8eRKBm9t9iTGVlWegYrP3M6Ydc1Y",
  },
  {
    id: 3,
    name: "Satya Narayan",
    test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://fastly.picsum.photos/id/912/104/104.jpg?hmac=YFHjtZKltQV8dOL5ulQPZxJUHimPQTHXBCmoEk9Ey0I",
  },
  {
    id: 5,
    name: "Dipankar kumar",
    test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://fastly.picsum.photos/id/954/103/103.jpg?hmac=dWExQ1LLtSiDgmusoxIU_drRC8aUDskPTXIi2Qxt8cw",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <motion.div
    initial={{opacity: 0, rotateX: "90deg"}}
    whileInView={{opacity: 1, rotateX: 0}}
    transition={{duration: 2}}
     className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>

        {/* Testimonials cards Section */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => {
              return (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                    {/* image section */}
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    {/* content section */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.test}</p>
                        <h1 className="text-xl font-bold text-black/70 font-cursive">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0  ">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
