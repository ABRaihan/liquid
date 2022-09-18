import React, { createContext, useMemo, useReducer } from 'react';
import combineReducers from '../../utils/combine';
import { createRootActions } from '../actions/rootActions';
import rootReducer from '../reducer/rootReducer';
import rootState from './storeData';

const StoreContext = createContext();
const DispatchContext = createContext();

function ContextProvider({ children }) {
  const reducers = combineReducers(rootReducer);
  const [state, dispatch] = useReducer(reducers, rootState);
  const store = useMemo(() => state, [state]);
  const actions = useMemo(
    () => ({
      ...createRootActions(dispatch),
    }),
    [dispatch],
  );
  return (
    <DispatchContext.Provider value={actions}>
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    </DispatchContext.Provider>
  );
}
export { ContextProvider as default, StoreContext, DispatchContext };
