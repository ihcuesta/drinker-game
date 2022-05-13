import { reject, anyPass, isEmpty, isNil, pickBy, values } from "ramda";

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
