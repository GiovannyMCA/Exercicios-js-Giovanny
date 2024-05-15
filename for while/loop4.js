// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let num = parseInt (prompt ("Digite um numero  para ver a tabuada"));

if (!isNaN(num)){

    for (let cont = 1; cont <= 10; cont++){
        console.log (num + " X " + cont + " = " + (num*cont));
    }
}else {
    console.log ("Invalido, isso não é um número digite um número")
}

