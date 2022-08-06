export const animationActions = {
  SEARCHBAR: 'SEARCHBAR',
};

export const createAnimationActions = (dispatch) => ({
  setSearchBarAnimation(value) {
    dispatch({
      type: animationActions.SEARCHBAR,
      payload: value,
    });
  },
});
