import { combineReducers } from "redux";

import canvasReducer from "./canvasReducer";
import colorReducer from "./colorReducer";
import toolReducer from "./toolReducer";

export default combineReducers({
  boxes: canvasReducer,
  currentColor: colorReducer,
  currentTool: toolReducer
});
