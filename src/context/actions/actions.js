export const actions = {
  INCREMENT: 'INCREMENT',
};

export const createActions = (dispatch) => ({
  increment(value) {
    dispatch({
      type: actions.INCREMENT,
      payload: value,
    });
  },
});
