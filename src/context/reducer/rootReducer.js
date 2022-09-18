import { rootActions } from '../actions/rootActions';

const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case rootActions.SET_FORM_USER: {
      const user = { ...state.formState, ...payload };
      return { ...state, formState: user };
    }
    case rootActions.SET_USER: {
      const userState = { ...state.userState, ...payload };
      return { ...state, userState };
    }
    case rootActions.SET_AUTH_IS_OPEN: {
      return { ...state, authIsOpen: payload };
    }
    // case rootActions.SET_CATEGORY: {
    //   return { ...state, category: payload };
    // }
    // case rootActions.SET_PAGES: {
    //   return { ...state, pages: payload };
    // }
    // case rootActions.SET_SOCIAL: {
    //   return { ...state, social: payload };
    // }
    default: {
      return state;
    }
  }
};
export default rootReducer;
