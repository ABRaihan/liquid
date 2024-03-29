// This function is for checking that data come from the server is right
export const isEmptyObject = (obj) => Object.keys(obj || {}).length === 0
  && Object.values(obj || {}).filter(Boolean)?.length === 0;

export const isEmptyArray = (array) => {
  if (!Array.isArray(array)) return false;
  return array.length === 0;
};
// This is function make a number two decimal places
export const twoDecimal = (number) => {
  if (typeof number !== 'number') throw new Error('Give a number');
  return number >= 10 ? number : `0${number}`;
};

export const isLastElement = (list, index) => list.length - 1 === index;
export const objectExistInArray = (array, element) => {
  if (!Array.isArray(array)) throw new Error('Give An Array Element');
  for (const obj of array) {
    if (obj.name === element) {
      return true;
    }
  }
  return false;
};
