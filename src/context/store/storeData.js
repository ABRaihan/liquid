const formState = {
  email: '',
  password: '',
  confirmPass: '',
};
const userState = {
  isLogged: false,
};

// combine all states into one object
const rootState = {
  authIsOpen: false,
  formState,
  userState,
};
export default rootState;
