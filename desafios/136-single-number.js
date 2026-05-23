function singleNumber(nums) {
    for (let i = 0; i < nums.length; i++) {
        // pra cada numero, assume que nao tem par
        let encontrouPar = false

        for (let j = 0; j < nums.length; j++) {
            // evita comparar o numero com ele mesmo
            if (i !== j && nums[i] === nums[j]) {
                encontrouPar = true // achou um igual
                break               // nao precisa continuar
            }
        }

        // so chega aqui apos o loop j terminar
        if (!encontrouPar) {
            return nums[i] // nenhum igual foi encontrado, esse e o solitario
        }
    }
}