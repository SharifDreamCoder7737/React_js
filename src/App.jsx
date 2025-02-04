// import React,{useEffect} from 'react'
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import { requestForToken, onMessageListener } from "./Firebase";
import Navbar from './component/Navbar/Navbar';
import Home from './component/Navbar/Home';
import About from './component/Navbar/About';
import Testimonials from './component/Navbar/Testimonials';
import Footer from './component/Navbar/Footer';
import Expertise from './component/Navbar/Expertise';
import Portfolio from './component/Navbar/Portfolio';
import Notification from './components/Notifications';
// const App = () => {
//   useEffect(()=>{
//     AOS.init({
//       offset: 100,
//       duration: 700,
//       easing: "ease-in",
//       delay: 100,
//     });
//   })
const App = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });

  // ✅ Initialize AOS Animation
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  // ✅ Handle Firebase Notifications
  useEffect(() => {
    requestForToken();

    onMessageListener()
      .then((payload) => {
        console.log("Foreground Notification Received:", payload);
        setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
        toast(<ToastDisplay title={payload?.notification?.title} body={payload?.notification?.body} />);
      })
      .catch(err => console.log("Notification Listener Error:", err));
  }, []);

  // ✅ Toast Notification Component
  const ToastDisplay = ({ title, body }) => {
    return (
      <div>
        <p><b>{title}</b></p>
        <p>{body}</p>
      </div>
    );
  };

  return (
    <div className='overflow-x-hidden'>
      {/* <></> */}
       <Navbar />
       <Home/>
      <About/>
      <Expertise/>
      <Portfolio/>
      <Testimonials/>
      <Footer/>
      <Notification/>
      <Toaster />
      
    </div>
  )
}

export default App


// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import toast, { Toaster } from "react-hot-toast";
// import { requestForToken, onMessageListener } from "./Firebase";

// const App = () => {
//   const [notification, setNotification] = useState({ title: "", body: "" });

//   // ✅ Initialize AOS Animation
//   useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 700,
//       easing: "ease-in",
//       delay: 100,
//     });
//   }, []);

//   // ✅ Handle Firebase Notifications
//   useEffect(() => {
//     requestForToken();

//     onMessageListener()
//       .then((payload) => {
//         console.log("Foreground Notification Received:", payload);
//         setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
//         toast(<ToastDisplay title={payload?.notification?.title} body={payload?.notification?.body} />);
//       })
//       .catch(err => console.log("Notification Listener Error:", err));
//   }, []);

//   // ✅ Toast Notification Component
//   const ToastDisplay = ({ title, body }) => {
  //   return (
  //     <div>
  //       <p><b>{title}</b></p>
  //       <p>{body}</p>
  //     </div>
  //   );
  // };

//   return (
//     <div>
//       <h2>React Firebase Push Notification</h2>
//       <Toaster />
//     </div>
//   );
// };

// export default App;




