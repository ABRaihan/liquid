import { animationActions } from '../actions/animationActions';

const animationReducer = (state, { type, payload }) => {
  switch (type) {
    case animationActions.SEARCHBAR: {
      return { ...state, searchBarAnimation: payload };
    }
    default: {
      return state;
    }
  }
};
export default animationReducer;
