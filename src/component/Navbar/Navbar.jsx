import React, { useState, useRef, useEffect } from "react";
import icons from "../../assets/images-removebg-preview.png";
import { MdMenu } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const Menus = [
  { id: 1, name: "About", link: "/#" },
  {
    id: 2,
    name: "Services",
    link: "/#",
    subMenu: [
      // { id: 1, name: "Coffee" },
      // { id: 2, name: "Premium" },
      // { id: 3, name: "Cold Coffee" },
    ],
  },
  { id: 3, name: "Expertise", link: "/#" },
  { id: 4, name: "Careers", link: "/#" },
  { id: 5, name: "Contact", link: "/#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // Track active dropdown
  const menuRef = useRef(null); // Create a ref for the menu
  const handleMenuClick = (menuId) => {
    setActiveMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };
  

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu if a click is detected outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleHover = (menuId) => {
    setActiveMenu(menuId); // Set the active menu when hovered
  };

  const handleMouseLeave = () => {
    // setActiveMenu(null); // Reset the active menu when mouse leaves
  };

  return (
    <div
      className="bg-gradient-to-r text-white transform-gpu  w-full absolute top-0 z-50"
      style={{ backdropFilter: "blur 10px)" }} // Optional blur effect for aesthetics
    >
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          {/* Logo section */}
          <div>
            <img
              src={icons}
              alt="Logo"
              className="w-40 mx-10 max-w-full h-auto"
            />
          </div>

          {/* Links section for large screens */}
          <div className="hidden sm:flex justify-between items-center gap-4">
            <ul className="flex items-center gap-2">
              {Menus.map((data) => (
                <li
                  key={data.id}
                  onClick={() => handleMenuClick(data.id)} // Click to toggle dropdown
                  onMouseLeave={handleMouseLeave} // Mouse leave to hide dropdown
                  className="relative"
                >
                  <a
                    href={data.link}
                    className="text-xl py-4 px-4 text-[#000] hover:text-[#6C48C3] duration-200"
                  >
                    {data.name}
                  </a>

                  {/* Dropdown menu for "Services" or any other menu item with subMenu */}
                  {data.subMenu && activeMenu === data.id && (
                    <ul
                      style={{ width: "950px", height: "400px" }}
                      className="absolute -right-[470px] top-12 bg-[#f6f9fa] rounded-md"
                    >
                      <div className=" p-10">
                        <div className="grid grid-cols-3 gap-6">
                          {/* Mobile App Development */}
                          <div>
                            <h2 className="text-lg font-bold text-purple-800 mb-4">
                              Mobile App Development
                            </h2>
                            <ul className="space-y-2 text-black">
                              <li className="hover:text-amber-700">Android</li>
                              <li className="hover:text-amber-700">iOS</li>
                              <li className="hover:text-amber-700">Flutter</li>
                            </ul>
                          </div>

                          {/* Framework Development */}
                          <div>
                            <h2 className="text-lg font-bold text-purple-800 mb-4">
                              Framework Development
                            </h2>
                            <ul className="space-y-2 text-black">
                              <li className="hover:text-amber-700">Laravel</li>
                              <li className="hover:text-amber-700">Net Framework</li>
                              <li className="hover:text-amber-700">CodeIgniter</li>
                            </ul>
                          </div>

                          {/* Web & Graphic Design */}
                          <div>
                            <h2 className="text-lg font-bold text-purple-800 mb-4">
                              Web & Graphic Design
                            </h2>
                            <ul className="space-y-2 text-black">
                              <li className="hover:text-amber-700">Graphic Design</li>
                              <li className="hover:text-amber-700">ReactJs</li>
                              <li className="hover:text-amber-700">Responsive Design</li>
                            </ul>
                          </div>

                          {/* CMS Development */}
                          <div>
                            <h2 className="text-lg font-bold text-purple-800 mb-4">
                              CMS Development
                            </h2>
                            <ul className="space-y-2 text-black">
                              <li className="hover:text-amber-700">WordPress</li>
                            </ul>
                          </div>

                          {/* Digital Marketing */}
                          <div>
                            <h2 className="text-lg font-bold text-purple-800 mb-4">
                              Digital Marketing
                            </h2>
                            <ul className="space-y-2 text-black">
                              <li className="hover:text-amber-700">SEO/SMM</li>
                            </ul>
                          </div>

                          {/* Web Development */}
                          <div>
                            <h2 className="text-lg font-bold text-purple-800 mb-4">
                              Web Development
                            </h2>
                            <ul className="space-y-2 text-black">
                              <li className="hover:text-amber-700">PHP</li>
                              <li className="hover:text-amber-700">NodeJs</li>
                            </ul>
                          </div>
                        </div>

                        {/* Illustration */}
                        <div className="mt-10 flex justify-center">
                          {/* <img
                            src="https://via.placeholder.com/400x200"
                            alt="Team working illustration"
                            className="rounded-lg"
                          /> */}
                        </div>
                      </div>
                      {data.subMenu.map((subItem) => (
                        <li
                          key={subItem.id}
                          className="px-4 py-2 text-white hover:bg-[#8c60d1]"
                        >
                          <a href="/#">{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <button className="px-4 py-2 rounded-s hover:scale-105 duration-200 text-[#6C48C3] flex items-center gap-1 hover:text-[#6C48C3]"></button>
            <button className="bg-[#000]  px-8 py-2 rounded-s hover:scale-105 duration-200 flex items-center gap-3 hover:bg-white hover:text-black">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button className="text-white" onClick={toggleMenu}>
              <MdMenu className="text-4xl" />
            </button>
          </div>
        </div>

        {/* Mobile menu - when menu is open */}
 {menuOpen && (
  <div
    ref={menuRef} // Attach ref to this div
    className="sm:hidden p-4 absolute top-16 left-0 right-0 z-10 bg-gray bg-opacity-50 backdrop-blur-md"
  >
    <ul className="flex flex-col items-center gap-5">
      {Menus.map((data) => (
        <li key={data.id} className="w-full">
          <div className="flex flex-col items-center">
            <button
              onClick={() => handleMenuClick(data.id)} // Toggle submenu on click
              className="text-xl py-4 px-4 text-white hover:text-[#6C48C3] duration-200 w-full text-center"
            >
              {data.name}
            </button>

            {/* अगर सबमेनू है तो उसे दिखाएं */}
            {data.subMenu && activeMenu === data.id && (
              <ul className="flex flex-col items-start gap-3 mt-2 bg-[#6C48C3] w-full rounded-md p-4">
                {data.subMenu.map((subItem) => (
                  <li
                    key={subItem.id}
                    className="text-md py-2 px-4 text-white hover:bg-[#8c60d1] w-full text-left"
                  >
                    <a href={subItem.link || "/#"}>{subItem.name}</a>
                  </li>
                ))}

                {/* Example Section */}
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h2 className="text-lg font-bold text-purple-800 mb-4">
                        Mobile App Development
                      </h2>
                      <ul className="space-y-2 text-white">
                        <li className="hover:text-amber-700">Android</li>
                        <li className="hover:text-amber-700">iOS</li>
                        <li className="hover:text-amber-700">Flutter</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-purple-800 mb-4">
                        Web Development
                      </h2>
                      <ul className="space-y-2 text-white">
                        <li className="hover:text-amber-700">ReactJs</li>
                        <li className="hover:text-amber-700">NodeJs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
)}



      </div>
    </div>
  );
};

export default Navbar;
