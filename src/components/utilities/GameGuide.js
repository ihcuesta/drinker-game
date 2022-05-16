import React from "react";
import { useSelector } from "react-redux";
import Grades from "./Grades";
import { numLevels } from "../../config";

const GameGuide = () => {
  const { elections, levels, currentLevel } = useSelector(
    (state) => state.game
  );
  return (
    <div
      className={`flex flex-col items-center justify-between fixed left-5 ${
        elections.length === numLevels ? "hidden" : ""
      }`}
    >
      {levels.map((e, i) => (
        <div
          key={i}
          className="rounded-full bg-black/50 border-2 border-slate-700/50 w-9 h-9 mb-2 mt-2"
        >
          {elections[i] && <Grades election={elections[i]} />}
        </div>
      ))}
    </div>
  );
};

export default GameGuide;
