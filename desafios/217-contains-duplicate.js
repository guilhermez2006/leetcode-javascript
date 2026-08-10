let arrNums = [1, 3, 4, 2, 7, 3];

function containsDuplicate(n) {
  let mapNums = {};

  for (let i = 0; i < n.length; i++) {
    if (mapNums[n[i]] !== undefined) {
      return true;
    }
    mapNums[n[i]] = true;
  }
  return false;
}

console.log(containsDuplicate(arrNums));
