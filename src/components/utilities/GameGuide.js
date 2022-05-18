import React from "react";
import { useSelector } from "react-redux";
import Grades from "./Grades";

const GameGuide = () => {
  const { elections, levels, difficulty } = useSelector((state) => state.game);
  return (
    <div
      className={`flex lg:flex-col lg:fixed top-5 lg:top-1/2 lg:translate-y-[-50%] lg:left-5 ${
        elections.length === difficulty.numLevels ? "hidden" : ""
      }`}
    >
      {levels.map((e, i) => (
        <div
          key={i}
          className="rounded-full bg-black/50 border-2 border-slate-700/50 w-9 h-9 mr-2 ml-2 lg:mb-2 lg:mt-2"
        >
          {elections[i] && <Grades election={elections[i]} />}
        </div>
      ))}
    </div>
  );
};

export default GameGuide;
