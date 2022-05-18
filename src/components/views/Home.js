import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLevels } from "../../actions";
import homeBg from "../../assets/homeBg2.jpg";
import heroClaim from "../../assets/heroClaim.svg";
import { FadeIn } from "animate-css-styled-components";
import MainButton from "../utilities/MainButton";
import Record from "../utilities/Record";
import Difficulty from "../utilities/Difficulty";

const Home = () => {
  const dispatch = useDispatch();

  const { difficulty } = useSelector((state) => state.game);

  const initGame = () => dispatch(getLevels(difficulty));
  const [thereIsRecord, setThereIsRecord] = useState(false);

  const record = localStorage.getItem("record");

  useEffect(() => {
    if (record) setThereIsRecord(true);
  }, [record]);

  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat bg-right-top flex justify-end"
      style={{
        backgroundImage: `linear-gradient(#00000080, #00000080), url(${homeBg})`,
      }}
    >
      <div className="w-full 2xl:w-2/3 flex justify-center items-center flex-col p-5 xl:p-16">
        <FadeIn duration="0.5s">
          <img src={heroClaim} alt="Drinker Game" />
        </FadeIn>
        <FadeIn duration="0.5s" delay="0.3s">
          {thereIsRecord && <Record record={record} />}
          {thereIsRecord ? (
            <p className="text-mainBlue font-semibold text-lg mt-3 text-center">
              {record < difficulty.numLevels
                ? "That's all you can get?"
                : "Can you repeat that score?"}
            </p>
          ) : (
            <p className="text-mainBlue font-semibold text-lg mt-3 text-center">
              Play and guess if you are{" "}
              <span className="text-mainPink">a real drinker</span>!
            </p>
          )}
        </FadeIn>
        <FadeIn duration="0.5s" delay="0.6s">
          <div className="flex flex-col w-[230px] items-center">
            <MainButton text="PLAY" handleOnClick={initGame} />
            <Difficulty />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;