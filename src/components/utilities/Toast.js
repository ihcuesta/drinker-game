import React from "react";
import { FadeInDownBig } from "animate-css-styled-components";
import Grades from "./Grades";

const Toast = ({ election }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen fixed z-10 bg-black/70">
      <FadeInDownBig
        duration="0.4s"
        className="w-[200px] h-[200px] flex items-center justify-cente"
      >
        <Grades election={election} />
        <p
          className={`font-bold text-center text-2xl mt-2 ${
            election.isTheCorrectOne ? "text-mainBlue" : "text-mainPink"
          }`}
        >
          {election.isTheCorrectOne ? "That´s correct!" : "No, sorry..."}
        </p>
      </FadeInDownBig>
    </div>
  );
};

export default Toast;
