import React from "react";

const Toast = ({ election }) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen fixed z-10 bg-black/50">
      <div className="w-1/3 h-1/3 bg-slate-300 flex items-center justify-center rounded-xl">
        <p>{election.isTheCorrectOne ? "Es correcta!" : "No es correcta..."}</p>
      </div>
    </div>
  );
};

export default Toast;
