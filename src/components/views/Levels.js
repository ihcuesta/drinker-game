import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveElection, levelUp, getLevels, resetStore } from "../../actions";
import { numLevels } from "../../config";
import Toast from "../utilities/Toast";
import { isEmpty } from "ramda";
import GameResume from "../utilities/GameResume";

const Levels = () => {
  const dispatch = useDispatch();
  const { currentLevel, levels } = useSelector((state) => state.game);
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
      myTimeout = setTimeout(handleTimeOut, 5000);
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
    dispatch(saveElection({ timeOut: true }));
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
      <div className="p-5">
        <h2>Level: {currentLevel}</h2>
        <div className="flex flex-col gap-3 mt-3">
          {level?.options?.map((opt, i) => (
            <button
              key={i}
              className="bg-mainPink text-white p-4 rounded-md w-1/4 cursor-pointer"
              onClick={() => handleSelectOption(opt)}
            >
              {opt.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Levels;
