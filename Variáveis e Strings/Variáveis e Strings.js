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

const sliceWords =  pokemon.split(",");
const capitalize = s => s && s[0].toUpperCase() + s.slice(1);
const ability = sliceWords[3].split('-')

const obj ={
    "name": capitalize(sliceWords[0]),
    "lv": sliceWords[1],
    "type": sliceWords[2].toUpperCase(),
    // "ability": 
    // "Attacks": [sliceWords[],]

    // "Places":
    //     - veridian
    //     - pallet
    //     - cerulean
}


console.log(ability);
// console.log(sliceWords);