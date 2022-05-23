import { combineReducers } from 'redux'
import { types } from '../actions'

const initialState = {
  currentLevel: 0,
  levels: [],
  elections: [],
  loading: false,
  error: false
}

function game(state = initialState, action) {
  switch (action.type) {
    case types.GET_LEVELS:
      return {
        ...state,
        loading: true,
        error: false
      }
    case types.GET_LEVELS_SUCCESS:
      return {
        ...state,
        levels: action.payload,
        elections: [],
        currentLevel: 1,
        loading: false
      }
    case types.GET_LEVELS_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      }
    case types.SAVE_ELECTION:
      return {
        ...state,
        elections: [...state.elections, action.payload]
      }
    case types.LEVEL_UP:
      return {
        ...state,
        currentLevel: state.currentLevel + 1
      }
    case types.RESET_STORE:
      return {
        ...state,
        currentLevel: 0,
        levels: [],
        elections: []
      }
    case types.SAVE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  game
})
