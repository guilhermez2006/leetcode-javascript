function reverseString(s) {
    let esquerda = 0;
    let direita = s.length - 1;

    while (esquerda < direita) {
        [s[esquerda], s[direita]] = [s[direita], s[esquerda]];
        
        // Move os ponteiros em direção ao centro
        esquerda++;
        direita--;
    }
}

let texto = ["h", "e", "l", "l", "o"];
reverseString(texto);
console.log(texto); // Saída: ["o", "l", "l", "e", "h"]