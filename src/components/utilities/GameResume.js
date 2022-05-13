import React from "react";
import { useSelector } from "react-redux";

const GameResume = ({ handleRestart, handleReset }) => {
  const { elections } = useSelector((state) => state.game);

  return (
    <div className="flex justify-center items-center h-screen w-screen fixed z-10 bg-black/50">
      <div className="w-1/3 h-1/3 bg-slate-300 p-5 rounded-xl">
        {elections.map((e, i) => (
          <p key={i}>
            {e.timeOut
              ? "Tiempo agotado..."
              : `${e.name}: ${
                  e.isTheCorrectOne ? "Es correcta!" : "No es correcta..."
                }`}
          </p>
        ))}
        <button
          className="p-3 bg-mainBlue text-gray-800 font-bold text-center"
          onClick={handleRestart}
        >
          Play again
        </button>
        <button onClick={handleReset}>Go Home</button>
      </div>
    </div>
  );
};

export default GameResume;
