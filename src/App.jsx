import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import RegistrationPage from "./components/Pages/RegistrationPage";
import LoginPage from "./components/Pages/LoginPage";
import JobSearch from "./components/Pages/JobSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-Google">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/search" element={<JobSearch />}></Route>

          {/* <RegistrationPage></RegistrationPage> */}
          {/* <LoginPage></LoginPage> */}
          {/* <JobSearch></JobSearch> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
