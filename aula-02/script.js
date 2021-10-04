let preco = "49.99"
//Criando Variável preço

console.log(preco)
//imprimindo no console o valor de preço
console.log(typeof(preco))

Number(preco)
//Função Number() transforma um número dentro de string em tipo numérico
console.log(typeof(preco))
//Testando para ver se a função Number() realiza a conversão global.

console.log(Number(preco))
console.log(typeof(Number(preco)))

let preconumber = parseFloat(preco)
//Criando variável preconumber que recebe a função parseFloat() para transformar a var preco em um número de ponto flutuante.

console.log(preconumber)
console.log(typeof(preconumber))

console.log(String(preconumber))
//Função String() transforma o valor da variável em tipo string
console.log(typeof(String(preconumber)))