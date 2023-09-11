const pokemon = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)"
// let lowerCase = pokemon.toLowerCase();
// let removeParentesesLeft = lowerCase.replaceAll("(", "");
// let removeParentesesRight = removeParentesesLeft.replaceAll(")", "");
// let removeTrace = removeParentesesRight.replaceAll("-", ",");
let arrayModified = pokemon.toLowerCase().split(' ');

let newArray = [];
let caracteres = ["(", ")", "-", ","]
function removeCaractere(caracteres)  {
  
  for (let i = 0; i < arrayModified.length; i++) {
    for (let j = 0; j < caracteres.length; j++){
      if(arrayModified[i].includes(caracteres[j])) {
        arrayModified[i] = arrayModified[i].replace(caracteres[j], "")
      } 
    }
    if(arrayModified[i] !== ""){
      newArray.push(arrayModified[i].trim())
    }
  }
  return newArray;
}
let arr = removeCaractere(caracteres);
// console.log(arr)


function capitalize(element, i) {
    let noSpaces = element.trim()
    let elementFormmated = noSpaces[i].toUpperCase() + noSpaces.slice(1);
    return elementFormmated;
}

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
                - ${pokemonFeat.attacks[0].trim()},
                - ${pokemonFeat.attacks[1]}
                - ${pokemonFeat.attacks[2]}

            Places:
                - ${pokemonFeat.places[0].trim()}
                - ${pokemonFeat.places[1].trim()}
                - ${pokemonFeat.places[2].trim()}`;

console.log(text);

