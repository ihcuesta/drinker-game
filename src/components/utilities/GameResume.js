import React from "react";
import { useSelector } from "react-redux";
import Grades from "./Grades";
import MainButton from "./MainButton";
import Score from "./Score";
import { getScore, getMessage } from "../../utils";

const GameResume = ({ handleRestart, handleReset }) => {
  const { elections } = useSelector((state) => state.game);
  const scoreData = getScore(elections);

  return (
    <div className="flex justify-center items-center h-screen w-screen fixed z-10 bg-black/50 p-20">
      <div className="w-full h-full flex items-center justify-center flex-col shadow-mainBlue/50 shadow-lg border-2 border-mainBlue bg-black/80 p-20 rounded-xl">
        <div className="flex justify-center w-2/3 mb-12">
          {elections.map((e, i) => (
            <div key={i} className="w-[100px] h-[100px] p-3">
              <Grades election={e} />
            </div>
          ))}
        </div>
        <h2 className="text-mainPink font-bold opacity-80 mb-2">SCORE</h2>
        <div className="flex justify-center w-[200px]">
          {scoreData.score.map((score, i) => (
            <Score
              key={i}
              classname={`w-[40px] fill-mainBlue ${
                score ? "fill-mainBlue" : "fill-slate-500/20"
              }`}
            />
          ))}
        </div>
        <h3 className="text-4xl text-mainPink font-bold text-center mt-2 mb-10">
          {getMessage(scoreData.counter)}
        </h3>
        <MainButton text="PLAY AGAIN" handleOnClick={handleRestart} />
        <button
          onClick={handleReset}
          className="text-mainBlue mt-5 hover:font-semibold"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default GameResume;
