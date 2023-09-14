// Exerc. 1.1

const somarValores = (n1, n2) => {
    const somaTotal = n1 + n2
    if(somaTotal > 50) {
        console.log(somaTotal)
    }
}

// somarValores(30, 21)

const calcularValorVenda = (valorUnitario, quantidade) => {
    const valorTotalVenda = quantidade * valorUnitario
    if(valorTotalVenda > 100) {
        console.log(`Valor total da venda: ${valorTotalVenda},00. Bonificação de 10% para o vendedor! `)
        return
    }
    console.log(`Valor total da venda ${valorTotalVenda},00`)
}
// calcularValorVenda(6, 100)
