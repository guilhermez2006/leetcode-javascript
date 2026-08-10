function singleNumber(nums) {
  let gaveta = {};

  for (let i = 0; i < nums.length; i++) {
    let numero = nums[i];

    if (gaveta[numero] !== undefined) {
      delete gaveta[numero];
    } else {
      gaveta[numero] = true;
    }
  }

  // Object.keys pega a chave que sobrou como texto, e o Number() converte ela de volta para número.
  return Number(Object.keys(gaveta)[0]);
}
