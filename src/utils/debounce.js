let timeout;
const fetchDebounce = (fn, delay) => {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => fn(), delay);
};
export default fetchDebounce;
