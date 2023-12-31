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
  let ordenados = num.sort((a, b) => {
    return b - a;
  });
  console.log(ordenados[0], ordenados[1], ordenados[2]);
};
// tresMaioresDigitados(3, 4, 1, 8, 2, 9, 5)

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
      while (contador < pares[i][1]) {
        //   console.log(` ${i} Resultado: ${par} - Contador: ${contador}`);
        contador++;
        par += contador;
      }
    }
    console.log(` ${i} Resultado: ${par}`);
  }
};

// lerPares([2, 4], [1, 3], [4, 60], [6, 6], [8, 5]);

// Exerc. 1.11

const contaNumeros = (...num) => {
  let qtdadeNum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] == -1) {
      break;
    }
    qtdadeNum++;
  }
  console.log(qtdadeNum);
};
// contaNumeros(2, 4, 7, 7, 4, 3, -1, 4, 7, 9)

// Exerc. 1.12

const contaNumerosESoma = (...num) => {
  let somaNumeros = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] == -1) {
      break;
    } else {
      somaNumeros.push(num[i]);
    }
  }
  qtdadeNum = somaNumeros.reduce((acum, valor) => {
    return acum + valor;
  });
  console.log(qtdadeNum);
};
// contaNumerosESoma(2, 4, 7, 7, 4, 3, -1, 4, 7, 9)

// Exerc. 1.13

const retornarParesImpares = (...num) => {
  let numSelecionados = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] == -1) {
      break;
    } else {
      numSelecionados.push(num[i]);
    }
  }

  let impares = numSelecionados.filter((valor) => {
    return valor % 2 == 0;
  });
  let pares = numSelecionados.filter((valor) => {
    return valor % 2 != 0;
  });

  console.log(impares, pares);
};
// retornarParesImpares(2, 4, 7, 7, 4, 3, -1, 4, 7, 9)

// Exerc. 1.14
const retornarMultiplos = (...num) => {
  let numSelecionados = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] == -1) {
      break;
    } else {
      numSelecionados.push(num[i]);
    }
  }

  let a = numSelecionados.filter((valor) => {
    if (valor % 2 === 0 && valor % 5 === 0) {
      return valor;
    }
  });

  let b = numSelecionados.filter((valor) => {
    if (valor % 2 === 0 && valor % 3 === 0) {
      return valor;
    }
  });

  console.log(`${a.length}, ${b.length}`);
};
// retornarMultiplos(10, 12, 1, 7, 30, 18, -1, 4, 40, 9)

// Exerc. 1.15

const lerNumeros = (...num) => {
  let pares = 0;
  let impares = 0;
  let mediaPares = 0;
  let mediaGeral = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === 0) {
      break;
    } else {
      if (num[i] % 2 == 0) {
        pares++;
        mediaPares = (mediaPares + num[i]) / pares;
      }
      if (num[i] % 2 !== 0) {
        impares++;
      }
      mediaGeral += num[i];
    }
  }
  mediaGeral /= num.length;

  console.log(`
    Quantidade de pares: ${pares}
    Quantidade de ímpares: ${impares}
    Média de números pares: ${mediaPares}
    Média geral: ${mediaGeral}
    `);
};

// lerNumeros(2, 3, 4, 12, 5, 8, 3, 5, 0, 1)

// Exerc. 1.16 PULADA pois não foi possível entender o enunciado

// Exerc. 1.17

const lerNome = (...dados) => {
  let qtdadeAlunos = 0;
  for (let i = 0; i < dados.length; i += 2) {
    if (dados[i] === "fim") {
      break;
    }
    console.log(`Nome: ${dados[i]}, média: ${dados[i + 1]}`);
    qtdadeAlunos++;
  }
  console.log(`Quantidade de alunos: ${qtdadeAlunos}`);
};
// lerNome("Beto", 7, "Carol", 8, "Carina", 10, "fim", 10)

// Exerc. 1.18

const convertePolegada = () => {
  const polegada = 2.54;
  for (i = 1; i <= 20; i++) {
    console.log(`${i} polegada(s) em centímetros é ${i * polegada}`);
  }
};

// convertePolegada()

// Exerc. 1.19

const tabuada = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

// tabuada(72)

// Exerc. 1.20

const quadradosPerfeitos = (...num) => {
  let contador = 0;
  let sqrt;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === 0) {
      break;
    }

    sqrt = Math.sqrt(num[i]);

    if (Number.isInteger(sqrt)) {
      contador++;
    }
  }
  console.log(`Foram lido(s) ${contador} quadrado(s) perfeito(s)`);
};

// quadradosPerfeitos(81, 25, 100, 0, 9)

// Exerc. 1.21

const ePrimo = (number) => {
  if (number <= 1) {
    return console.log(`${number} não é primo.`);
  }

  if (number <= 3) {
    return console.log(`${number} é primo.`);
  }

  // Verifica divisibilidade por 2 ou 3
  if (number % 2 === 0 || number % 3 === 0) {
    return console.log(`${number} não é primo.`);
  }

  // Verifica divisibilidade por outros números ímpares
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return console.log(`${number} não é primo.`);
    }
  }
  return console.log(`${number} é primo.`);
};

// ePrimo(2)

// Exerc. 1.22

const quociente = (dividendo, divisor) => {
  let dividendoAlterado = dividendo;
  let contador = 0;
  while (dividendoAlterado > 0) {
    dividendoAlterado -= divisor;
    contador++;
  }
  console.log(`O quociente de ${dividendo} é ${contador}`);
};

// quociente(61, 5)

// Exerc. 1.23

const raizQuadrada = (num) => {
  let contador = 0;
  let numero = num;
  for (let i = 1; i <= numero; i++) {
    if (i % 2 != 0) {
      numero -= i;
      contador++;
    }
  }
  console.log(`A raiz quadrada de ${num} é ${contador}.`);
};

// raizQuadrada(225)

// Exerc. 1.24

const contarNegativos = () => {
  let a = [-1, -2, 3, -4, -5];
  let contador = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      contador++;
    }
  }

  console.log(`São ${contador} números negativos`);
};

// contarNegativos()

// Exerc. 1.25

const calcularSalarios = (...funcionarios) => {
  let valorHora = 26.9;
  let salarioBruto;
  let salarioLiquido;
  let masculinoS = [];
  let femininoS = [];

  for (let i = 0; i < funcionarios.length; i++) {
    salarioBruto = funcionarios[i][2] * valorHora;

    if (funcionarios[i][0] === -11) {
      break;
    } else if (funcionarios[i][1] === "M") {
      salarioLiquido = salarioBruto - (salarioBruto * 10) / 100;
      masculinoS.push(salarioLiquido);
    } else if (funcionarios[i][1] === "F") {
      salarioLiquido = salarioBruto - (salarioBruto * 6) / 100;
      femininoS.push(salarioLiquido);
    }
    console.log(`
      O salário bruto do funcionário de código ${funcionarios[i][0]}, 
      gênero ${funcionarios[i][1]} e com ${
      funcionarios[i][2]
    } horas trabalhadas é: R$ ${salarioBruto.toLocaleString()}.
      O salário líquido resultou em R$ ${salarioLiquido.toLocaleString()}`);
  }

  let mediaMasculina =
    masculinoS.reduce((acumulador, valor) => {
      return acumulador + valor;
    }) / masculinoS.length;
  let mediaFeminina =
    femininoS.reduce((acumulador, valor) => {
      return acumulador + valor;
    }) / femininoS.length;
  console.log(`
    A média do salário líquido feminino foi de R$ ${mediaFeminina.toLocaleString()} 
    e do masculino foi de ${mediaMasculina.toLocaleString()}`);
};

// calcularSalarios([1, 'M', 220], [2, 'M', 205], [3, 'F', 230], [4, 'F', 215], [-11, 'M', 0])

// Exerc. 1.26

const pesquisa = (...dados) => {
  let salario = [];
  let numFilhos = [];

  for (let i = 0; i < dados.length; i++) {
    if (dados[i][0] < 0) {
      break;
    }

    salario.push(dados[i][0]);
    numFilhos.push(dados[i][1]);
  }

  let salarioMedia =
    salario.reduce((acumulador, valor) => {
      return acumulador + valor;
    }) / salario.length;
  let filhosMedia =
    numFilhos.reduce((acumulador, valor) => {
      return acumulador + valor;
    }) / numFilhos.length;
  let maiorSalario = salario.sort().pop();
    console.log(`
      A média dos salários foi de R$ ${salarioMedia.toLocaleString()}
      e do número de filhos foi de ${filhosMedia}.
      O maior salário foi de ${maiorSalario}
      `)
};

// pesquisa([2000, 1], [2500, 1], [3200, 2], [4500, 3], [-1100, 0], [5000, 4]);

// Exerc. 1.27

const calculaAltura = () => {
  let alturaChico = 150
  let alturaZe = 110
  let anos = 0

  while(alturaChico > alturaZe) {
    alturaChico += 2
    alturaZe += 3
    anos++
  }
  console.log(anos)
}

// calculaAltura()