// Rename function uses key map to rename object keys

export default function rename(obj, keys) {
  return Object.keys(keys).reduce((o, key) => {
    if (key in o) {
      o[keys[key]] = o[key];
      delete o[key];
    }
    return o;
  }, Object.assign({}, obj));
}
