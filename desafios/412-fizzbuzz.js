function fizzBuzz(n) {
  let arrayResultado = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arrayResultado.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arrayResultado.push("Fizz");
    } else if (i % 5 === 0) {
      arrayResultado.push("Buzz");
    } else {
      arrayResultado.push(i.toString());
    }
  }

  return arrayResultado;
}

console.log(fizzBuzz(15));
