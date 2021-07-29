import * as actionTypes from "../actions/actionTypes";

export default function teamReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_CHAMPION:
      return [...state, { ...action.champ }];
    case actionTypes.REMOVE_CHAMPION:
      const tempState = [...state];
      for (let i = 0; i < tempState.length; i++) {
        if (tempState[i].id === action.id) {
          tempState.splice(i, 1);
        }
      }
      return [tempState];
    default:
      return state;
  }
}
