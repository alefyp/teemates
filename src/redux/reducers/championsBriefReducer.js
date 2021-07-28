import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function championsBriefReducer(
  state = initialState.championsBrief,
  action
) {
  switch (action.type) {
    case actionTypes.LOAD_CHAMPIONS_BRIEF_SUCCESS:
      return action.champions;
    default:
      return state;
  }
}
