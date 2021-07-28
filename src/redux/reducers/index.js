import { combineReducers } from "redux";
import team from "./teamReducer";
import championsBrief from "./championsBriefReducer";

const rootReducer = combineReducers({
  team: team,
  championsBrief: championsBrief,
});

export default rootReducer;
