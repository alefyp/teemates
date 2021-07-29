import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function teamReducer(state = initialState.team, action) {
  switch (action.type) {
    case actionTypes.ADD_CHAMPION:
      if (state.length === 5) {
        alert("Oops! You already picked 5 champs!");
        return state;
      }
      return [...state, { ...action.champion }];
    case actionTypes.REMOVE_CHAMPION:
      return state.filter((champ) => champ.id !== action.champion.id);

    default:
      return state;
  }
}
