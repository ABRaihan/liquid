// This function is for checking that data come from the server is right
export const isEmptyObject = (obj) => (
  Object.keys(obj || {}).length === 0
    && Object.values(obj || {}).filter(Boolean)?.length === 0
);

export const isEmptyArray = (arr) => arr.length === 0;
// This is function make a number two decimal places
export const twoDecimal = (number) => {
  if (typeof number !== 'number') throw new Error('Give a number');
  return number >= 10 ? number : `0${number}`;
};
