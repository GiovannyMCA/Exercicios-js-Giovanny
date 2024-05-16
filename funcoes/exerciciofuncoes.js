//Contruir um menu que é possível escolher um exercicio entre os exercicios anteriores, para ser executade
//faça com que o menu repita sua execução até o usuario digitar "Sair"


function exercicioLogin() {

    let username = prompt("Digite seu nome de usuario: ");

    let senha = prompt("Digite a senha: ");


    if (username == "admin" && senha == "senha123") {
        console.log("Login bem sucedido!!");
    } else {
        console.log("Você não tem permissão de acesso")
    }
 
}




function exercicioSemana() {
    let dia = prompt("digite o dia da semana de 1 a 7")

    if (dia == 1) {
        console.log("Hoje é segunda feira")
        alert("Hoje é segunda feira!!")
    }
    else if (dia == 2) {
        console.log("Hoje é Terça feira")
        alert("Hoje é Terca feira!!")
    }
    else if (dia == 3) {
        console.log("Hoje é quarta feira")
        alert("Hoje é Quarta feira!!")
    }
    else if (dia == 4) {
        console.log("Hoje é Quinta feira")
        alert("Hoje é Quinta feira!!")
    }
    else if (dia == 5) {
        console.log("Hoje é Sexta feira")
        alert("Hoje é Sexta feira!!")
    }
    else if (dia == 6) {
        console.log("Hoje é Sabado")
        alert("Hoje é Sabado!!")
    }
    else if (dia == 7) {
        console.log("Hoje é Domingo")
        alert("Hoje é Domingo!!")
    }

    else if (dia > 7) {
        alert("Esse dia Não existe!!!")
    }

}

function exercicioOrdem() {
    let número1 = parseInt(prompt("Digite um número que eu direi se esta em ordem"))
    let número2 = parseInt(prompt("Digite um número que eu direi se esta em ordem"))
    let número3 = parseInt(prompt("Digite um número que eu direi se esta em ordem"))

    if (número1 < número2 && número2 < número3) {
        alert("Está em Ordem Crescente")
    }

    else if (número1 > número2 && número2 > número3) {
        alert("Está em ordem Decrescente")
    }

    else {
        alert("Não está em ordem")
    }

}

function exercicioCompra() {
    let compra = parseFloat(prompt("Digite o valor da compra: "))

    if (compra < 100.01) {
        alert("O valor da sua compra deu " + compra)
    }
    if (compra > 100.01 && compra < 200) {
        alert("O valor da sua compra deu " + (compra - compra * 0.1) + " e teve um desconto de " + (compra * 0.1))
    }
    if (compra > 200) {
        alert("O valor da sua compra deu " + (compra - compra * 0.2) + " e teve um desconto de " + (compra * 0.2))
    }
}

function exercicioTabuada() {
    let num = parseInt(prompt("Digite um numero  para ver a tabuada"));

    if (!isNaN(num)) {

        for (let cont = 1; cont <= 10; cont++) {
            console.log(num + " X " + cont + " = " + (num * cont));
        }
    } else {
        console.log("Invalido, isso não é um número digite um número")
    }

}

function exercicioFibonacci() {
    let n1 = 0
    let n2 = 1
    let n3 = 0

    let fibonacci = ""

    fibonacci += n1 + n2

    for (let n = 1; n <= 10; n++) {
        n3 = n1 + n2
        fibonacci += "  " + n3
        n1 = n2
        n2 = n3
    }
    console.log(fibonacci)

}

function exercicioContagem() {
    let numero = parseInt(prompt("Digite um número para a contagem regressiva:"));

    if (!isNaN(numero) && numero >= 0) {
        console.log(`Contagem regressiva de ${numero} até 0:`);

        while (numero >= 0) {
            console.log(numero);
            numero--;
        }
    } else {
        console.log("Digita um número válido, maior ou igual a 0.");
    }
}


function menu() {

    let opcao;

    while (opcao != "sair") {
        opcao = window.prompt("Menu\ndigite a opcao desejada\n 1- Exercicio Login\n 2- Exercicio Semana\n 3- Exercicio Ordem\n4- Exercicio Compra\n 5- Exercicio Tabuada\n 6 - Exercicio Fibonacci\n 7 - Contagem Regrassiva\n")



        if (opcao == 1) {
            exercicioLogin()
        }

        else if (opcao == 2) {
            exercicioSemana()
        }

        else if (opcao == 3) {
            exercicioOrdem()
        }

        else if (opcao == 4) {
            exercicioCompra()
        }

        else if (opcao == 5) {
            exercicioTabuada()
        }

        else if (opcao == 6) {
            exercicioFibonacci()
        }

        else if (opcao == 7) {
            exercicioContagem()
        }

        else {
        }
    }


}

menu()











