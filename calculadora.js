botoes = document.querySelectorAll("#botao")
resultado = document.querySelector("#resultado")

var operando1 = ""
var operando2 = ""
var operador = ""
var selecionaOperando1 = 1

function ehNumero(string) {
    return (parseFloat(string) == string);
}

function calculaResultado(operador, operando1, operando2) {
    console.log(operador, operando1, operando2)
    operando1 = parseFloat(operando1)
    operando2 = parseFloat(operando2)
    console.log(operador, operando1, operando2)

    switch (operador) {
        case '+':
            return operando1 + operando2

        case '-':
            return operando1 - operando2

        case '/':
            return operando1 / operando2

        case 'x':
            return operando1 * operando2
    }
}

botoes.forEach(element => {
    element.onclick = function() {
        console.log(operador, operando1, operando2)
        if (!ehNumero(element.innerHTML)) {
            if (element.innerHTML == 'Enter') {
                calculo = calculaResultado(operador, operando1, operando2)
                resultado.innerHTML = calculo
                operando1 = "" + calculo
                operando2 = ""
                operador = ""
            } else if (element.innerHTML == 'Delete') {
                string = resultado.innerHTML
                resultado.innerHTML = string.slice(0, string.length - 1);
                selecionaOperando1 = 0
                operador = ""
                operando1 = ""
                operando2 = ""
            } else if (element.innerHTML == 'Clear') {
                resultado.innerHTML = ""
                operando1 = ""
                operando2 = ""
                selecionaOperando1 = 1
            } else {
                resultado.innerHTML += element.innerHTML
                operador = element.innerHTML
                selecionaOperando1 = 0
            }

        } else {
            resultado.innerHTML += element.innerHTML
            if (selecionaOperando1 == 1) {
                operando1 += element.innerHTML
                console.log(operando1)
            } else {
                operando2 += element.innerHTML
            }
        }
    }
})