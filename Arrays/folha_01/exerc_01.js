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
    let positivos = []
    let negativos = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            negativos.push(arr[i])
            while(negativos.length < 8){
                negativos[i]
            }
        } else {
            positivos.push(arr[i])
            while(positivos.length < 8){
                positivos[i]
            }
        }
    }
  
    console.log(positivos, negativos);
  };
  
  lerVetor03();
