function isPalindrome(x) {
    if (x < 0) return false

    let str = x.toString()
    let invertido = str.split("").reverse().join("")

    return str === invertido
}