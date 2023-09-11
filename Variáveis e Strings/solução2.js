// string a ser refatorada
const pokemon = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)";

// variável words que armazena num array as palavras separadas da string
const words = pokemon.split(" ");

// array vazio para armazenar apenas as palavras, excluindo caracteres indesejados
let novoArrayPokemon = [];

// iteração pela variável words, verificando em cada índice os caracteres indesejados e os substituindo por um espaço vazio
for (let i = 0; i < words.length; i++) {
  if(words[i] == "-") {
      words[i] = "";
  } else if (words[i].includes(")") || words[i].includes("(") || words[i].includes(",")) {
    words[i] = words[i].replaceAll(")", " ")
    words[i] = words[i].replaceAll("(", " ")
    words[i] = words[i].replaceAll(",", " ")
  } 
  // condicional que verifica e adiciona no novo array o conteúdo dos índices, ignorando os espaços vazios
  if(words[i] !== ""){
    novoArrayPokemon.push(words[i].trim())
  }
}

// funçao criada para tornar a primeira letra da palavra maiúscula
const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

// objeto que armazena os dados do novo array e transforma alguns deles
const obj = {
    "name": novoArrayPokemon[0],
    "lv": novoArrayPokemon[1],
    "type": novoArrayPokemon[2].toUpperCase(),
    "ability": novoArrayPokemon[7].toLowerCase(),
    "attacks": 
      [novoArrayPokemon[3].toLowerCase(), 
       `${novoArrayPokemon[4].toLowerCase()} ${novoArrayPokemon[5]}`, novoArrayPokemon[6].toLowerCase()
      ],
    "places": [novoArrayPokemon[8].toLowerCase(), novoArrayPokemon[10].toLowerCase(), novoArrayPokemon[9].toLowerCase()]
}

// variável que armazena e transforma os dados da maneira que devem ser apresentados
const frase = 
` Name: ${capitalize(obj.name)}
  Lv: ${obj.lv} - Type: ${obj.type}
  Ability: ${obj.ability}
  Attacks:
    - ${capitalize(obj.attacks[0])},
    - ${capitalize(obj.attacks[1])}
    - ${capitalize(obj.attacks[2])}
  
  Places:
    - ${obj.places[0]}
    - ${obj.places[1]}
    - ${obj.places[2]} `

console.log(frase);
