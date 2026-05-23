let horas = [0, 1, 2, 3, 4]
let target = 2

function verificarFuncionarios(funcionarios, meta) {
    let quantidadeFuncionarios = 0

    for (let i = 0; i < horas.length; i++) {
        if (funcionarios[i] >= meta) {
            quantidadeFuncionarios++;
        }
    }
    return quantidadeFuncionarios;
}

console.log(verificarFuncionarios(horas, target))