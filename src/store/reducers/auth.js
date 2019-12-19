import { REGISTER_SUCESS, REGISTER_FAIL } from '../actions/types';
import { defaultMaxListeners } from 'events';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCESS:
      localStorage.setItem('token', payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false };

    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        ...payload,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
};
