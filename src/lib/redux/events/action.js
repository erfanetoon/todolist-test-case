import {
  CHANGE_ACTIVE_DATE,
  SET_INITIAL_STATE,
  EVENT_LOADING,
  EVENT_NOT_LOADING,
  ADD_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
} from "./types";
import { toast } from "react-toastify";

export const setInitialState = () => (dispatch) => {
  const day = new Date();

  dispatch({
    type: SET_INITIAL_STATE,
    payload: window.localStorage.getItem("events"),
    day: day.toDateString(),
  });
};

export const changeDate = (date) => (dispatch) => {
  dispatch({
    type: CHANGE_ACTIVE_DATE,
    payload: date,
  });
};

export const addEvent = (data) => (dispatch, getState) => {
  dispatch({
    type: EVENT_LOADING,
  });

  let events = getState().events.events;
  events.push({ id: events.length + 1, ...data });
  window.localStorage.setItem("events", JSON.stringify(events));

  toast.success("Add event success", {
    position: "bottom-right",
  });

  dispatch({
    type: ADD_EVENT,
    payload: events,
  });

  dispatch({
    type: EVENT_NOT_LOADING,
  });
};

export const editEvent = (id, data) => (dispatch, getState) => {
  dispatch({
    type: EVENT_LOADING,
  });

  let newEvents = [];
  let events = getState().events.events;
  events.map((item) => {
    if (item.id === id) {
      newEvents.push({ id: item.id, ...data });
    } else {
      newEvents.push(item);
    }
  });
  window.localStorage.setItem("events", JSON.stringify(newEvents));

  toast.success("Edit event success", {
    position: "bottom-right",
  });

  dispatch({
    type: EDIT_EVENT,
    payload: newEvents,
  });

  dispatch({
    type: EVENT_NOT_LOADING,
  });
};

export const deleteEvent = (id) => (dispatch, getState) => {
  dispatch({
    type: EVENT_LOADING,
  });

  let events = getState().events.events;
  let newEvents = events.filter((item) => item.id !== id);
  window.localStorage.setItem("events", JSON.stringify(newEvents));

  toast.success("Edit event success", {
    position: "bottom-right",
  });

  dispatch({
    type: DELETE_EVENT,
    payload: newEvents,
  });

  dispatch({
    type: EVENT_NOT_LOADING,
  });
};
