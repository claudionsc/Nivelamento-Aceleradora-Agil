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

// for(let i = 0; i < pokemon.length; i++){
//     if(pokemon[i] === "," || "(" || ")" || "-" ){
//         pokemon[i] = " ";

//     }

//     console.log(pokemon)
// }

function remover(){
    if(pokemon.includes("," || "(" || ")" || "-" )){
        let novaLista = pokemon.replaceAll("(", " ") 
        let listaLista = novaLista.replaceAll("-", " ")
        let outraLista = listaLista.replaceAll(")", " ")
        outraLista.trim()
        // let maisLista = outraLista.replaceAll("  ", ",")
        // maisLista.split(" ")
        //  maisLista.split(",")
         return
    }


}

// const sliceWords =  pokemon.split(" ");
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
let lista = remover()
console.log(pokemon)

