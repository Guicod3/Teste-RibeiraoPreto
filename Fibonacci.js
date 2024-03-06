let a1 = 0
let a2 = 1
let proximo = 0
let concat = ''
let numberVerify = 100 //Insira o número para  verificar se ele está dentro da sequência de fibonacci

function fibonacci(){ //Vai retornar a sequência fibonacci limitado ao valor que você quer verificar
    while (proximo <= numberVerify){
        proximo = a2
        concat += a1 + ' '
        a2 = a1 + a2
        a1 = proximo
    }
    return concat;
}

function verify(){
    let a = 0
    let b = 1
    let c = a + b

    while (c <= numberVerify){
        if (c == numberVerify || a == numberVerify){
            return 'dentro';
        }
        a = b
        b = c 
        c = a + b
    }
    return 'fora';
}

fibonacci = (fibonacci())
validacao = (verify())

console.log(`A sequência de fibonacci é: ${fibonacci}`)
console.log(`O númrero ${numberVerify} está ${validacao} da sequência fibonacci`)