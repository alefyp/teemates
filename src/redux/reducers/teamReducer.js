import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function teamReducer(state = initialState.team, action) {
  switch (action.type) {
    case actionTypes.ADD_CHAMPION:
      return [...state, { ...action.champion }];
    case actionTypes.REMOVE_CHAMPION:
      const tempState = [...state];
      for (let i = 0; i < tempState.length; i++) {
        if (tempState[i].id === action.champion.id) {
          tempState.splice(i, 1);
        }
      }
      return [tempState];
    default:
      return state;
  }
}
