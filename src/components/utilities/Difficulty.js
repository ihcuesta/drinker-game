import { useState, useEffect } from "react";
import { difficulty } from "../../config";
import { useDispatch } from "react-redux";
import { saveDifficulty } from "../../actions";

const Difficulty = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState();
  const handleOnClick = (d) => {
    setSelected(d.level);
    dispatch(saveDifficulty(d));
  };

  useEffect(() => {
    handleOnClick(difficulty[1]);
  }, []);

  return (
    <div className="flex w-[245px] justify-between text-mainBlue mt-2 text-sm">
      {difficulty.map((d, i) => (
        <span
          key={i}
          className={`cursor-pointer ${
            selected === d.level && "font-bold text-mainPink"
          }`}
          onClick={() => handleOnClick(d)}
        >
          {d.level}
        </span>
      ))}
    </div>
  );
};

export default Difficulty;
