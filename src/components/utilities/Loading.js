import React from "react";
import Shaker from "../../assets/shaker.png";
import LevelsBg from "../../assets/levelsBg.jpg";

const Loading = () => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${LevelsBg})` }}
    >
      <img
        src={Shaker}
        alt="Loading..."
        width={90}
        height={90}
        className="animate-bounce"
      />
    </div>
  );
};

export default Loading;
