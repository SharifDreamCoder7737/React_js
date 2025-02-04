// import React from "react";
// // import coffeeWhiteIcon from "../../assets/app_store.png";
// // import GrSecure from "../../assets/play_store.png";
// // import coffeeTextureIcon from "../../assets/coffee-beans-bg.png";
// import {motion} from 'framer-motion'

// const backgroundStyle = {
//   // backgroundImage: `url(${coffeeTextureIcon})`, // Use coffeeTextureIcon for background
//   // backgroundColor: "#270c03",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

// const textStyle = {
//   fontFamily: '"Londrina Outline", serif',
//   fontWeight: 400,
//   fontStyle: "normal",
// };

// const AppStore = () => {
//   return (
//     <>
//       <motion.div
//          initial={{opacity: 0, translateX: '-100%'}}
//          whileInView={{opacity: 1, translateX: 0}}
//          transition={{duration: 2}}
//        style={backgroundStyle} className="py-14">
//         <div class="bg-blue-200 min-h-screen flex flex-col items-center py-10 ">
//           <div className="w-full px-5 sm:px-10 md:px-20">
//             {/* Wrap the h1 for full-width alignment */}
//             <div style={textStyle}>
//               <h1 className="text-5xl xsm:text-5xl sm:text-9xl md:text-6xl lg:text-8xl text-gray-800 mb-4 text-left hover:animate-fade-in">
//                 Portfolio
//               </h1>
//             </div>

//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
//               Here are a few glimpses of our Development Team Work.
//             </p>
//           </div>

//           <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full px-4">
//             <div class="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center hover:-translate-y-6 transform transition">
//               <div class="mb-4">
//                 <img
//                   class="w-full h-auto rounded-md"
//                   src="https://dreamcoder.in/assets/portfilo_2-BiokWJZM.webp"
//                   alt="PANCHSHEEL"
//                 />
//               </div>
//               <h3 class="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
//                 PANCHSHEEL
//               </h3>
//               <p class="text-sm md:text-base lg:text-lg text-gray-600">
//                 House Building Society Limited
//               </p>
//             </div>

//             <div class="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center hover:-translate-y-6 transform transition">
//               <div class="mb-4">
//                 <img
//                   class="w-full h-auto rounded-md"
//                   src="https://dreamcoder.in/assets/portfilo_5-D7cK-OXU.webp"
//                   alt="BRILLIANCEE"
//                 />
//               </div>
//               <h3 class="text-lg font-semibold text-gray-800">BRILLIANCEE</h3>
//               <p class="text-gray-600">Online Shopping Website</p>
//             </div>

//             <div class="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center hover:-translate-y-6 transform transition">
//               <div class="mb-4">
//                 <img
//                   src="data:image/webp;base64,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"
//                   alt=""
//                 />
//               </div>
//               <h3 class="text-lg font-semibold text-gray-800">SMART SENTECH</h3>
//               <p class="text-gray-600">IoT Devices Portal</p>
//             </div>

//             <div class="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center hover:-translate-y-6 transform transition">
//               <div class="mb-4">
//                 <img
//                   class="w-full h-auto rounded-md"
//                   src="https://dreamcoder.in/assets/adisakti-CUfOZxxp.webp"
//                   alt="ADISHAKTI TRAVELS"
//                 />
//               </div>
//               <h3 class="text-lg font-semibold text-gray-800">
//                 ADISHAKTI TRAVELS
//               </h3>
//               <p class="text-gray-600">Travel Agency</p>
//             </div>
//           </div>

//           <div class="mt-14">
//             <button class="bg-[#4c144a] text-white text-xs py-3 px-9 rounded-md hover:bg-[#4b5d67] transition">
//               VIEW MORE
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default AppStore;


import React from "react";
// import coffeeWhiteIcon from "../../assets/app_store.png";
// import GrSecure from "../../assets/play_store.png";
// import coffeeTextureIcon from "../../assets/coffee-beans-bg.png";
import {motion} from 'framer-motion'

const backgroundStyle = {
  // backgroundImage: `url(${coffeeTextureIcon})`, // Use coffeeTextureIcon for background
  // backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const textStyle = {
  fontFamily: '"Londrina Outline", serif',
  fontWeight: 400,
  fontStyle: "normal",
};

const Portfolio = () => {
  return (
    <>
      <motion.div
         initial={{opacity: 0, translateX: '-100%'}}
         whileInView={{opacity: 1, translateX: 0}}
         transition={{duration: 2}}
         viewport={{ once: true }}  // Prevent animation from repeating on scroll
         style={backgroundStyle} className="py-14">
        <div className="bg-blue-200 min-h-screen flex flex-col items-center py-10 ">
          <div className="w-full px-5 sm:px-10 md:px-20">
            {/* Wrap the h1 for full-width alignment */}
            <div style={textStyle}>
              <h1 className="text-5xl xsm:text-5xl sm:text-9xl md:text-6xl lg:text-8xl text-gray-800 mb-4 text-left hover:animate-fade-in">
                Portfolio
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
              Here are a few glimpses of our Development Team Work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full px-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center hover:-translate-y-6 transform transition">
              <div className="mb-4">
                <img
                  className="w-full h-auto rounded-md"
                  src="https://dreamcoder.in/assets/portfilo_2-BiokWJZM.webp"
                  alt="PANCHSHEEL"
                />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                PANCHSHEEL
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600">
                House Building Society Limited
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center hover:-translate-y-6 transform transition">
              <div className="mb-4">
                <img
                  className="w-full h-auto rounded-md"
                  src="https://dreamcoder.in/assets/portfilo_5-D7cK-OXU.webp"
                  alt="BRILLIANCEE"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">BRILLIANCEE</h3>
              <p className="text-gray-600">Online Shopping Website</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center hover:-translate-y-6 transform transition">
              <div className="mb-4">
                <img
                  src="data:image/webp;base64,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"
                  alt="Brilliance Logo"
                />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                BRILLIANCEE
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600">
                Online Shopping Website
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center hover:-translate-y-6 transform transition">
              <div className="mb-4">
                <img
                  src="https://dreamcoder.in/assets/portfilo_6-SptI07Pl.webp"
                  alt="SYMPHONY"
                />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                SYMPHONY
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600">
                Online Shopping Website
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;

