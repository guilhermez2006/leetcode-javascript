function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]; // par encontrado — early return
            }
        }
    }
    return []; // early return: só alcançado se nenhum par somar o target
}