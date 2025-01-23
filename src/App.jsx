import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './component/Navbar/Navbar';
import Home from './component/Navbar/Home';
import About from './component/Navbar/About';
import  Banner  from './component/Navbar/Banner';
import AppStore from './component/Navbar/AppStore';
import Testimonials from './component/Navbar/Testimonials';
import Footer from './component/Navbar/Footer';


const App = () => {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  })
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Home/>
      <About/>
      <Banner/>
      <AppStore/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App





// import React, { useState } from "react";

// const App = () => {
//   const [task, setTask] = useState(""); // Task का टेक्स्ट
//   const [tasks, setTasks] = useState([]); // सभी टास्क की सूची
//   const [isEditing, setIsEditing] = useState(false); // एडिट मोड
//   const [currentTaskIndex, setCurrentTaskIndex] = useState(null); // एडिट किए जाने वाले टास्क का इंडेक्स

//   // टास्क जोड़ने का हैंडलर
//   const handleAddTask = () => {
//     if (task.trim() !== "") {
//       if (isEditing) {
//         // एडिट मोड में टास्क अपडेट करें
//         const updatedTasks = tasks.map((t, index) =>
//           index === currentTaskIndex ? { ...t, text: task } : t
//         );
//         setTasks(updatedTasks);
//         setIsEditing(false);
//         setCurrentTaskIndex(null);
//       } else {
//         // नया टास्क जोड़ें
//         setTasks([...tasks, { text: task, completed: false }]);
//       }
//       setTask(""); // इनपुट को रीसेट करना
//     }
//   };

//   // टास्क को पूरा करने का हैंडलर
//   const handleCompleteTask = (index) => {
//     const updatedTasks = tasks.map((t, i) =>
//       i === index ? { ...t, completed: !t.completed } : t
//     );
//     setTasks(updatedTasks);
//   };

//   // टास्क को डिलीट करने का हैंडलर
//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   // टास्क को एडिट करने का हैंडलर
//   const handleEditTask = (index) => {
//     setTask(tasks[index].text);
//     setIsEditing(true);
//     setCurrentTaskIndex(index);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>📝 To-Do List</h1>
//       <div>
//         {/* इनपुट फील्ड */}
//         <input
//           type="text"
//           placeholder="write your task
//           ..."
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             fontSize: "16px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         {/* टास्क जोड़ने/अपडेट करने का बटन */}
//         <button
//           onClick={handleAddTask}
//           style={{
//             padding: "10px 20px",
//             marginLeft: "10px",
//             fontSize: "16px",
//             backgroundColor: isEditing ? "#007BFF" : "#4CAF50",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           {isEditing ? "Update" : "Add"}
//         </button>
//       </div>

//       {/* टास्क की सूची */}
//       <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
//         {tasks.map((t, index) => (
//           <li
//             key={index}
//             style={{
//               padding: "10px",
//               margin: "10px auto",
//               width: "320px",
//               backgroundColor: t.completed ? "#d4edda" : "#f4f4f4",
//               borderRadius: "5px",
//               textAlign: "left",
//               boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//               textDecoration: t.completed ? "line-through" : "none",
//               color: t.completed ? "#6c757d" : "black",
//             }}
//           >
//             {index + 1}. {t.text}
//             <div style={{ float: "right" }}>
//               {/* Complete Task Button */}
//               <button
//                 onClick={() => handleCompleteTask(index)}
//                 style={{
//                   padding: "5px 10px",
//                   marginRight: "5px",
//                   fontSize: "14px",
//                   backgroundColor: t.completed ? "#ffc107" : "#28a745",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 {t.completed ? "Undo" : "Complete"}
//               </button>
//               {/* Edit Task Button */}
//               <button
//                 onClick={() => handleEditTask(index)}
//                 style={{
//                   padding: "5px 10px",
//                   marginRight: "5px",
//                   fontSize: "14px",
//                   backgroundColor: "#007BFF",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Edit
//               </button>
//               {/* Delete Task Button */}
//               <button
//                 onClick={() => handleDeleteTask(index)}
//                 style={{
//                   padding: "5px 10px",
//                   fontSize: "14px",
//                   backgroundColor: "#dc3545",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
