import { call, takeLatest, fork, put } from "redux-saga/effects";
import * as actions from "../actions";
import { getCocktail } from "../api";
import { getLevelData, getOption, shuffle } from "../utils";

function* getLevels(action) {
  const difficulty = action.payload;
  try {
    const levels = [];

    while (levels.length < difficulty.numLevels) {
      let options = [];

      // Get the correct option
      const { data } = yield call(getCocktail);
      let levelData = getLevelData(data.drinks[0]);
      options.push(getOption(data.drinks[0], true));

      // Get the wrong options
      while (options.length < difficulty.numOptions) {
        let optRepeated;
        do {
          const wrongDrinkFromAPI = yield call(getCocktail);
          const wrongDrink = getOption(wrongDrinkFromAPI.data.drinks[0], false);
          optRepeated = options.some((e) => e.name === wrongDrink.name);
          if (!optRepeated) options.push(wrongDrink);
        } while (optRepeated);
      }

      // Include (shuffled) options in level data
      options = shuffle(options);
      levelData = { ...levelData, options };

      // Level already configured, ready to be added to the list
      levels.push(levelData);
    }
    yield put(actions.getLevelsSuccess(levels));
    console.log("Game starts!");
  } catch (e) {
    console.log(e);
  }
}

function* watchGetLevels() {
  yield takeLatest(actions.types.GET_LEVELS, getLevels);
}

const levelsSagas = [fork(watchGetLevels)];

export default levelsSagas;
