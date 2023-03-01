function removeDuplicatesFromArray(ar, key = '') {
  return [...new Map(ar.map((x) => [key, x])).values()];
}

function removeItemFromArray(ar, item, key = '') {
  return ar.filter((v) => v[key] !== item[key]);
}
