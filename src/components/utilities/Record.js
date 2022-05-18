import React from "react";
import Score from "./Score";
import { getMessage } from "../../utils";

const Record = ({ record }) => {
  console.log(getMessage(record));
  return (
    <div className="w-full flex items-center flex-col">
      <h2 className="text-mainPink font-bold opacity-80 mb-2">YOUR RECORD</h2>
      <div className="flex justify-center w-[200px]">
        {Array.from(Array(Number(record)))?.map((score, i) => (
          <Score key={i} classname="w-[40px] fill-mainBlue" />
        ))}
      </div>
      <h3 className="text-4xl text-mainPink font-bold text-center mt-2 mb-10">
        {getMessage(record)}
      </h3>
    </div>
  );
};

export default Record;
