// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let número1 = parseInt (prompt ("Digite um número"))
let número2 = parseInt (prompt ("Digite um número"))
let número3 = parseInt (prompt ("Digite um número"))

if (número1 < número2 && número2 < número3){
    alert ("Está em Ordem Crescente")
}

else if (número1 > número2 && número2 > número3){
    alert ("Está em ordem Decrescente")
}

else {
    alert ("Não está em ordem")
}
