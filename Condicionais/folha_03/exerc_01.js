// Exerc. 1.1

const somarValores = (n1, n2) => {
    const somaTotal = n1 + n2
    if(somaTotal > 50) {
        console.log(somaTotal)
    }
}

// somarValores(30, 21)

// Exerc. 1.2

const calcularValorVenda = (valorUnitario, quantidade) => {
    const valorTotalVenda = quantidade * valorUnitario
    if(valorTotalVenda > 100) {
        console.log(`Valor total da venda: ${valorTotalVenda},00. Bonificação de 10% para o vendedor! `)
        return
    }
    console.log(`Valor total da venda ${valorTotalVenda},00`)
}
// calcularValorVenda(6, 100)

// Exerc. 1.3

const ePar = numero => {
    if(numero % 2 === 0){
        return console.log(`O número ${numero} é par`)
    } else {
        return console.log(`O número ${numero} é ímpar`)
    }
}

// ePar(44)

// Exerc. 1.4

const positivoOuNegativo = numero => {
    if(numero < 0){
        return console.log(`O número ${numero} é negativo`)
    } else if(numero > 0){
        return console.log(`O número ${numero} é positivo`)
    } else if(numero == 0 || !numero){
        return console.log(`O número ${numero} é nulo`)
    }
}

// positivoOuNegativo(1)

// Exerc. 1.5

const somaCondicional = (n1, n2) => {
    const soma = n1 + n2

    if(soma > 20){
        return console.log(soma + 8)
    } else if(soma <= 20){
        return console.log(soma - 8)
    }
}

// somaCondicional(10, 11)

// Exerc. 1.6

const raizCondicional = numero => {

    if(numero >= 0){
         console.log(Math.sqrt(numero))
    } else {
         console.log(numero**2)
    }
}

// raizCondicional(-3)
