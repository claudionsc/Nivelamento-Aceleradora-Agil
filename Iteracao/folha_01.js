// Exerc. 1.1

const itera40 = () => {
  contador = 0;
  while (contador <= 40) {
    console.log(contador++);
  }
};

// itera40()

// Exerc. 1.2

const iteraN = (num) => {
  contador = 0;
  while (contador <= num) {
    console.log(contador++);
  }
};

// iteraN(4)

// Exerc. 1.3

const iteraEntreValores = (numA, numB) => {
  if (numB <= numA) {
    console.log("O primeiro valor deve ser menor que o segundo!");
  } else {
    while (numA <= numB) {
      console.log(numA++);
    }
  }
};

// iteraEntreValores(5, 5)

// Exerc. 1.4

const mostrarImpares = (numA, numB) => {
  let incremento;

  while (numA <= numB) {
    incremento = numA++;
    if (incremento % 2 != 0) {
      console.log(incremento);
    }
  }
};

// mostrarImpares(3, 15)

// Exerc. 1.5

const mostrarPares = (numA, numB) => {
  let incremento;
  let contador = 0;

  while (numA <= numB) {
    incremento = numA++;
    if (incremento % 2 == 0) {
      contador++;
      console.log(incremento);
    }
  }
  console.log(`Quantidade de pares: ${contador}`);
};

// mostrarPares(3, 6)

// Exerc. 1.6

const mostrarDivisiveis3 = (numA, numB) => {
  let incremento;

  while (numA <= numB) {
    incremento = numA++;
    if (incremento % 3 == 0) {
      console.log(incremento);
    }
  }
};

// mostrarDivisiveis3(3, 15)

// Exerc. 1.7

const exibirIncrementos = (inicial, incremento, numeroIn) => {
  while (numeroIn >= 0) {
    console.log(inicial);
    inicial += incremento;
    numeroIn--;
  }
};

// exibirIncrementos(2, 4, 7)

// Exerc. 1.8

const mostraMaiorMenorNum = (...num) => {
  let maiorNum = Math.max.apply(null, num);
  let menorNum = Math.min.apply(null, num);
  console.log(maiorNum, menorNum);
};

// mostraMaiorMenorNum(1, 3, 5, 2, 9)

// Exerc. 1.9

const tresMaioresDigitados = (...num) => {
  // let maiorNum;
  // for(let i = 0; i < num.length; i++) {
  //     if(num[i] > num[i+1]) {
  //         maiorNum = num[i]
  //     }
  // }
  // console.log(maiorNum)

  let ordenados = num.sort((a, b) => {
    return a - b;
  });
  //CONTINUA
};
tresMaioresDigitados(3, 4, 1, 8, 2, 9, 5);

// Exerc. 1.10
// TERMINAR!
const lerPares = (...pares) => {
  let contador;
  let par;

  for (let i = 0; i < pares.length; i++) {
    if (pares[i][0] >= pares[i][1]) {
      return;
    }
    contador = pares[i][0];
    par = contador;
    for (let j = 0; j < pares[i].length; j++) {
      while (contador <= pares[i][1]) {
        //   console.log(` ${i} Resultado: ${par} - Contador: ${contador}`);
        contador++;
        par += contador;
      }
    }
    console.log(` ${i} Resultado: ${par}`);
  }
};

lerPares([2, 4], [1, 3], [4, 5], [8, 5]);

