function runningSum(nums) {
  let arrayResult = [];
  let somaAcumulada = 0; // A calculadora começa zerada

  for (let i = 0; i < nums.length; i++) {
    somaAcumulada += nums[i]; // Soma o número atual na calculadora
    arrayResult.push(somaAcumulada); // Joga o resultado atual no array
  }

  return arrayResult;
}

console.log(runningSum([1, 2, 3, 4]));
// Saída: [1, 3, 6, 10]
