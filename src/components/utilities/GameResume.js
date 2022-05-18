import { useEffect } from "react";
import { useSelector } from "react-redux";
import Grades from "./Grades";
import MainButton from "./MainButton";
import Score from "./Score";
import { getScore, getMessage } from "../../utils";

const GameResume = ({ handleRestart, handleReset }) => {
  const { elections, difficulty } = useSelector((state) => state.game);
  const scoreData = getScore(elections, difficulty.numLevels);
  const record = localStorage.getItem("record");

  useEffect(() => {
    if (!record || record < scoreData.counter) {
      localStorage.setItem("record", scoreData.counter);
    }
  }, [record, scoreData.counter]);

  return (
    <div className="flex justify-center items-center h-screen w-screen fixed z-10 bg-black/50 p-0 lg:p-20">
      <div className="w-full h-full flex items-center justify-center flex-col shadow-mainBlue/50 shadow-lg border-2 border-mainBlue bg-black/80 p-5 rounded-xl">
        <div className="flex justify-center w-full lg:w-2/3 mb-12">
          {elections.map((e, i) => (
            <div
              key={i}
              className="w-[65px] sm:w-[100px] h-[65px] sm:h-[100px] p-2 sm:p-3"
            >
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
