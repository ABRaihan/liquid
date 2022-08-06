import PropTypes from 'prop-types';
import { createContext, useReducer } from 'react';
import { combineReducers } from '../../utils/combine';
import { createActions } from '../actions/actions';
import { createAnimationActions } from '../actions/animationActions';
import animationReducer from '../reducer/animationReducer';
import rootReducer from '../reducer/rootReducer';
import { animatedStates, states } from './storeData';

const Context = createContext();
const { Provider } = Context;

function ContextProvider({ children }) {
  const reducers = combineReducers(animationReducer, rootReducer);

  const [state, dispatch] = useReducer(reducers, {
    ...states,
    ...animatedStates,
  });
  const actions = {
    ...createAnimationActions(dispatch),
    ...createActions(dispatch),
  };
  return <Provider value={{ state, actions }}>{children}</Provider>;
}
export { ContextProvider as default, Context };

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
