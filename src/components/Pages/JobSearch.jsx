import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { MapPin } from "lucide-react";
import JobCard from "../Layout/JobCard";
import Filters from "../Layout/Filters";

const JobSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const [location, setLocation] = useState("");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const dropdownRef = useRef(null);

  const options = ["Developer", "Designer", "Tester", "Dev Ops"];

  const vibrantPastelPalettes = [
    { color: "#ffb3ba", borderColor: "#cc5a65" }, // Pastel Pink -> Rose Border
    { color: "#ffdfba", borderColor: "#cc8d45" }, // Pastel Orange -> Amber Border
    { color: "#ffffba", borderColor: "#b3b324" }, // Pastel Yellow -> Olive-Gold Border
    { color: "#baffc9", borderColor: "#3bb354" }, // Pastel Mint -> Emerald Border
    { color: "#bae1ff", borderColor: "#3d86cc" }, // Pastel Blue -> Ocean Border
    { color: "#e8c4ff", borderColor: "#8c4db3" }, // Pastel Purple -> Amethyst Border
    { color: "#ffc6ff", borderColor: "#cc4ecb" }, // Pastel Magenta -> Orchid Border
    { color: "#9bf6ff", borderColor: "#1aa3b3" }, // Pastel Cyan -> Teal Border
    { color: "#ffd3b6", borderColor: "#cc743d" }, // Pastel Coral -> Terracotta Border
    { color: "#a0e7e5", borderColor: "#2e9491" }, // Pastel Turquoise -> Deep Aqua Border
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="Page w-full h-[calc(100vh-160px)] flex flex-col font-Google">
      {/* top search bar */}
      <div className="Top w-full h-20 border-2 border-green-500 flex items-center px-3 gap-10 shrink-0">
        {/* Dropdown  */}
        <div className="Dropdown flex items-center gap-2">
          <Search className="border rounded-full border-mgray-100 w-10 h-10 p-2 shadow-md shadow-mgray-200/10" />
          <div className="relative inline-block text-left" ref={dropdownRef}>
            {/* Dropdown Trigger Button */}
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-between items-center w-56 px-4 py-2 bg-white border border-mgray-100 rounded-full shadow-sm shadow-mgray-200/10 text-sm  text-mgray-200 hover:bg-gray-50 focus:outline-none focus:border focus:border-blue-500 cursor-pointer"
            >
              {selectedOption}
              {/* Chevron Icon */}
              <svg
                className="w-5 h-5 ml-2 -mr-1 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu Overlay */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg shadow-mgray-200/10 bg-white border border-mgray-100 z-50">
                <div className="py-1">
                  {options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Work Location  */}
        <div className="WorkLocation flex gap-2 items-center">
          <div className="MapPinIcon">
            <MapPin className="border rounded-full border-mgray-100 w-10 h-10 p-2 shadow-md shadow-mgray-200/10" />
          </div>
          <input
            className="inline-flex justify-between items-center w-56 px-4 py-2 bg-white border border-mgray-100 rounded-full shadow-sm shadow-mgray-200/10 text-sm  text-mgray-200 hover:bg-gray-50 focus:outline-none focus:border focus:border-blue-500 "
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      {/* bottom cars and filters */}
      <div className="bottom w-full h-full flex ">
        {/* Left  */}
        <div className="Left w-60 h-[calc(100vh-160px)] border-2 border-red-500 shrink-0 p-5">
          <Filters></Filters>
        </div>

        {/* Right  */}
        <div className="right border-blue-500 border-2 w-full p-4 flex h-[calc(100vh-160px)] overflow-y-scroll scrollbar-none justify-center flex-wrap gap-4">
          {vibrantPastelPalettes.map((colorObject, index) => {
            return <JobCard key={index} color={colorObject} />;
          })}
          {/* <JobCard color={"#fce1e4"} />
          <JobCard color={"#e8dff5"} />
          <JobCard color={"#faedcd"} />
          <JobCard color={"#d6e2e9"} />
          <JobCard color={"#e2ece9"} /> */}
          {/* "right border-blue-500 border-2 w-full p-4 flex flex-wrap gap-4 items-center " */}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
