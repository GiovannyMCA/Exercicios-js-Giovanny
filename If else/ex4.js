// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let nota1 = parseFloat (prompt ("Digite a primeira Nota do aluno"))
let nota2 = parseFloat (prompt ("Digite a segunda Nota do aluno"))
let nota3 = parseFloat (prompt ("Digite a terceira Nota do aluno"))
let nota4 = parseFloat (prompt ("Digite a quarta Nota do aluno"))

let média = nota1 + nota2 + nota3 + nota4

let médiaFinal = média/4

alert ("Sua média é " + médiaFinal.toFixed(2))

if (médiaFinal > 6.9){
    alert ("Você Passou!!! APROVADO")
}
else if (médiaFinal < 7 && médiaFinal >= 5){
    alert ("Recuperação")
}

else {
    alert ("Você é fraco lhe falta nota")
}