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
  const arr = [1, 2, -3, 4, -5, 6, -7, 8]
  let positivos = []
  let negativos = []

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      negativos.push(arr[i])
    } 
    else {
      positivos.push(arr[i])
    }
  }

  if(positivos.length < 8) positivos.length = 8

  if(negativos.length < 8) negativos.length = 8

  console.log(positivos, negativos)
};

// lerVetor03()

// Exerc.04

const vetorReverso = () => {
  let vetorReverso = vetor.reverse()
  console.log(vetorReverso)
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// vetorReverso(vetor)

// Exerc.05
const vetorIntercalado = (vetorA, vetorB) => {
  debugger
  let arrayIntercalado = []

  for(let i = 0; i < vetorA.length; i++) {
    arrayIntercalado.push(vetorA[i])
    for(let j = 0; j < vetorB.length; j++) {
      if(i == j) {
        arrayIntercalado.push(vetorB[j])
      }
    }
  }
  console.log(arrayIntercalado)
}

let vetorA = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let vetorB = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// vetorIntercalado(vetorA, vetorB)

// Exerc.06









