const initState = {
  showLogin: false,
};

export const navigationReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'toggleLogin': {
      return {
        ...state,
        showLogin: !state.showLogin,
      };
    }
    default:
      return state;
  }
};
