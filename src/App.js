// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import "./App.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Home from "./component/Home";
// import User from "./component/User";
// import About from "./component/About";
// import Dashboard from "./component/Dashboard";
// import Login from "./auth/Login";
// import Signup from "./auth/Register";
// import Settings from "./auth/Setting";
// import Profile from "./auth/Profile";

// function App() {
//   return (
//     <Router>
//       {/* <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/users">Users</Nav.Link>
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar> */}

//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/users" element={<User />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/setting" element={<Settings />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Feed from "./component/Feed";
import Profile from "./auth/Profile";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Stories from "./component/Stroies";
import NavBar from "./layout.js/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./component/Chat";
import ChatList from "./component/Chatlist";
import Footer from "./layout.js/Footer";
import SettingsPage from "./auth/Setting";

function App() {
  // const [installPrompt, setInstallPrompt] = useState(null);

  // useEffect(() => {
  //   const handleBeforeInstallPrompt = (event) => {
  //     // Prevent the mini-infobar from appearing
  //     event.preventDefault();
  //     // Store the event for later use
  //     setInstallPrompt(event);
  //   };

  //   window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

  //   return () => {
  //     window.removeEventListener(
  //       "beforeinstallprompt",
  //       handleBeforeInstallPrompt
  //     );
  //   };
  // }, []);

  // const handleInstallClick = () => {
  //   if (installPrompt) {
  //     // Show the install prompt
  //     installPrompt.prompt();

  //     // Wait for the user to respond to the prompt
  //     installPrompt.userChoice.then((choiceResult) => {
  //       if (choiceResult.outcome === "accepted") {
  //         console.log("User accepted the install prompt");
  //       } else {
  //         console.log("User dismissed the install prompt");
  //       }
  //       // Reset the prompt after use
  //       setInstallPrompt(null);
  //     });
  //   }
  // };

  return (
    <>
      {/* {installPrompt && (
        <button onClick={handleInstallClick}>Install App</button>
      )} */}

      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            {/* <Route path="*" element={<NavBar />} /> */}
            <Route path="*" element={<Footer />} />
          </Routes>

          <Routes>
            <Route path="/SettingsPage" element={<SettingsPage />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Stories />} />
            <Route path="/messages" element={<Chat />} />
            <Route path="/chatlist" element={<ChatList />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
