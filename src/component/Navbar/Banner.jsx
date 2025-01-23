// import React from "react";
// import coffeeWhiteIcon from "../../assets/ITT.webp"
// import coffeeTextureIcon from "../../assets/coffee-texture.jpg";


// const styles = {
//   backgroundImage: `url(${coffeeTextureIcon})`, // Use coffeeTextureIcon for background
//   backgroundColor: "#270c03",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

// const Banner = () => {
//   return (
//     <>
//       <div style={styles}>
//         <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {/* Image Section */}
//             <div>
//               <img
//                 src={coffeeWhiteIcon}
//                 alt="Coffee"
//                 className="max-w-[470px] w-full mx-auto  drop-shadow-xl"
//               />
//             </div>

//             <div className="flex flex-col justify-center gap-6 sm:pt-0">
//               <h1 className="text-3xl sm:text-4xl font-semibold  text-[#242D6F]">
//                 What We Do?
//               </h1>
//               <p className="text-sm text-gray-500 tracking-wide leading-8">
//                 Our team consists of top passionate experts from various
//                 technology fields, working together with the goal of closing the
//                 gap between industry and academics. Through our training
//                 services, we strive to provide the best training solutions
//                 focused on practical implementation to ensure maximum client
//                 satisfaction. That’s why REGex is known as the Best IT Training
//                 Company in Rajasthan.
//               </p>

//               {/* Button */}
//               <button className="px-2 py-2 mt-4 text-white bg-[#242D6F] rounded-md hover:bg-[#1a2559] transition duration-300 w-[130px]">
//  KNOW MORE
// </button>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;



import React, { useEffect, useRef } from "react";
import coffeeWhiteIcon from "../../assets/ITT.webp";
import coffeeTextureIcon from "../../assets/coffee-texture.jpg";
import {motion} from 'framer-motion'

const styles = {
  backgroundImage: `url(${coffeeTextureIcon})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-in-left");
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div
      initial={{opacity: 0, scale: 0}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 2}}
       style={styles} >
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image Section */}
            <div>
              <img
                ref={imageRef}
                src={coffeeWhiteIcon}
                alt="Coffee"
                className="max-w-[470px] w-full mx-auto drop-shadow-xl opacity-0"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-semibold text-[#242D6F]">
                What We Do?
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-8">
                Our team consists of top passionate experts from various
                technology fields, working together with the goal of closing the
                gap between industry and academics. Through our training
                services, we strive to provide the best training solutions
                focused on practical implementation to ensure maximum client
                satisfaction. That’s why REGex is known as the Best IT Training
                Company in Rajasthan.
              </p>

              {/* Button */}
              <button className="px-2 py-2 mt-4 text-white bg-[#242D6F] rounded-md hover:bg-[#1a2559] transition duration-300 w-[130px]">
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>
        {`
          @keyframes slideInLeft {
            0% {
              transform: translateX(-90px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slide-in-left {
            animation: slideInLeft 2s ease-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default Banner;
