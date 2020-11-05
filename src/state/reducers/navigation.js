const initState = {
  showLogin: false,
};

export const navigationReducer = (state = initState, { type, payload }) => {
  console.log(type);
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
