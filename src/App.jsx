import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import RegistrationPage from "./components/Pages/RegistrationPage";

function App() {
  return (
    <div className="font-Google">
      <Navbar />
      <RegistrationPage></RegistrationPage>
    </div>
  );
}

export default App;
