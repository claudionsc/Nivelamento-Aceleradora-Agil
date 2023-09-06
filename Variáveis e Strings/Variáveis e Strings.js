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
const pikachu = sliceWords[0].replace("p", "P")

const obj ={
    "Name": sliceWords[0],
    "Lv": sliceWords[1].trim(), "- Type": sliceWords[2].toUpperCase(0),
    "Ability": sliceWords[3].trim(),
    // "Attacks":
    //     - sliceWords[],
    //     - Quick attack
    //     - Thunder

    // "Places":
    //     - veridian
    //     - pallet
    //     - cerulean
}


console.log(pikachu);
// console.log(sliceWords);