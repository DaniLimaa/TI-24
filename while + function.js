//Atividade 1
function tabuada(numero) {
let multiplicador = 1;

    while (multiplicador <= 10) {
         console.log(numero + " x " + multiplicador + " = " + numero * multiplicador);
    multiplicador++;
    }
}
tabuada(5);

console.log()
// //Atividade 2

function somaNumerosAte(maximo) {
    let resultado = 0;
    let numero = 1;

        while (numero <= 100) {
    console.log(numero);
    resultado += numero;
    numero++;
}

    console.log("A soma dos números de 1 ", maximo, "é:", resultado);
}

somaNumerosAte(100);

console.log()
// //Atividade 3

function somasDosDigitos(numero) {
    let resultado = 0;

    while (numero > 0) {
    resultado += numero % 10;
    numero = (numero / 10) | 0;
}

    console.log(`A soma dos dígitos é: ${resultado}`);
}

somasDosDigitos(12345);

console.log()
// //Atividade 4

function fibonacci(quantidade) {
    if (quantidade <= 0) {
        console.log("Quantidade deve ser maior que zero.");
        return;
    }

    let a = 0, b = 1;
    console.log(a);

    if (quantidade > 1) console.log(b);

    while (--quantidade > 1) {
        [a, b] = [b, a + b];
        console.log(b);
    }
}

fibonacci(10);

console.log()
// //Atividade 5

let str = ("Digite uma string:")
let invertedStr = ""
let iniciar = str.length - 1
    while (iniciar >= 0) {
    invertedStr += str[iniciar]
    iniciar--
}
console.log("A string invertida é:", invertedStr)

console.log()
// // Atividade 6

function exibirMenu() {

let opcao;

    opcao = ("Escolha uma opção:\n" +
        "1 - Imprimir resultado da primeira questão\n" +
        "2 - Imprimir resultado da segunda questão\n" +
        "3 - Imprim ir resultado da terceira questão\n" +
        "4 - Imprimir resultado da quarta questão\n" +
        "5 - Imprimir resultado da quinta questão\n" +
        "6 - Fechar o menu"
    )

        if (opcao === '1') {
            alert("Resultado da primeira questão")
        }else if (opcao === '2') {
            alert("Resultado da segunda questão")
        }else if (opcao === '3') {
            alert("Resultado da terceira questão")
        }else if (opcao === '4') {
            alert("Resultado da quarta questão")
        } else if (opcao === '5') {
            alert("Resultado da quinta questão")
        } else if (opcao === '6') {
            alert("Fechando o menu...")
        } else {
            alert("Opção inválida, tente novamente.")
    }
}
