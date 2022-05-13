import React from "react";
import { useDispatch } from "react-redux";
import { getLevels } from "../../actions";

const Home = () => {
  const dispatch = useDispatch();
  const initGame = () => dispatch(getLevels());

  return (
    <button className="font-bold uppercase text-mainPink" onClick={initGame}>
      PLAY
    </button>
  );
};

export default Home;
