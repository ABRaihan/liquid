export const rootActions = {
  SET_FORM_USER: 'setFormUser',
  SET_USER: 'setUser',
  SET_AUTH_IS_OPEN: 'setAuthIsOpen',
  // SET_CATEGORY: 'setCategory',
  SET_PAGES: 'setPages',
  SET_SOCIAL: 'setSocial',
};

export const createRootActions = (dispatch) => ({
  setFormUser(value) {
    dispatch({
      type: rootActions.SET_FORM_USER,
      payload: value,
    });
  },
  setUser(value) {
    dispatch({
      type: rootActions.SET_USER,
      payload: value,
    });
  },
  setAuthIsOpen(value) {
    dispatch({
      type: rootActions.SET_AUTH_IS_OPEN,
      payload: value,
    });
  },
  // setCategory(value) {
  //   dispatch({
  //     type: rootActions.SET_CATEGORY,
  //     payload: value,
  //   });
  // },
  setPages(value) {
    dispatch({
      type: rootActions.SET_PAGES,
      payload: value,
    });
  },
  setSocial(value) {
    dispatch({
      type: rootActions.SET_SOCIAL,
      payload: value,
    });
  },
});
