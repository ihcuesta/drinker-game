import { reject, anyPass, isEmpty, isNil, pickBy, values } from "ramda";

export const getLevelData = (drink) => {
  let filteredDrink = reject(anyPass([isEmpty, isNil]), drink);
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

export const getScore = (elections, numLevels) => {
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

export const getMessage = (number) => {
  const counter = Number(number);
  if (counter === 0) return "Surely you can do better 😞";
  if (counter === 1) return "At least one 1️⃣";
  if (counter === 2) return "Go improve it! 💪";
  if (counter === 3) return "Not bad dude 😎";
  if (counter === 4) return "Such a great drinker! 🎉";
  if (counter === 5) return "You are the king of the bar! 👑";
  if (counter === 6) return "Hard drinker! 🏆";
  if (counter === 7) return "Extreme drinker! 💥";
};
