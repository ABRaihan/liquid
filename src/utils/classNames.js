export default function classNames(classes) {
  return Object.keys(classes)
    .filter((key) => classes[key])
    .join(' ');
}
