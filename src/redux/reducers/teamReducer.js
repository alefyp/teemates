import * as actionTypes from "../actions/actionTypes";

export default function teamReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_CHAMPION:
      return [...state, { ...action.champ }];
    case actionTypes.REMOVE_CHAMPION:
      return [...state, { ...action.champ }];
    default:
      return state;
  }
}
