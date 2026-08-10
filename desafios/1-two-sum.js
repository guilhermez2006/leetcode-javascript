let arrNums = [1, 2, 3, 7, 8];
let target = 9;

function twoSum(nums, target) {
  let mapa = {};
  for (let i = 0; i < nums.length; i++) {
    let precisoDe = target - nums[i];
    if (mapa[precisoDe] !== undefined) {
      return [mapa[precisoDe], i];
    }
    mapa[nums[i]] = i;
  }
}
console.log(twoSum(arrNums, target));
