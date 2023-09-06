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

const attacks = sliceWords[3].split('-')

attacks[0].slice(1, -1)

const primeira = attacks[0].replace("(", " ")

const removeParenteses = (p, arr) => {
    arr[p].slice(1, -1)
    s = s[0].replace("(", " ")
    s = s[s.length - 1].replace(")", " ")
    // console.log(s[0])
    return s;
}

const obj ={
    "name": capitalize(sliceWords[0]),
    "lv": sliceWords[1],
    "type": sliceWords[2].toUpperCase(),
    "ability": sliceWords[4].toLowerCase(),
    // "attacks": removeParenteses(attacks),

    // "Places":
    //     - veridian
    //     - pallet
    //     - cerulean
}


console.log(removeParenteses(pokemon[3]));
// console.log(sliceWords);