function soma(numero) {
    return console.log(numero + 1)
}

let button = document.getElementById("button")

console.log(button)
//Imprimi toda a tag HTML com esse id
console.log(button.innerHTML)
//Imprimi o valor dentro da tag HTML com esse id
button.addEventListener('click', soma(1))
//O método addEventListener pode requerir que uma função seja executada ao realizar uma ação com o objeto.
//Dessa forma a ação será executada uma vez involuntariamente.

button.addEventListener('click', function () {
    soma(1)
})
//Dessa forma a função soma só será executada quando o objeto sofrer uma ação.

button.addEventListener('click', () => {
    soma(1)
})
