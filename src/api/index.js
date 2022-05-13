import axios from "axios";

const base = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
});

export const getCocktail = () => {
  return base.get();
};
