import { reject, anyPass, isEmpty, isNil, pickBy, values } from "ramda";
import { numLevels } from "../config";

export const getLevelData = (drink) => {
  let filteredDrink = reject(anyPass([isEmpty, isNil]), drink);
  console.log(typeof filteredDrink);
  const isIngredient = (val, key) => key.includes("strIngredient");
  return {
    name: drink.strDrink,
    image: drink.strDrinkThumb,
    ingredients: values(pickBy(isIngredient, filteredDrink)),
  };
};

export const getOption = (drink, isTheCorrectOne) => {
  return {
    name: drink.strDrink,
    image: drink.strDrinkThumb,
    isTheCorrectOne,
  };
};

export const shuffle = (arr) => {
  let currentIndex = arr.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
};

export const getScore = (elections) => {
  let score = [];
  let counter = 0;
  for (let i = 0; i < numLevels; i++) {
    if (elections[i]?.isTheCorrectOne) {
      score.unshift(true);
      counter++;
    } else {
      score.push(false);
    }
  }
  return {
    score,
    counter,
  };
};

export const getMessage = (counter) => {
  if (counter === 0) return "Surely you can do better";
  if (counter === 1) return "At least one";
  if (counter < numLevels / 2) return "Go improve it!";
  if (counter === numLevels) return "You are the king of the bar!";
  if (counter >= numLevels - 1) return "Such a great drinker!";
  if (counter >= numLevels / 2) return "Not bad, drinker";
};
