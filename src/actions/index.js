export const types = {
  GET_LEVELS: "levels/get_levels",
  GET_LEVELS_SUCCESS: "levels/get_levels_success",
  GET_LEVELS_FAIL: "levels/get_levels_fail",

  SAVE_ELECTION: "save_election",
  LEVEL_UP: "level_up",
  RESET_STORE: "reset_store",

  SAVE_DIFFICULTY: "save_difficulty",
};

export const getLevels = (difficulty) => ({
  type: types.GET_LEVELS,
  payload: difficulty,
});

export const getLevelsSuccess = (drinks) => ({
  type: types.GET_LEVELS_SUCCESS,
  payload: drinks,
});

export const getLevelsFail = ({ error }) => ({
  type: types.GET_LEVELS_FAIL,
  payload: { error },
});

export const saveElection = (election) => ({
  type: types.SAVE_ELECTION,
  payload: election,
});

export const levelUp = () => ({
  type: types.LEVEL_UP,
});

export const resetStore = () => ({
  type: types.RESET_STORE,
});

export const saveDifficulty = (difficulty) => ({
  type: types.SAVE_DIFFICULTY,
  payload: difficulty,
});
