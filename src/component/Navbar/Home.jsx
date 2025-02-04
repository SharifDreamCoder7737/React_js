// // import React, { useState } from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import imges1 from "../../assets/Slider-1.png";
// // import imges2 from "../../assets/props.png";
// // import imges3 from "../../assets/img-3.png";
// // import imges4 from "../../assets/img-4.png";

// // const Home = () => {
// //   const [activeSlide, setActiveSlide] = useState(0); // Track the current slide

// //   const PrevArrow = (props) => {
// //     const { onClick } = props;
// //     return (
// //       <div
// //         onClick={onClick}
// //         className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 flex items-center justify-center  bg-opacity-50 p-4 rounded-full cursor-pointer hover:bg-opacity-80"
// //       >
// //         <span className="text-red-500 text-7xl">&#10216;</span>
// //       </div>
// //     );
// //   };

// //   const NextArrow = (props) => {
// //     const { onClick } = props;
// //     return (
// //       <div
// //         onClick={onClick}
// //         className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 flex items-center justify-center  bg-opacity-50 p-4 rounded-full cursor-pointer hover:bg-opacity-80"
// //       >
// //         <span className="text-red-500 text-7xl">&#10217;</span>
// //       </div>
// //     );
// //   };

// //   const slides = [
// //     {
// //       id: 1,
// //       name: "REGex Software & Ed-Tech )",
// //       image: imges1,
// //     },
// //     {
// //       id: 2,
// //       name: "Data Science Specialization ",
// //       image: imges2,
// //     },
// //     {
// //       id: 3,
// //       name: "Master the Art of Coding",
// //       image: imges3,
// //     },
// //     {
// //       id: 4,
// //       name: "Empowering the Future ",
// //       image: imges4,
// //     },
// //   ];

// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 700,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     arrows: true,
// //     prevArrow: <PrevArrow />,
// //     nextArrow: <NextArrow />,
// //     pauseOnHover: true,
// //     afterChange: (current) => setActiveSlide(current), // Update the active slide index
// //   };

// //   return (
// //     <div className="relative min-h-[500px] bg-black flex justify-center items-center text-white">
// //       <div className="w-full container mx-auto pb-8 sm:pb-0 px-0">
// //         <Slider {...settings}>
// //           {slides.map((slide, index) => (
// //             <div key={slide.id}>
// //               <div
// //                 className="relative w-full min-h-[500px] sm:min-h-[600px] bg-cover bg-center shadow-lg overflow-hidden"
// //                 style={{
// //                   backgroundImage: `url(${slide.image})`,
// //                   backgroundSize: "cover",
// //                   backgroundPosition: "center center",
// //                 }}
// //               >
// //                 {/* Text with animation */}
// //                 <div
// //                   className={`absolute bottom-8 left-1/3 transform -translate-x-1/1 text-center ${
// //                     activeSlide === index ? "animate-slide-up" : "opacity-0"
// //                   } transition-all duration-700`}
// //                 >
// //                   <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-black bg-opacity-60 px-6 py-3 rounded-md ">
// //                     {slide.name}
// //                   </h2>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </Slider>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;



// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import imges1 from "../../assets/Slider-1.png";
// import imges2 from "../../assets/props.png";
// import imges3 from "../../assets/img-3.png";
// import imges4 from "../../assets/img-4.png";
// import "./Home.css"; // Import custom CSS for animations

// const Home = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div
//         onClick={onClick}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 flex items-center justify-center bg-opacity-50 p-4 rounded-full cursor-pointer hover:bg-opacity-80"
//       >
//         <span className="text-red-500 text-7xl">&#10216;</span>
//       </div>
//     );
//   };

//   const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div
//         onClick={onClick}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 flex items-center justify-center bg-opacity-50 p-4 rounded-full cursor-pointer hover:bg-opacity-80"
//       >
//         <span className="text-red-500 text-7xl">&#10217;</span>
//       </div>
//     );
//   };

//   const slides = [
//     {
//       id: 1,
//       name: "",
//       image: imges1,
//     },
//     {
//       id: 2,
//       name: " ",
//       image: imges2,
//     },
//     {
//       id: 3,
//       name: "",
//       image: imges3,
//     },
//     {
//       id: 4,
//       name: " ",
//       image: imges4,
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     pauseOnHover: true,
//     afterChange: (current) => setActiveSlide(current),
//   };

//   return (
//     <div className="relative min-h-[500px] bg-black flex justify-center items-center text-white">
//       {/* Typewriter Text */}
//       <div className="absolute left-6 top-1/3 w-[300px]">
//         <h1 className="typewriter-text text-2xl sm:text-3xl font-bold">
//           Empower Your Future with REGex
//         </h1>
//       </div>

//       <div className="w-full container mx-auto pb-8 sm:pb-0 px-0">
//         <Slider {...settings}>
//           {slides.map((slide, index) => (
//             <div key={slide.id}>
//               <div
//                 className="relative w-full min-h-[500px] sm:min-h-[600px] bg-cover bg-center shadow-lg overflow-hidden"
//                 style={{
//                   backgroundImage: `url(${slide.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center center",
//                 }}
//               >

//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import imges1 from "../../assets/Slider-1.png";
// import imges2 from "../../assets/props.png";
// import imges3 from "../../assets/img-3.png";
// import imges4 from "../../assets/img-4.png";
// import "./Home.css"; // Import custom CSS for animations
// import { TypeAnimation } from "react-type-animation";

// const Home = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [currentText, setCurrentText] = useState("Code Your Dreams");

//   useEffect(() => {
//     // Update text after 2 seconds
//     const timer = setTimeout(() => {
//       setCurrentText("Hello Name");
//     }, 2000);

//     // Clear timeout if slide changes before animation finishes
//     return () => clearTimeout(timer);
//   }, [activeSlide]);

//   // Custom Previous Arrow
//   // Custom Previous Arrow
//   const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <button
//         onClick={onClick}
//         type="button"
//         className="absolute bottom-4 left-4 z-10 flex items-center justify-center bg-opacity-50 p-4 rounded-full cursor-pointer hover:bg-opacity-80"
//       >
//         <span className="text-black text-5xl">&#10216;</span>
//       </button>
//     );
//   };

//   // Custom Next Arrow
//   const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <button
//         onClick={onClick}
//         type="button"
//         className="absolute bottom-4 right-4 z-10 flex items-center justify-center bg-opacity-50 p-4 rounded-full cursor-pointer hover:bg-opacity-80"
//       >
//         <span className="text-black text-5xl">&#10217;</span>
//       </button>
//     );
//   };

//   const slides = [
//     {
//       id: 1,
//       name: "Hello Name",
//       image: imges1,
//     },
//     {
//       id: 2,
//       name: "Hello Name",
//       image: imges2,
//     },
//     {
//       id: 3,
//       name: "Hello Name",
//       image: imges3,
//     },
//     {
//       id: 4,
//       name: "Hello Name",
//       image: imges4,
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     pauseOnHover: true,
//     afterChange: (current) => {
//       setActiveSlide(current);
//       setCurrentText("Code Your Dreams"); // Reset text for new slide
//     },
//   };

//   return (
//     <div className="relative min-h-[500px] bg-black text-white">
//       <div className="w-full container mx-auto pb-8 sm:pb-0 px-0">
//         <Slider {...settings}>
//           {slides.map((slide, index) => (
//             <div key={slide.id}>
//               <div
//                 className="relative w-full min-h-[500px] sm:min-h-[600px] bg-cover bg-center shadow-lg"
//                 style={{
//                   backgroundImage: `url(${slide.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center center",
//                 }}
//               >
//                 <div className="absolute top-1/4 left-16">
//                   <TypeAnimation
//                     sequence={[
//                       "Code Your Dreams",
//                       500,
//                       "With Dreams Code",
//                       500,
//                     ]}
//                     wrapper="span"
//                     speed={10}
//                     style={{
//                       display: "inline-block",
//                     }}
//                     className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black truncate"
//                     repeat={Infinity}
//                   />

//                   <div className="mt-6">
//                     <h2 className="text-xl sm:text-2xl lg:text-3xl leading-10 text-black font-bold">
//                       Innovate, Connect, Inspire
//                     </h2>
//                     <p className="text-sm sm:text-md lg:text-lg leading-6 text-black font-serif mt-2">
//                       Web Solutions For Startups, Agencies, And Businesses Are
//                       Result-Oriented And Easy To Use.
//                     </p>

//                     <button className="mt-4 px-6 py-2 bg-black text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-all duration-300">
//                       Get Started
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imges1 from "../../assets/Slider-1.png";
import imges2 from "../../assets/props.png";
import imges3 from "../../assets/img-3.png";
import imges4 from "../../assets/img-4.png";
import "./Home.css"; // Import custom CSS for animations
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentText, setCurrentText] = useState("Code Your Dreams");
  const [loading, setLoading] = useState(true); // State for loader

  useEffect(() => {
    // Hide loader after 2 seconds
    const loaderTimer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    // Clear timeout if component unmounts
    return () => clearTimeout(loaderTimer);
  }, []);

  // Custom Previous Arrow
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        type="button"
        className="absolute bottom-4 left-4 z-10 flex items-center justify-center bg-opacity-50 p-4 rounded-full cursor-pointer hover:bg-opacity-80"
      >
        <span className="text-black text-5xl">&#10216;</span>
      </button>
    );
  };

  // Custom Next Arrow
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        type="button"
        className="absolute bottom-4 right-4 z-10 flex items-center justify-center bg-opacity-50 p-4 rounded-full cursor-pointer hover:bg-opacity-80"
      >
        <span className="text-black text-5xl">&#10217;</span>
      </button>
    );
  };

  const slides = [
    {
      id: 1,
      name: "Hello Name",
      image: imges1,
    },
    {
      id: 2,
      name: "Hello Name",
      image: imges2,
    },
    {
      id: 3,
      name: "Hello Name",
      image: imges3,
    },
    {
      id: 4,
      name: "Hello Name",
      image: imges4,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: true,
    afterChange: (current) => {
      setActiveSlide(current);
      setCurrentText("Code Your Dreams"); // Reset text for new slide
    },
  };

  return (
    <>
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50">
          <div className="loader"></div>
          <p className="mt-4 text-lg font-semibold">Loading...</p>
        </div>
      )}

      {/* Slider */}
      {!loading && (
        <div className="relative min-h-[500px] bg-black text-white">
          <div className="w-full container mx-auto pb-8 sm:pb-0 px-0">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={slide.id}>
                  <div
                    className="relative w-full min-h-[500px] sm:min-h-[600px] bg-cover bg-center shadow-lg"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  >
                    <div className="absolute top-1/4 left-16">
                      <TypeAnimation
                        sequence={[
                          "Code Your Dreams",
                          500,
                          "With Dreams Code",
                          500,
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{
                          display: "inline-block",
                        }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black truncate"
                        repeat={Infinity}
                      />

                      <div className="mt-6">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl leading-10 text-black font-bold">
                          Innovate, Connect, Inspire
                        </h2>
                        <p className="text-sm sm:text-md lg:text-lg leading-6 text-black font-serif mt-2">
                          Web Solutions For Startups, Agencies, And Businesses Are
                          Result-Oriented And Easy To Use.
                        </p>

                        <button className="mt-4 px-6 py-2 bg-black text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-all duration-300">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
