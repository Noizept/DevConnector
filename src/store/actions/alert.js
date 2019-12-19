import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType) => {
  const id = uuid.v4();
  return {
    type: SET_ALERT,
    payload: { msg, alertType, id }
  };
};

export const removeAlert = id => {
  return {
    type: REMOVE_ALERT,
    payload: id
  };
};
