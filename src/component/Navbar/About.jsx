import React from "react";
import img2 from "../../assets/Live-1.png";
import img3 from "../../assets/Live-2.png";
import img4 from "../../assets/Live-3.png";



const AboutData = [
  {
    id: 1,
    img: img2,
    name: "Live Sessions",
    description:
      "Live Sessions by Expertise Trainers and Access of Recorded Session is also available.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: img3,
    name: "Live Projects",
    description:
      "Get a chance to work on Industry Oriented Projects to implement your learning.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: img4,
    name: "Opportunities",
    description:
      "REGex provides Internship / Job opportunities to the best Students in different Companies.",
    aosDelay: "500",
  },
];

const About = () => {
  return (
    <>
      <span id="About"></span>
      <div className="py-10 ">
        <div className="contaainer">
          {/* header title */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-semibold text-[#242D6f]">
            Why Choose Us
            </h1>
          </div>

          {/* Services Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {AboutData?.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="rounded-2xl bg-white hover:bg-[#dcdcdc] hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
                >
                  {/* img section */}
                  <div className="h-[170px]">
                    <img
                      src={data.img}
                      alt=""
                      className="max-w-[160px] block mx-auto transform-translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300 rounded-full"
                    />
                  </div>
                  {/* text container */}
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold ">{data.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
