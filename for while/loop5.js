// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let n1 = 0
let n2 = 1
let n3 = 0

let fibonacci = ""

fibonacci += n1 + n2

for (let n = 1; n <= 10;n++){
    n3 = n1 + n2
    fibonacci += "  " + n3
    n1 = n2
    n2 = n3
}
console.log(fibonacci)
