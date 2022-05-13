import React from "react";
import Check from "../../assets/check.svg";
import Close from "../../assets/close.svg";

const Grades = ({ election }) => {
  return (
    <div
      className={`h-full w-full rounded-full bg-no-repeat bg-cover border-2 flex justify-center items-center ${
        election.isTheCorrectOne ? "border-mainBlue" : "border-mainPink"
      }`}
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${election.image})`,
      }}
    >
      {election.isTheCorrectOne ? (
        <img src={Check} width="50%" height="50%" alt="That´s correct!" />
      ) : (
        <img src={Close} width="50%" height="50%" alt="No, sorry..." />
      )}
    </div>
  );
};

export default Grades;
