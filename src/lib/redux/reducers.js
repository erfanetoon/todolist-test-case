import { combineReducers } from "redux";
import eventsReducer from "./events/reducer";

export default combineReducers({
  events: eventsReducer,
});
