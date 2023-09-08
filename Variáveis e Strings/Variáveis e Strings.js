/* 
    Transforme a string pokemon no seguinte texto:

    Name: Pikachu
    Lv: 3 - Type: ELETRIC
    Ability: static
    Attacks:
        - Thundershock,
        - Quick attack
        - Thunder

    Places:
        - veridian
        - pallet
        - cerulean
*/

const pokemon = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)";
const sliceWords = pokemon.split(" ");
// const sliceAttacks = sliceWords[3].split("-")
let novoArrayPokemon = [];
for (let i = 0; i < sliceWords.length; i++) {
  if(sliceWords[i] == "-") {
      sliceWords[i] = "";
  } 
  else if (sliceWords[i].includes(")")) {
    sliceWords[i] = sliceWords[i].replaceAll(")", " ")
  }  
  else if (sliceWords[i].includes("(")) {
    sliceWords[i] = sliceWords[i].replaceAll("(", " ")
  }
  else if (sliceWords[i].includes(",")) {
    sliceWords[i] = sliceWords[i].replaceAll(",", " ")
  }
  // else if (sliceWords[i].includes("")) {
  //   sliceWords[i] = sliceWords[i].trim()
  // }
  novoArrayPokemon.push(sliceWords[i])
  // } else {
  //   return sliceWords+
  // }
}
console.log(novoArrayPokemon)
// function remover(s) {
//   if (pokemon.includes("," || "(" || ")" || "-")) {
//     let novaLista = pokemon.replaceAll("(", " ")
//     let listaLista = novaLista.replaceAll("-", " ")
//     let outraLista = listaLista.replaceAll(")", " ")
//     outraLista.trim()
//     // let maisLista = outraLista.replaceAll("  ", ",")
//     // maisLista.split(" ")
//     //  maisLista.split(",")
//     return
//   }
// }

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

// function removeParenteses(arr) {
//     const novoArr =  arr.slice(2, -1)
//     return novoArr
// }



// const obj ={
//     "name": capitalize(sliceWords[0]),
//     "lv": sliceWords[1],
//     "type": sliceWords[2].toUpperCase(),
//     "ability": sliceWords[4].toLowerCase(),
//     "attacks": removeParenteses(sliceWords[3]).split('-'),
//     "places": removeParenteses(sliceWords[5]).split(',')

//     // "Places":
//     //     - veridian
//     //     - pallet
//     //     - cerulean
// }


// console.log(removeParenteses(sliceWords[3]));
// console.log(obj.places);
// console.log(sliceWords);
// let lista = remover()
// console.log(sliceWords)