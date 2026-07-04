import React from "react";
import { Bookmark, FishingHook, Pickaxe } from "lucide-react";

const JobCard = ({ color, cardData }) => {
  // bg-[#d5f6ed]
  return (
    <div className="MainContainer w-85 h-100 border border-mgray-100 rounded-4xl p-2 flex flex-col shadow-lg shadow-mgray-200/10">
      <div
        className={`TopDetails h-75 shrink-0 rounded-3xl flex flex-col border`}
        style={{ backgroundColor: color.color, borderColor: color.borderColor }}
      >
        <div className="DateNSave w-full h-15 flex items-center justify-between py-1 px-3">
          <span className="bg-white rounded-full px-4 py-1 text-[12px]">
            1 May 2023
          </span>
          <span className="bg-white rounded-full p-2">
            {" "}
            <Bookmark size={15} />
          </span>
        </div>
        <div className="CnameNLogo  w-full h-30 p-4">
          <span>Amazon</span>
          <div className="flex justify-between items-center">
            <span className="font-bold text-2xl text-wrap w-30 shrink-0">
              UI UX Designer
            </span>
            <span className="bg-white rounded-full p-2 shrink-0 h-full">
              {" "}
              <Pickaxe size={35}></Pickaxe>
            </span>
          </div>
        </div>
        <div className="Tags flex flex-wrap p-3 gap-2">
          <span className="bg-white rounded-full px-4 py-1 text-[12px] flex justify-center items-center">
            Full Time
          </span>

          <span className="bg-white rounded-full px-4 py-1 text-[12px] ">
            Full Time
          </span>
          <span className="bg-white rounded-full px-4 py-1 text-[12px] ">
            Full Time
          </span>
          <span className="bg-white rounded-full px-4 py-1 text-[12px] ">
            Full Time
          </span>
        </div>
      </div>
      <div className="BottomDetails h-full  p-4 flex justify-between items-center">
        <div className="pay">
          <div className="amount font-bold">120 usd/hr</div>
          <div className="location text-gray-500 text-sm">India</div>
        </div>
        <div className="details">
          <button className="bg-black rounded-full px-4 py-2 text-[12px] text-white flex justify-center cursor-pointer">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
