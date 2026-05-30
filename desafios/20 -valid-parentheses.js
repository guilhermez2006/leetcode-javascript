function isValid(s) {
    const stack = []; 
    const mapa = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (mapa[char]) {

            const topElement = stack.length === 0 ? '#' : stack.pop();
            
            // Se o que saiu da pilha não for o par correspondente, é falso
            if (topElement !== mapa[char]) {
                return false;
            }
        } else {
            // Se for um aberto ('(', '[', '{'), joga na pilha
            stack.push(char);
        }
    }

    // Se a pilha estiver vazia, tudo foi fechado corretamente
    return stack.length === 0;
}