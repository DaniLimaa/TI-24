// 1-Escreva um programa que verifique se um número fornecido pelo usuário é positivo, negativo ou zero.

numero = 0
if (numero > 0){
    console.log('positivo')
} 
else if(numero <= -1){
    console.log('negativo')
}
else if (numero == 0){
    console.log('Número é zero')
}

console.log()

//2-Crie um programa que leia a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.

numero = 16
if (numero >= 18){
    console.log('É maior de idade')
}
else if(numero <= 17){
    console.log('É menor de idade')
}

console.log()

//3-Escreva um programa que verifique se um número fornecido pelo usuário é par ou ímpar

numero = 90
var total = (numero)
if (numero%2 == 0){
    console.log("Par")
} 
else{
    console.log("Impar")
}
console.log(total)

console.log()

//4-Crie um programa que leia três números e determine qual é o maior.

numero1 = 4
numero2 = 8
numero3 = 16

if (numero1 > numero2) {
    console.log('O numero 1 é maior que o numero 2');

    if(numero1 > numero3){
        console.log('O numero 1 é maior que o numero 3');
        console.log('O MAIOR numero é do numero 1')
    }
}


if (numero2 > numero1) {
    console.log('O numero 2 é maior que o numero 1');

    if(numero2 > numero3){
        console.log('O numero 2 é maior que o numero 3');
        console.log('O MAIOR numero é do numero 2')
    }
}


if (numero3 > numero1) {
    console.log('O numero 3 é maior que o numero 1');

    if(numero3 > numero2){
        console.log('O numero 3 é maior que o numero 2');
        console.log('O MAIOR numero é do numero 3')
    }
}

console.log()

//5-Escreva um programa que verifique se uma letra fornecida pelo usuário é uma vogal ou uma consoante.

letraUsuario = 'A'

if (letraUsuario.toLowerCase() == 'a'){
    console.log('VOGAL');
} else if (letraUsuario.toLowerCase() == 'e'){
    console.log('VOGAL');
} else if (letraUsuario.toLowerCase() == 'i'){
    console.log('VOGAL');
} else if (letraUsuario.toLowerCase() == 'o'){
    console.log('VOGAL');
} else if (letraUsuario.toLowerCase() == 'u'){
    console.log('VOGAL');
} else {
    console.log('CONSOANTE')
}

console.log()

//6-Faça um programa que leia a nota de um aluno e informe se ele esta aprovado(nota maior ou igual a 7), em recuperaçao(nota entre 5 e 7) ou reprovado(menor que 5)

nota = 4

if (nota >= 7){
    console.log('Está aprovado')
}
else if (nota >= 5 && nota < 7){
    console.log('Está recupeção')
}
else if (nota >= 0 && nota <= 4){
    console.log('Esta reprovdo')
}

console.log()

//7-escreva um programa que leia dois numeros e uma operaçao(adiçao, sobtraçao, multiplicaçao e divisao) e realize a operação entre os dois numeros

numero_escohido1 = 12
numero_escolhido2 = 54
operacao = '*'

if (operacao == '+'){
    console.log('O valor da soma é')
    console.log(numero_escohido1 + numero_escolhido2)
 }

else if (operacao == '-'){
    console.log('o valor da subtracao')
    console.log(numero_escohido1 - numero_escolhido2)
}
else if (operacao == '/'){
    console.log('o valor da divisao')
    console.log(numero_escohido1 / numero_escolhido2)
}
else if (operacao == '*'){
    console.log('o valor da multiplicacao')
    console.log(numero_escohido1 * numero_escolhido2)
}

//8-crie um programa que determina se o ano é bissexto

ano = 2024
function bissexto (ano){
    return (ano % 4 == 0 && (ano %100 !== 0 || ano % 400 === 0) )
}
if (bissexto (ano)){
    console.log (ano + ' é um ano bissexto')
}
else {
    console.log(ano, 'nao é bissexto')
}

console.log()

//10- escreva um programa que leia o peso e a altura de uma pessoa e calcule eu IMC, informando se esta abaixo do peso, no ppeso normal, acima do peso ou obeso

peso = 150
altura = 1.80
imc = peso / (altura * altura)

if (imc <= 18.5){
    console.log(peso / (altura * altura))
    console.log("abaixo do peso")
} 
else if(imc > 18.5 && imc <= 25){
    console.log(peso / (altura * altura))
    console.log("peso normal")
} 
else if(imc > 25){
    console.log(peso / (altura * altura))
    console.log("acima do peso")
}

console.log()

//11- escreva um programa que leia um mes do ano e informe quantos dias ele tem

mes = 'fevereiro'

if (mes == 'abril'|| mes == 'junho'|| mes == 'setembro'|| mes == 'novembro'){
    console.log ('o mes de ' + mes, 'tem 30 dias')
}
else if (mes == 'janeiro'|| mes == 'marco'|| mes == 'maio'|| mes == 'julho'|| mes == 'agosto'|| mes == 'outubro'|| mes == 'dezembro'){
    console.log (' o mes de ' + mes, 'tem 31 dias')
}
else if (mes == 'fevereiro'){
    console.log('o mes de ' + mes, 'tem 28 dias')
}

console.log()

//12- Faça um programa que verifique se um trianguço é equilatero, isoceles ou escaleno com base nos comprimentos de seus lados
