import { combineReducers } from "redux";
import team from "./teamReducer";

const rootReducer = combineReducers({
  team: team,
});

export default rootReducer;
