// Exerc. 1.1

const somarValores = (n1, n2) => {
  const somaTotal = n1 + n2;
  if (somaTotal > 50) {
    console.log(somaTotal);
  }
};

// somarValores(30, 21)

// Exerc. 1.2

const calcularValorVenda = (valorUnitario, quantidade) => {
  const valorTotalVenda = quantidade * valorUnitario;
  if (valorTotalVenda > 100) {
    console.log(
      `Valor total da venda: ${valorTotalVenda},00. Bonificação de 10% para o vendedor! `
    );
    return;
  }
  console.log(`Valor total da venda ${valorTotalVenda},00`);
};
// calcularValorVenda(6, 100)

// Exerc. 1.3

const ePar = (numero) => {
  if (numero % 2 === 0) {
    return console.log(`O número ${numero} é par`);
  } else {
    return console.log(`O número ${numero} é ímpar`);
  }
};

// ePar(44)

// Exerc. 1.4

const positivoOuNegativo = (numero) => {
  if (numero < 0) {
    return console.log(`O número ${numero} é negativo`);
  } else if (numero > 0) {
    return console.log(`O número ${numero} é positivo`);
  } else if (numero == 0 || !numero) {
    return console.log(`O número ${numero} é nulo`);
  }
};

// positivoOuNegativo(1)

// Exerc. 1.5

const somaCondicional = (n1, n2) => {
  const soma = n1 + n2;

  if (soma > 20) {
    return console.log(soma + 8);
  } else if (soma <= 20) {
    return console.log(soma - 8);
  }
};

// somaCondicional(10, 11)

// Exerc. 1.6

const raizCondicional = (numero) => {
  if (numero >= 0) {
    console.log(Math.sqrt(numero));
  } else {
    console.log(numero ** 2);
  }
};

// raizCondicional(-3)

// Exerc. 1.7

const eMultiploDe3 = (numero) => {
  numero % 3 == 0
    ? console.log(`${numero} é multiplo de 3`)
    : console.log(`${numero} não é multiplo de 3`);
};

// eMultiploDe3(10)

// Exerc. 1.8

const eDivisivel = (a, b) => {
  a % b == 0
    ? console.log(`${a} é divisível por ${b}.`)
    : console.log(`${a} não é divisível por ${b}.`);
};

// eDivisivel(8, 7)

// Exerc. 1.9

const retornarMaiorNumero = (a, b) => {
  a > b
    ? console.log(`${a} é o maior e ${b} é o menor número.`)
    : console.log(`${b} é o maior e ${a} é o menor número.`);
};

// retornarMaiorNumero(7, 4)

// Exerc. 1.10

const avaliarAutorizacaoEmprestimo = (salarioBruto, valorPrestacao) => {
  const porcentagemSalario = (salarioBruto * 30) / 100;
  valorPrestacao <= porcentagemSalario
    ? console.log("Empréstimo permitido.")
    : console.log("Empréstimo não permitido.");
};

// avaliarAutorizacaoEmprestimo(100, 30)

// Exerc. 1.11

const qualMaior = (a, b, c, d) => {
  const arr = [a, b, c, d];

  return console.log(
    `${Math.max.apply(null, arr)} é o maior número e ${Math.min.apply(
      null,
      arr
    )} é o menor número`
  );
};

// qualMaior(3, 5, 1, 9)

// Exerc. 1.12

const menorParaMaior = (a, b, c) => {
  const arr = [a, b, c];

  return console.log(arr.sort(function (a, b) {return a - b;}).join(" "));
};

// menorParaMaior(49, 2, 9);

// Exerc. 1.13

const maiorParaMenor = (a, b, c) => {
    const arr = [a, b, c];
    return console.log(arr.sort(function (a, b) {return b - a;}).join(" "));
};

// maiorParaMenor(7, 20, 12)

// Exerc. 1.14

const verificaDivisor = (num) => {
    let naoDivisivel = true
    const arr = [2, 5, 10]

    for(let i = 0; i <arr.length; i++){
        if(num % arr[i] === 0){
            console.log(`O número ${num} é divisível por ${arr[i]}`)
            naoDivisivel = false
        }
    }
    
    if(naoDivisivel) {
        console.log(`O número ${num} não é divisível por 2, 5 ou 10.`)
    }
}

// verificaDivisor(10)

// Exerc. 1.15
const numEstaNoAlcance = (num) => {
    num > 20 && num < 90 ? console.log(`O número ${num} está entre 21 e 89.`) : 
        console.log(`O número ${num} não está entre 21 e 89.`)
}

// numEstaNoAlcance(27)

// Exerc. 1.15

const verificaNumeros = num => {

    const arrNums = [5, 200, 400]
    let naoAtende = true
    let fraseIgual = `O número não é igual a 5, 200 ou 400 e`
    let fraseEntre = `não está entre 500 e 1000`
    let fraseFinal

    for(let i = 0; i < arrNums.length; i++){
        if(num === arrNums[i]){
            fraseIgual = `O número é igual a ${arrNums[i]} e`
            naoAtende = false
        } 
    }
    if(num >= 500 && num <= 1000){
        fraseEntre = `está entre 500 e 1000`
        naoAtende = false
    } 

    if(naoAtende){
        fraseFinal = `O número não atende aos critérios`
    } else {
        fraseFinal = `${fraseIgual} ${fraseEntre}`
    }
    return console.log(fraseFinal)
}

verificaNumeros(1001)