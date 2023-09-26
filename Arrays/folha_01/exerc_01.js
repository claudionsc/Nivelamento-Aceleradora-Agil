// Exerc.01

const lerVetor = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let ordenado = arr.sort((a, b) => {
    return b - a;
  });

  console.log(ordenado);
};

// lerVetor()

// Exerc.02

const lerVetor02 = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  const map = arr.map((i) => (i % 2 === 0 ? i * 2 : i * 3));

  console.log(map);
};

// lerVetor02();

// Exerc.03

const lerVetor03 = () => {
  const arr = [1, 2, -3, 4, -5, 6, -7, 8];
  let positivos = [];
  let negativos = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativos.push(arr[i]);
    } else {
      positivos.push(arr[i]);
    }
  }

  if (positivos.length < 8) positivos.length = 8;

  if (negativos.length < 8) negativos.length = 8;

  console.log(positivos, negativos);
};

// lerVetor03()

// Exerc.04

const vetorReverso = () => {
  let vetorReverso = vetor.reverse();
  console.log(vetorReverso);
};

let vetor = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

// vetorReverso(vetor)

// Exerc.05
const vetorIntercalado = (vetorA, vetorB) => {
  debugger;
  let arrayIntercalado = [];

  for (let i = 0; i < vetorA.length; i++) {
    arrayIntercalado.push(vetorA[i]);
    for (let j = 0; j < vetorB.length; j++) {
      if (i == j) {
        arrayIntercalado.push(vetorB[j]);
      }
    }
  }
  console.log(arrayIntercalado);
};

let vetorA = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let vetorB = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// vetorIntercalado(vetorA, vetorB)

// Exerc.06

const verficarNotas = () => {
  const notas = [
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4,
    2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9,
    4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4,
    5.5, 5.6, 5.7, 5.8, 5.9
  ]

  const media = 3
  const mediaAcima = media + (media / 100) * 10
  const mediaAbaixo = media - (media / 100) * 10
  let contador = 0

  for(let i = 0; i < notas.length; i++){
    if(notas[i] >= mediaAbaixo && notas[i] <= mediaAcima){
      contador++
    }
  }
  console.log(`São ${contador} notas que atendem às condições exigidas`)
}

// verficarNotas()

// Exerc.07

const gerarRelatorio = (codProduto, qtdadeVendida, valorObjeto) => {
  let formataBRL = {style: 'currency', currency: 'BRL'}
  let qtdadeMaisVendida = 0
  let valorMaisVendido
  let codMaisVendido

  for(let i = 0; i < valorObjeto.length; i++) {
    console.log(`
    Item de código: ${codProduto[i]}; 
    Quantidade: ${qtdadeVendida[i]}; 
    Valor unitário: ${valorObjeto[i].toLocaleString('pt-BR', formataBRL)}; 
    Valor total: ${(qtdadeVendida[i] * valorObjeto[i]).toLocaleString('pt-BR', formataBRL)};
    O valor da comissão será de: ${((qtdadeVendida[i] * valorObjeto[i]) / 100 * 5)
      .toLocaleString('pt-BR', formataBRL)}`)

    if(qtdadeVendida[i] > qtdadeMaisVendida) {
      qtdadeMaisVendida = qtdadeVendida[i]
      valorMaisVendido = valorObjeto[i]
      codMaisVendido = codProduto[i]
    }
  }
  console.log(`
  O código do produto mais vendido é: ${codMaisVendido}, 
  com valor de ${valorMaisVendido.toLocaleString('pt-BR', formataBRL)}.`)
}

// gerarRelatorio([1, 12, 8, 3], [12, 58, 44, 27], [2, 6, 8, 4])

// Exerc.08 

const vendas = () => {
  let nomeProduto = ['Arroz', 'Feijão', 'Macarrão', 'Carne', 'Queijo', 'Leite', 'Frutas', 'Verduras', 'Higiene', 'Limpeza',
  'Combustível', 'Transporte', 'Aluguel', 'Contas', 'Educação', 'Saúde', 'Lazer', 'Outros']

  let custoProduto = [20, 15, 5, 30, 28, 10, 15, 20, 10, 15,
    50, 70, 500, 100, 200, 500, 100, 50, 200]

  let valorVendaProduto = [21, 20, 5.4, 32, 29.9, 13, 25, 32, 12, 18,
      57, 78, 559, 260, 240, 600, 110, 75, 240]

  let lucroProduto = 0

  let lucroDez = 0
  let lucroDezTrinta = 0
  let lucroMaiorTrinta = 0

  for(let i = 0; i < custoProduto.length; i++){
    lucroProduto = valorVendaProduto[i] - custoProduto[i]

    if(lucroProduto <= (custoProduto[i] / 100) * 10){
      lucroDez++
    }

    if(lucroProduto > (custoProduto[i] / 100) * 10 && lucroProduto < (custoProduto[i] / 100) * 30){
      lucroDezTrinta++
    }

    if(lucroProduto > (custoProduto[i] / 100) * 30){
      lucroMaiorTrinta++
    }
  }
  console.table({
      'Quantidade de produtos com lucros menores que 10%': lucroDez,
      'Quantidade de produtos com lucros entre 10% e 30%': lucroDezTrinta,
      'Quantidade de produtos com lucros maiores que 30%': lucroMaiorTrinta,
  })
}

vendas()