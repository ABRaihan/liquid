export const emailValidation = (email) => {
  const validEmail = email.match(/\w+@+\w+\.com/gi);
  return !!validEmail;
};
export const passwordMatch = (password, confirmPassword) => {
  if (password === confirmPassword) {
    return true;
  }
  return false;
};
export const formError = (formData) => {
  let errors = {};
  for (const key in formData) {
    if (!formData[key]) {
      errors = {
        [key]: true,
        msg: `Fill up ${key} field`,
        status: true,
      };
      break;
    }
  }

  return errors;
};
