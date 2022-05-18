import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Chrono from "./Chrono";
import Exit from "./Exit";

const TimeLine = ({ countDown, handleExit }) => {
  const [timeNum, setTimeNum] = useState(0);
  const [percentage, setPercentage] = useState(100);

  const { currentLevel, elections, difficulty } = useSelector(
    (state) => state.game
  );

  const portion = 100 / (difficulty.time / 1000);
  const alert = timeNum <= 5;

  const controlCountDowns = currentLevel > 0 || countDown;

  useEffect(() => {
    setTimeNum(difficulty.time / 1000);
    setPercentage(100);
  }, [currentLevel, difficulty]);

  useEffect(() => {
    let timing;
    timing = setInterval(() => {
      setTimeNum(timeNum - 1);
      setPercentage(percentage - portion);
    }, 1000);
    if (elections.length === difficulty.numLevels || !countDown)
      clearInterval(timing);
    return () => clearInterval(timing);
  }, [timeNum, elections, countDown, percentage, portion, difficulty]);

  useEffect(() => {
    if (!controlCountDowns) setTimeNum(0);
  }, [controlCountDowns]);

  return (
    <div className="pt-7 lg:fixed lg:bottom-0 lg:right-0 text-2xl w-screen">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="md:invisible">
          {currentLevel >= 1 && <Exit handleExit={handleExit} />}
        </div>
        <div className="flex items-center">
          <Chrono
            classname={`w-[20px] h-[20px] ${
              alert ? "fill-mainPink" : "fill-mainBlue"
            }`}
          />
          <p
            className={`w-8 text-right font-semibold ${
              alert ? "text-mainPink" : "text-mainBlue"
            }`}
          >
            {timeNum}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className={`bg-mainBlue h-[20px] transition-all ${alert && "alert"}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TimeLine;
