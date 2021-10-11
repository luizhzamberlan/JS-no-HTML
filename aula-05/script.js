function soma(numero) {
    if (typeof numero !== 'number') {
        return console.error('Parâmetro errado, solicito uma número')
    }
    return console.log(numero + 1)
}

let button = document.getElementById("button")

button.addEventListener('click', () => {
    for (let contador = 0; contador < 10; contador++) {
        console.log(contador)
    }
})
