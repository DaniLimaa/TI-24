// 1. Escreva um programa que receba duas variáveis de números inteiros e realize as quatro operações básicas (adição, subtração, multiplicação e divisão). Mostre os resultados
// 2. Crie um programa que converta uma temperatura de Fahrenheit  para Celsius. A fórmula de conversão é: C = (F - 32 ) / 1,8
// 3. Crie um programa que converta uma temperatura de Celsius para Fahrenheit. A fórmula de conversão é: F = C x (9/5) + 32
// 4. Faça um programa que converta metros para centímetros. A variavel deve receber o valor em metros
// 5. Crie um programa que calcule o preço final de um produto após um desconto de 10%, a variável deve receber o valor total da venda

var numero_escohido = 8
var numero_escolhido2 = 54

console.log("8 + 54 =", numero_escolhido2 + numero_escohido)
console.log("8 - 54 =", numero_escohido - numero_escolhido2)
console.log("8 x 54 =", numero_escohido * numero_escolhido2)
console.log("8 / 54 =",numero_escohido / numero_escolhido2)

console.log("---------------------------------------------")

var celsius = ((90 - 32) / 1.8)
var celsiusRedondo = parseInt(celsius)


console.log(celsiusRedondo, "graus celsius")

console.log("---------------------------------------------")

var fahrenheit = (32 * (9/5) + 32)

console.log(fahrenheit, "fahrenheit")

console.log("----------------------------------------------")

var metros = 7
var centimetros = 100

console.log("7 metros são",metros * centimetros, "cetimetros")

console.log("----------------------------------------------")

var valorOriginal = 1250
var valorDoDesconto = valorOriginal * (10 / 100)
var valorFinal = (valorOriginal - valorDoDesconto)


console.log("preço original era 1250 e",valorFinal,"preço com desconto")