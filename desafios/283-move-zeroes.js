function moveZeroes(nums) {
    let posicao = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[posicao] = nums[i]
            posicao++
        }
    }

    // preenche o restante com zeros
    for (let i = posicao; i < nums.length; i++) {
        nums[i] = 0
    }
}