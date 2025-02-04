import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterBg from "../../assets/coffee-footer.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Dream from "../../assets/Dream-removebg-preview.png"




const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  // backgroundImage: `url(${FooterBg})`,
  // backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
     <footer className="bg-[#606060] text-white py-10">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
                    <img className="w-40 mt-1 " src={Dream} alt="" />
                    <p className="mt-6">Our team is made up of highly dedicated professionals from many technological fields. Our main objective is to bridge the knowledge gap between business and academics via our training services.</p>
                </div>
                <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
                {/* <h3 className="text-xl font-semibold border-b border-white border-dotted border-black my-5 pb-2 mb-4 ">
  Quick Links
</h3> */}
<h3 className="text-xl font-semibold border-b border-white border-dotted border-black my-5 pb-2 mb-4 inline-block">
  Quick Links
</h3>


                    <ul>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Home</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">About Us</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Training Services</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Programs</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Events</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Contact Us</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Software Services</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Our Placement</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Blog</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold border-b border-white border-dotted border-black inline-block pb-2 mb-4 mt-4">What We Offer</h3>
                    <ul>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Web Applications</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Data Analytics</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Digital Marketing</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">SEO, SEM</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Android/iOS Applications</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Machine Learning & IoT</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Training Services</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Competitive Programming</a></li>
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Cloud Computing (AWS)</a></li>
                        {/* <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">Python-Django</a></li> */}
                        <li className="mb-2 flex items-center"><span className="mr-2"><MdKeyboardDoubleArrowRight /></span><a href="#" className="hover:underline">App Development with Flutter</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 px-4">
                    <h3 className="text-xl font-semibold border-b border-white border-dotted border-black inline-block  pb-2 mb-4 mt-3 ml-8">Address</h3>
                    <ul>
                    <li className="mb-2 flex items-center">
                        <IoLocationSharp style={{ fontSize: "58px", marginRight: "8px" }} />
                        <i className="fas fa-map-marker-alt mr-2" style={{ fontSize: "20px" }}></i>
                        Plot No – 1823 , Khawaja Nagar Sector -B ,
                        Merta City Nagaur - 341510 
                    </li>
                       <li className="mb-2 flex items-center">
                          <FaPhoneAlt style={{ fontSize: "25px", marginRight: "10px",	marginBottom: "25px" }} />
                            <i className="fas fa-phone-alt mr-2" style={{ fontSize: "20px" }}></i>
                              +91-9887383167
                                </li>
                                  <li className="mb-2 flex items-center">
                                 <MdEmail style={{ fontSize: "24px", marginRight: "10px" }} />
                               <i className="fas fa-envelope mr-2" style={{ fontSize: "20px" }}></i>
                               info@regexsoftware.com
                          </li>

                    </ul>
                </div>
            </div>
        </footer>
    </div>
  );
};

export default Footer;
