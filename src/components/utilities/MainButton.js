import React from "react";

const MainButton = ({ text, handleOnClick }) => {
  return (
    <button
      className="animate-bounce min-w-[245px] shadow-lg shadow-mainPink/50 text-2xl font-extrabold uppercase text-mainPink py-4 px-16 mt-8 rounded-lg bg-mainBlue border-2 border-mainPink hover:bg-mainPink hover:text-mainBlue"
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
