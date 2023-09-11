const pokemon = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)"
// let lowerCase = pokemon.toLowerCase();
// let removeParentesesLeft = lowerCase.replaceAll("(", "");
// let removeParentesesRight = removeParentesesLeft.replaceAll(")", "");
// let removeTrace = removeParentesesRight.replaceAll("-", ",");
let arrayModified = pokemon.split(' ');

let newArray = [];
let caracteres = ["(", ")", "-"]
let arr;
function removeCaractere(caracteres)  {
    for (let i = 0; i < arrayModified.length; i++) {
        for (let j = 0; j < caracteres.length; j++){
            if(arrayModified[i].includes(caracteres[j])) {
                arrayModified[i] = arrayModified[i].replaceAll(caracteres[j], " ")
            }
        if(arrayModified[i] !== " ") {
            
        }
        // else {
        //     newArray.push(arrayModified[i])
        // }
      }
    }
    return newArray
}
console.log(newArray)
removeCaractere(caracteres)
// console.log(newArray)


// function capitalize(element, i) {
//     let noSpaces = element.trim()
//     let elementFormmated = noSpaces[i].toUpperCase() + noSpaces.slice(1);
//     return elementFormmated;
// }

// const pokemonFeat = {
//     name: capitalize(arrayModified[0], 0),
//     lv: arrayModified[1] + " -  Type: " + arrayModified[2].toUpperCase(),
//     ability: arrayModified[6],
//     attacks: [capitalize(arrayModified[3], 0), capitalize(arrayModified[4], 0), capitalize(arrayModified[5], 0)],
//     places: [arrayModified[7], arrayModified[8], arrayModified[9]]
// }

// let text = `
//              Name: ${pokemonFeat.name}
//              Lv: ${pokemonFeat.lv}
//              Ability: ${pokemonFeat.ability}
//              Attacks:
//                 - ${pokemonFeat.attacks[0].trim()},
//                 - ${pokemonFeat.attacks[1]}
//                 - ${pokemonFeat.attacks[2]}

//             Places:
//                 - ${pokemonFeat.places[0].trim()}
//                 - ${pokemonFeat.places[1].trim()}
//                 - ${pokemonFeat.places[2].trim()}`;

// console.log(text);

