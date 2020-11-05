import { TOGGLE_LOGIN } from '../types';

const initState = {
  showLogin: false,
};

export const navigationReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_LOGIN: {
      return {
        ...state,
        showLogin: !state.showLogin,
      };
    }
    default:
      return state;
  }
};
