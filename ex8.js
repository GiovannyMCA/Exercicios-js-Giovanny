/*
Exercício 8: Cálculo de IMC

Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura).
Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o usuário se encontra, de acordo com a tabela a seguir:

IMC menor que 18.5: Abaixo do peso
IMC de 18.5 a 24.9: Peso normal
IMC de 25.0 a 29.9: Sobrepeso
IMC de 30.0 a 34.9: Obesidade grau 1
IMC de 35.0 a 39.9: Obesidade grau 2
IMC maior ou igual a 40.0: Obesidade grau 3
*/


let altura = parseFloat (prompt ("Qual sua altura??(Metros)"))
let peso = parseFloat (prompt ("Qual seu peso?(KG)"))

let IMC = peso/(altura*altura)

alert ("Seu Indice de Massa Comporal é " + IMC)

if (IMC < 18.5){
    alert ("Você está abaixo do peso")
}
if (IMC > 18.6 && IMC < 24.9){
    alert ("Você está com Peso normal!!")
}
if (IMC > 25 && IMC < 29.9){
    alert ("Você está com Sobrepeso")
}
if (IMC > 30 && IMC < 34.9){
    alert ("Você está com com Obesidade grau 1 , Tome Cuidado")
}
if (IMC > 35 && IMC < 39.9){
    alert ("Você está com com Obesidade grau 2 , Tome Cuidado")
}
if (IMC > 39.99){
    alert ("Você está com com Obesidade grau 3 , Tome MUITO Cuidado!!")
}