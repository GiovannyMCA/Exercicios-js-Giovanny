// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da

// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

let dia = prompt ("digite o dia da semana de 1 a 7")

if (dia == 1 ){
    console.log ("Hoje é segunda feira")
    alert ("Hoje é segunda feira!!")
}
else if (dia == 2 ){
    console.log ("Hoje é Terça feira")
    alert ("Hoje é Terca feira!!")
}
else if (dia == 3 ){
    console.log ("Hoje é quarta feira")
    alert ("Hoje é Quarta feira!!")
}
else if (dia == 4 ){
    console.log ("Hoje é Quinta feira")
    alert ("Hoje é Quinta feira!!")
}
else if (dia == 5 ){
    console.log ("Hoje é Sexta feira")
    alert ("Hoje é Sexta feira!!")
}
else if (dia == 6 ){
    console.log ("Hoje é Sabado")
    alert ("Hoje é Sabado!!")
}
else if (dia == 7 ){
    console.log ("Hoje é Domingo")
    alert ("Hoje é Domingo!!")
}

else if (dia > 7){
    alert ("Esse dia Não existe!!!")
}

// Sempre colocar else após um if
// pode ser usado Switch Case, que pode ser melhor
