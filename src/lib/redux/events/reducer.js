import {
  CHANGE_ACTIVE_DATE,
  EVENT_NOT_LOADING,
  EVENT_LOADING,
  SET_INITIAL_STATE,
  ADD_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
} from "./types";

const initState = {
  events: [],
  day: null,
  splash: true,
  eventLoading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return {
        ...state,
        splash: false,
        events: JSON.parse(action.payload) ? JSON.parse(action.payload) : [],
        day: action.day,
      };
    case CHANGE_ACTIVE_DATE:
      return {
        ...state,
        day: action.payload,
      };
    case EVENT_LOADING:
      return {
        ...state,
        eventLoading: true,
      };
    case EVENT_NOT_LOADING:
      return {
        ...state,
        eventLoading: false,
      };
    case ADD_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    case EDIT_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
