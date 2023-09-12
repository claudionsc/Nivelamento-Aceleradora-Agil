const pokemon = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)";
let arrayModified = pokemon.toLowerCase().split(' ');
let newArray = [];
let caracteres = ["(", ")", "-", ","];
let arr = removeCaractere(caracteres);

function removeCaractere(caracteres)  {
  for (let i = 0; i < arrayModified.length; i++) {
    for (let j = 0; j < caracteres.length; j++){
      if(arrayModified[i].includes(caracteres[j])) {
        arrayModified[i] = arrayModified[i].replace(caracteres[j], "");
      } 
    }
    if(arrayModified[i] !== ""){
      newArray.push(arrayModified[i].trim())
    }
  }
  return newArray;
}

const capitalize = (element, i) => { return element[i].toUpperCase() + element.slice(1)};

const pokemonFeat = {
    name: capitalize(arr[0], 0),
    lv: arr[1], 
    type: arr[2].toUpperCase(),
    ability: arr[7],
    attacks: [capitalize(arr[3], 0), `${capitalize(arr[4], 0)} ${arr[5]}`, capitalize(arr[6], 0)],
    places: [arr[8], arr[10], arr[9]]
}

let text = `
             Name: ${pokemonFeat.name}
             Lv: ${pokemonFeat.lv} - Type: ${pokemonFeat.type}
             Ability: ${pokemonFeat.ability}
             Attacks:
                - ${pokemonFeat.attacks[0]},
                - ${pokemonFeat.attacks[1]}
                - ${pokemonFeat.attacks[2]}

            Places:
                - ${pokemonFeat.places[0]}
                - ${pokemonFeat.places[1]}
                - ${pokemonFeat.places[2]}`;

console.log(text);

