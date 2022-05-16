import React from "react";
import { useDispatch } from "react-redux";
import { getLevels } from "../../actions";
import homeBg from "../../assets/homeBg2.jpg";
import heroClaim from "../../assets/heroClaim.svg";
import { FadeIn } from "animate-css-styled-components";
import MainButton from "../utilities/MainButton";

const Home = () => {
  const dispatch = useDispatch();
  const initGame = () => dispatch(getLevels());

  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat bg-right-top flex justify-end"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="w-full 2xl:w-2/3 flex justify-center items-center flex-col p-5 xl:p-16">
        <FadeIn duration="0.5s">
          <img src={heroClaim} alt="Drinker Game" />
        </FadeIn>
        <FadeIn duration="0.5s" delay="0.3s">
          <p className="text-mainBlue font-semibold text-lg mt-3 text-center">
            Play and guess if you are{" "}
            <span className="text-mainPink">a real drinker</span>!
          </p>
        </FadeIn>
        <FadeIn duration="0.5s" delay="0.6s">
          <MainButton text="PLAY" handleOnClick={initGame} />
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;
