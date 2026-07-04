import React from "react";

const Filters = () => {
  return (
    <div className="flex flex-col w-full">
      <span className="font-bold text-2xl mb-1">Filters</span>
      <div className="WorkingSchedule flex flex-col gap-5 justify-center">
        <span className="text-mgray-200 text-sm">Working Schedule</span>
        <ul>
          <li>Full time</li>
          <li>Part time</li>
          <li>Internship</li>
          <li>Project work</li>
          <li>Volunteering</li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
