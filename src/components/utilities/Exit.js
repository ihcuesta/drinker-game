import React from "react";
import ExitImg from "../../assets/exit.svg";

const Exit = ({ handleExit }) => {
  return (
    <div
      className="flex items-center fixed top-5 right-5 cursor-pointer"
      onClick={handleExit}
    >
      <img src={ExitImg} alt="Exit" className="h-[15px] mr-1" />
      <p className="text-mainBlue font-semibold">Exit</p>
    </div>
  );
};

export default Exit;
