// Exerc. 1.1

const itera40 = () => {
    contador = 0
    while(contador <= 40) {
        console.log(contador++)
    }
}

// itera40()

// Exerc. 1.2

const iteraN = num => {
    contador = 0
    while(contador <= num) {
        console.log(contador++)
    }
}

// iteraN(4)

// Exerc. 1.3

const iteraEntreValores = (numA, numB) => {
    if(numB <= numA) {
        console.log("O primeiro valor deve ser menor que o segundo!")
    } else {
        while(numA <= numB) {
            console.log(numA++)
        }
    }
}

// iteraEntreValores(5, 5)