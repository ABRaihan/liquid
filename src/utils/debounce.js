const debounce = (fn, delay) => {
  let timeout;
  return (event) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => fn(event), delay);
  };
};
export default debounce;
