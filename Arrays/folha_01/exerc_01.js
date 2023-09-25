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

verficarNotas()