import { useState, useEffect } from "react";
import { numLevels, time } from "../../config";
import { useSelector } from "react-redux";

const TimeLine = () => {
  const [timeNum, setTimeNum] = useState(time / 1000);

  const { currentLevel, elections } = useSelector((state) => state.game);

  useEffect(() => {
    setTimeNum(time / 1000);
  }, [currentLevel]);

  useEffect(() => {
    let timing;
    timing = setInterval(() => {
      setTimeNum(timeNum - 1);
    }, 1000);
    if (elections.length === numLevels) clearInterval(timing);
    return () => clearInterval(timing);
  }, [timeNum, elections]);

  return (
    <div className="fixed bottom-0 right-0 text-2xl">
      <div className="text-mainBlue font-semibold flex justify-end px-6 py-4">
        <p>{timeNum}</p>
      </div>
      <div className="bg-mainBlue h-[20px] w-screen"></div>
    </div>
  );
};

export default TimeLine;
