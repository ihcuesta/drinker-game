export const types = {
  GET_LEVELS: "levels/get_levels",
  GET_LEVELS_SUCCESS: "levels/get_levels_success",
  GET_LEVELS_FAIL: "levels/get_levels_fail",

  SAVE_ELECTION: "save_election",
  LEVEL_UP: "level_up",
  RESET_STORE: "reset_store",
};

export const getLevels = () => ({
  type: types.GET_LEVELS,
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
