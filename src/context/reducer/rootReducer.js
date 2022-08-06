import { actions } from '../actions/actions';

const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case actions.INCREMENT: {
      return { ...state, count: payload + 1 };
    }
    default: {
      return state;
    }
  }
};
export default rootReducer;
