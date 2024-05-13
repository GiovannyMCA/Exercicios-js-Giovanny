// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.


let anodeNascimento  = parseInt (prompt ("Digite o ano de nascimento: "))
// let anoAtual = 2024

let anoAtual = new Date() .getFullYear();

let idade = anoAtual - anodeNascimento

if (idade => 18){
    alert ("Você é maior de idade, sua idade é " + idade)
}

else {
    alert ("Você é menor de idade, sua idade é " + idade)
}