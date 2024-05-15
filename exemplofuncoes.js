
function saudacao(){

    let nomePessoa = prompt ("Digite seu nome: ")
    
    let horaAtual = new Date().getHours()
    
    if (horaAtual > 6 && horaAtual > 13) {
        window.alert ("Bom dia " + nomePessoa)
    } else if (horaAtual >= 13 && horaAtual < 18){
        window.alert ("Boa Tarde " + nomePessoa)
    } else {
        window.alert ("Boa noite " + nomePessoa)
    }

}

// saudacao()


function somar(num1, num2, num3){

    // parseInt (prompt("Digite o primeiro numero"))
    // parseInt (prompt("Digite o Segundo numero"))
    // parseInt (prompt("Digite o Terceiro numero"))

    let soma = num1 + num2 + num3
    
    return soma
}

// let resultado = somar (5, 16, 19)//40

// console.log (resultado)


let professor = {
    nome: "Thiago",
    sobrenome: "Nascimento",
    idade: 25
}

professor.nome = prompt ("Digite o nome")
professor.sobrenome = prompt ("Digite o sobrenome")
professor.idade = prompt ("Digite a idade")

console.log(professor)