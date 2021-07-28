export default function teamReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CHAMPION":
      return [...state, { ...action.champ }];
    default:
      return state;
  }
}
