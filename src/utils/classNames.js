/**
 * dynamic classNames execute
 * @param  {...any} classes - String | Object
 * @returns {string} - string of classes
 */
export default function classNames(...classes) {
  const classArray = classes.flat().map((classItem) => {
    // only object types are allowed. here map from object keys
    if (typeof classItem === 'object' && !Array.isArray(classItem) && classItem !== null) {
      const keys = Object.keys(classItem).filter((key) => Boolean(classItem[key]));
      return keys;
    }
    return classItem;
  });
  return classArray.flatMap((item) => item).filter(Boolean).join(' ');
}
