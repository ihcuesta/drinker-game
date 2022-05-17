import { useState, useEffect } from "react";
import { numLevels, time } from "../../config";
import { useSelector } from "react-redux";
import Chrono from "./Chrono";

const TimeLine = () => {
  const [timeNum, setTimeNum] = useState(time / 1000);
  const [percentage, setPercentage] = useState(100);

  const { currentLevel, elections } = useSelector((state) => state.game);

  const portion = 100 / (time / 1000);
  const alert = timeNum <= 5;

  useEffect(() => {
    setTimeNum(time / 1000);
    setPercentage(100);
  }, [currentLevel]);

  useEffect(() => {
    let timing;
    timing = setInterval(() => {
      setTimeNum(timeNum - 1);
      setPercentage(percentage - portion);
      console.log(percentage);
    }, 1000);
    if (elections.length === numLevels) clearInterval(timing);
    return () => clearInterval(timing);
  }, [timeNum, elections]);

  return (
    <div className="fixed bottom-0 right-0 text-2xl w-screen">
      <div className="flex items-center justify-end px-6 py-4">
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
