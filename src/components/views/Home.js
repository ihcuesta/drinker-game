import React from "react";
import { useDispatch } from "react-redux";
import { getLevels } from "../../actions";
import homeBg from "../../assets/homeBg.jpg";
import heroClaim from "../../assets/heroClaim.svg";

const Home = () => {
  const dispatch = useDispatch();
  const initGame = () => dispatch(getLevels());

  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat bg-right-top flex justify-end"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="w-full 2xl:w-2/3 flex justify-center items-center flex-col p-5 xl:p-16">
        <img src={heroClaim} alt="Drinker Game" />
        <p className="text-mainBlue font-semibold text-lg mt-3 text-center">
          Play and guess if you are{" "}
          <span className="text-mainPink">a real drinker</span>!
        </p>
        <button
          className="shadow-lg shadow-mainPink/50 text-2xl font-extrabold uppercase text-mainPink py-4 px-16 mt-8 rounded-lg bg-mainBlue border-2 border-mainPink hover:bg-mainPink hover:text-mainBlue"
          onClick={initGame}
        >
          PLAY
        </button>
      </div>
    </div>
  );
};

export default Home;
