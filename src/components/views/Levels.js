import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveElection, levelUp, getLevels, resetStore } from "../../actions";
import { numLevels, time } from "../../config";
import Toast from "../utilities/Toast";
import { isEmpty } from "ramda";
import GameResume from "../utilities/GameResume";
import LevelsBg from "../../assets/levelsBg.jpg";
import Chalkboard from "../../assets/chalkboard.jpg";
import DrinkBg from "../../assets/drinkBg.png";
import { FadeIn } from "animate-css-styled-components";
import GameGuide from "../utilities/GameGuide";
import TimeLine from "../utilities/TimeLine";
import Exit from "../utilities/Exit";

const Levels = () => {
  const dispatch = useDispatch();
  const { currentLevel, levels, elections } = useSelector(
    (state) => state.game
  );
  const [level, setLevel] = useState({});
  const [election, setElection] = useState({});
  const [gameFinished, setGameFinished] = useState(false);
  const [countDown, setCountDown] = useState(false);

  useEffect(() => {
    setLevel(levels[currentLevel - 1]);
    setCountDown(true);
  }, [currentLevel]);

  useEffect(() => {
    let myTimeout;
    if (countDown) {
      myTimeout = setTimeout(handleTimeOut, time);
    } else {
      clearTimeout(myTimeout);
    }
    return () => clearTimeout(myTimeout);
  }, [countDown, currentLevel]);

  const handleLevelUp = () => {
    setElection({});
    if (currentLevel < numLevels) {
      dispatch(levelUp());
    } else {
      endGame();
    }
  };

  const endGame = () => setGameFinished(true);

  const restartGame = () => {
    setGameFinished(false);
    dispatch(getLevels());
  };

  const handleResetStore = () => {
    setGameFinished(false);
    dispatch(resetStore());
  };

  const handleSelectOption = (option) => {
    setCountDown(false);
    dispatch(saveElection(option));
    setElection(option);
    setTimeout(handleLevelUp, 2000);
  };

  const handleTimeOut = () => {
    console.log("Se acabó el tiempo!");
    dispatch(saveElection({ isTheCorrectOne: false }));
    handleLevelUp();
  };

  return (
    <>
      {gameFinished && (
        <GameResume
          handleRestart={restartGame}
          handleReset={handleResetStore}
        />
      )}
      {!isEmpty(election) && <Toast election={election} />}
      <div
        className="h-screen w-screen flex flex-col justify-center items-center p-6 sm:p-10 relative"
        style={{ backgroundImage: `url(${LevelsBg})` }}
      >
        <Exit handleExit={handleResetStore} />
        <GameGuide />
        <div
          className={`flex flex-col items-center w-full justify-center ${
            elections.length === numLevels && "blur-sm"
          }`}
        >
          <FadeIn duration="0.8s" className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
            <h2 className="text-4xl font-bold text-mainBlue mb-6 text-center">
              Guess the <span className="text-mainPink">drink</span>
            </h2>
            <div
              style={{ backgroundImage: `url(${Chalkboard})` }}
              className="min-h-[150px] rounded-xl relative bg-no-repeat flex items-center px-20 py-5 text-white caveat text-2xl"
            >
              <div className="absolute w-[20px] h-full bg-mainPink/50 left-0 top-0 rounded-l-xl"></div>
              <ul className="list-disc">
                {level?.ingredients?.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <div className="flex gap-24 mt-16 max-w-3xl m-auto">
            {level?.options?.map((opt, i) => (
              <div
                key={i}
                className="w-1/3 cursor-pointer flex justify-center flex-col hover:scale-105 transition-transform"
                onClick={() => handleSelectOption(opt)}
              >
                <div
                  className="p-5 bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url(${DrinkBg})` }}
                >
                  <img
                    src={opt.image}
                    alt={opt.name}
                    className="rounded-full"
                  />
                </div>
                <p className="mt-8 uppercase text-mainPink font-bold text-center">
                  {opt.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {elections.length !== numLevels && <TimeLine />}
    </>
  );
};

export default Levels;
