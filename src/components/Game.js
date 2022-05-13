import React from "react";
import { useSelector } from "react-redux";
import Home from "./views/Home";
import Loading from "./utilities/Loading";
import Levels from "./views/Levels";

const Game = () => {
  const { loading, currentLevel } = useSelector((state) => state.game);

  return (
    <>
      {loading && <Loading />}
      {currentLevel ? <Levels /> : <Home />}
    </>
  );
};

export default Game;
