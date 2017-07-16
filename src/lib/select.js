// Returns new object with only keys specified

export default function select(t1, keys) {
  Object.keys(t1).filter(k => keys.indexOf(k) !== -1).map(k => {});
}
