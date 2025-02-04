// import React, { useState, useRef, useEffect } from 'react'
// import icons from '../../assets/Dream-removebg-preview.png'
// import { MdMenu } from 'react-icons/md'
// import { MdOutlineWifiCalling3 } from 'react-icons/md'

// const Menus = [
//   { id: 1, name: 'About', link: '/#' },
//   {
//     id: 2,
//     name: 'Services',
//     link: '/#',
//     subMenu: [],
//   },
//   { id: 3, name: 'Expertise', link: '/#' },
//   { id: 4, name: 'Careers', link: '/#' },
//   { id: 5, name: 'Contact', link: '/#' },
// ]

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [activeMenu, setActiveMenu] = useState(null) // Track active dropdown
//   const [formVisible, setFormVisible] = useState(false) // Track form visibility
//   const menuRef = useRef(null)

//   const handleMenuClick = (menuId) => {
//     setActiveMenu((prevMenu) => (prevMenu === menuId ? null : menuId))
//   }

//   const toggleMenu = () => setMenuOpen(!menuOpen)

//   const toggleForm = () => setFormVisible(!formVisible) // Toggle form visibility

//   // Close the menu if a click is detected outside of the menu
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])

//   return (
//     <div
//       className="bg-gradient-to-r text-white transform-gpu w-full absolute top-0 z-50"
//       style={{}}
//     >
//       <div className="container py-2">
//         <div className="flex justify-between items-center gap-4">
//           {/* Logo section */}
//           <div>
//             <img
//               src={icons}
//               alt="Logo"
//               className="w-[140px] mx-10 max-w-full h-auto"
//             />
//           </div>

//           {/* Links section for large screens */}
//           <div className="hidden sm:flex justify-between items-center gap-4">
//             <ul className="flex items-center gap-2">
//               {Menus.map((data) => (
//                 <li
//                   key={data.id}
//                   onClick={() => handleMenuClick(data.id)}
//                   className="relative"
//                 >
//                   <a
//                     href={data.link}
//                     className="text-xl py-4 px-4 text-[#000] hover:text-[#6C48C3] duration-200"
//                   >
//                     {data.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Contact Us button */}
//             <button
//               className="bg-[#000] px-8 py-2 rounded-s hover:scale-105 duration-200 flex items-center gap-3 hover:bg-white hover:text-black font-serif"
//               onClick={toggleForm} // Toggle form visibility on click
//             >
//               Sign up
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="sm:hidden flex items-center">
//             <button className="text-white" onClick={toggleMenu}>
//               <MdMenu className="text-4xl" />
//             </button>
//           </div>
//         </div>

//         {/* Form for email and password */}
//         {formVisible && (
//           <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-50  shadow-lg shadow-cyan-500/50 ">
//             {/* <h2 className="text-xl font-bold text-center mb-4">Contact Us</h2> */}
//             <img className="w-32 ml-32" src={icons} alt="" />
//             <form>
//               <div className="mb-4 ">
//                 <label htmlFor="email" className="block text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="password" className="block text-gray-700 mb-2">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
//                   placeholder="Enter your password"
//                 />
//               </div>
//               <div className="flex justify-between items-center">
//                 <button
//                   type="submit"
//                   className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   type="button"
//                   className="text-red-600 hover:underline"
//                   onClick={() => setFormVisible(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Navbar

// import React, { useState, useRef, useEffect } from 'react'
// import icons from '../../assets/Dream-removebg-preview.png'
// import { MdMenu } from 'react-icons/md'

// const Menus = [
//   { id: 1, name: 'About', link: '/#' },
//   { id: 2, name: 'Services', link: '/#', subMenu: [] },
//   { id: 3, name: 'Expertise', link: '/#' },
//   { id: 4, name: 'Careers', link: '/#' },
//   { id: 5, name: 'Contact', link: '/#' },
// ]

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [formVisible, setFormVisible] = useState(false) // Track form visibility
//   const menuRef = useRef(null)

//   const toggleMenu = () => setMenuOpen(!menuOpen)
//   const toggleForm = () => setFormVisible(!formVisible) // Toggle form visibility

//   // Close the menu if a click is detected outside of the menu
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])

//   return (
//     <div
//       className={`bg-gradient-to-r text-white transform-gpu w-full absolute top-0 z-50 ${
//         formVisible ? 'overflow-hidden h-screen' : ''
//       }`}
//     >
//       <div className="container py-2 relative">
//         <div className="flex justify-between items-center gap-4">
//           {/* Logo section */}
//           <div>
//             <img
//               src={icons}
//               alt="Logo"
//               className="w-[140px] mx-10 max-w-full h-auto"
//             />
//           </div>

//           {/* Links section for large screens */}
//           <div className="hidden sm:flex justify-between items-center gap-4">
//             <ul className="flex items-center gap-2">
//               {Menus.map((data) => (
//                 <li key={data.id} className="relative">
//                   <a
//                     href={data.link}
//                     className="text-xl py-4 px-4 text-[#000] hover:text-[#6C48C3] duration-200"
//                   >
//                     {data.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Contact Us button */}
//             <button
//               className="bg-[#000] px-8 py-2 rounded-s hover:scale-105 duration-200 flex items-center gap-3 hover:bg-white hover:text-black font-serif"
//               onClick={toggleForm} // Toggle form visibility on click
//             >
//               Sign up
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="sm:hidden flex items-center">
//             <button className="text-white" onClick={toggleMenu}>
//               <MdMenu className="text-4xl" />
//             </button>
//           </div>
//         </div>

//         {/* Blur Background and Form */}
//         {formVisible && (
//           <>
//             {/* Overlay for blur effect */}
//             <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"></div>

//             {/* Form for email and password */}
//             <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-50 shadow-lg shadow-cyan-500/50">
//               <img className="w-32 ml-32" src={icons} alt="" />
//               <form>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="block text-gray-700 mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="password"
//                     className="block text-gray-700 mb-2"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
//                     placeholder="Enter your password"
//                   />
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <button
//                     type="submit"
//                     className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700"
//                   >
//                     Submit
//                   </button>
//                   <button
//                     type="button"
//                     className="text-red-600 hover:underline"
//                     onClick={() => setFormVisible(false)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Navbar





import React, { useState, useRef, useEffect } from 'react'
import icons from '../../assets/Dream-removebg-preview.png'
import { IoMdMenu } from 'react-icons/io'

const Menus = [
  { id: 1, name: 'About', link: '/#About' },
  { id: 2, name: 'Services', link: '/#Services', subMenu: [] },
  { id: 3, name: 'Expertise', link: '#Expertise' },
  { id: 4, name: 'Portfolio', link: '/#Portfolio' },
  { id: 5, name: 'Contact', link: '/#Footer' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [contactFormVisible, setContactFormVisible] = useState(false)

  const menuRef = useRef(null)
  const formRef = useRef(null)
  const contactFormRef = useRef(null)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleForm = () => setFormVisible(!formVisible)

  const handleContactClick = (e) => {
    e.preventDefault()
    setContactFormVisible(true)
  }
  // Close the menu if a click is detected outside of the menu

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
      if (formRef.current && !formRef.current.contains(event.target)) {
        setFormVisible(false)
      }
      if (
        contactFormRef.current &&
        !contactFormRef.current.contains(event.target)
      ) {
        setContactFormVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close the form if a click is detected outside of the form
  useEffect(() => {
    const handleClickOutsideForm = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setFormVisible(false)
      }
    }

    if (formVisible) {
      document.addEventListener('mousedown', handleClickOutsideForm)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideForm)
    }
  }, [formVisible])

  // Prevent scrolling when the form is visible
  useEffect(() => {
    if (formVisible) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [formVisible])

  return (
    <div
      className={`bg-gradient-to-r text-white transform-gpu w-full z-50 ${
        formVisible ? 'overflow-hidden h-screen' : ''
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <div className="container py-1 relative bg-[#FFFDD0]">
        <div className="flex justify-between items-center gap-4">
          {/* Logo section */}
          <div>
            <img
              src={icons}
              alt="Logo"
              className="w-[120px] max-w-full h-auto mx-8"
            />
          </div>

          {/* Links section for large screens */}
          <div className="hidden sm:flex justify-between items-center gap-2">
            <ul className="flex items-center gap-2">
              {Menus.map((data) => (
                <li key={data.id} className="relative">
                  <a
                    href={data.link}
                    onClick={
                      data.name === 'Contact' ? handleContactClick : undefined
                    }
                    className="text-lg py-2 px-3 text-[#000] hover:text-[#6C48C3] duration-200 font-serif"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Us button */}
            <button
              className="bg-[#000] px-6 py-1 rounded-md hover:scale-105 duration-200 flex items-center gap-3 hover:bg-white hover:text-black font-serif"
              onClick={toggleForm}
            >
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button className="text-white" onClick={toggleMenu}>
              <IoMdMenu className="text-3xl text-[#000]" />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-12 left-0 w-full backdrop-blur-md bg-white/70 sm:hidden shadow-lg"
          >
            <ul className="flex flex-col items-center gap-4 p-6">
              {Menus.map((data) => (
                <li key={data.id} className="w-full text-center">
                  <a
                    href={data.link}
                    onClick={
                      data.name === 'Contact' ? handleContactClick : undefined
                    }
                    className="block text-lg py-2 px-4 text-black hover:text-purple-600 hover:bg-gray-100 duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Blur Background and Form */}
        {formVisible && (
          <>
            {/* Overlay for blur effect */}
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"></div>

            {/* Form for email and password */}
            <div
              ref={formRef}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-50 shadow-lg shadow-cyan-500/50"
            >
              <img className="w-32 ml-32" src={icons} alt="" />
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="text-red-600 hover:underline"
                    onClick={() => setFormVisible(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {contactFormVisible && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div> 
            {/* backdrop-blur-sm  */}
            <div
              ref={contactFormRef}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-50"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Contact Here
              </h2>
              <p className="text-gray-600 mb-6">
                Once you've contacted us, Our HR will respond within 24 hours.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="You Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                />
                <input
                  type="email"
                  placeholder="You Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                />
                <input
                  type="tel"
                  placeholder="You Phone"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-purple-800 text-white px-6 py-3 rounded-md hover:bg-purple-900 transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>

              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setContactFormVisible(false)}
              >
                ✕
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar




