// import React from 'react';
// import { useState, useEffect } from "react";
// import toast, { Toaster} from "react-hot-toast"
// import { requestForToken, onMessageListener } from '../Firebase';

// const Notification = () => {
//     const [notification, setNotification] = useState({title: "", body: ""});

//     const notify = () => toast(<ToastDisplay/>);

//     const ToastDisplay = () => {
//         return(
//             <div>
//                 <p><b>{notification?.title}</b></p>

//                 <p>{notification?.body}</p>;
//             </div>
//         )
//     }

//     useEffect(()=> {
//       if(notification?.title) {
//         notify();
//       }  
//     }, [notification]);



//     requestForToken();

//     onMessageListener()
//     .then((payload) => {
//     setNotification({ title: payload?.notification?. title, body: payload?.notification?.body });
    

//     })
//     .catch(err => console.log('onMessageListener- Notification', err));

//     return <Toaster/>
// }

// export default Notification


import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { requestForToken, onMessageListener } from "../Firebase";

const Notification = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });

  // ✅ Show Notification in Toast
  const ToastDisplay = ({ title, body }) => {
    return (
      <div>
        <p><b>{title}</b></p>
        <p>{body}</p>
      </div>
    );
  };

  useEffect(() => {
    requestForToken();

    onMessageListener()
      .then((payload) => {
        console.log("New Notification:", payload);
        setNotification({
          title: payload?.notification?.title,
          body: payload?.notification?.body,
        });
        toast(<ToastDisplay title={payload?.notification?.title} body={payload?.notification?.body} />);
      })
      .catch(err => console.log("Notification Listener Error:", err));
  }, []);

  return <Toaster />;
};

export default Notification;
