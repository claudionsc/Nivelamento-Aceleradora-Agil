// Exerc. 1.1
function somar(a, b, c){
    let somar = a + b + c
    return console.log(somar)
}

// Exerc. 1.2
// somar(2, 5, 8)

function dividir(a, b){
    let dividir = a / b 
    return console.log(dividir)
}

// dividir(20, 2)

// Exerc. 1.3
function calculaIdade(dataN){

   let idade = 2023 - dataN
   let maior = ''

   if(!dataN){
    maior = 'Favor inserir ano de nascimento'
   } else if(idade > 18){
    maior = `A pessoa é maior de idade, sua idade é ${idade}`
   } else {
    maior = `A pessoa não é maior de idade, sua idade é ${idade}`
   }

    return console.log(maior)
}

// calculaIdade(1999)

function calculaMedia(a, b){

    let notas = (a + b) / 2
    
    let media = 5

    let aprovado = ''

    if(!notas){
        aprovado = 'Favor inserir notas'
    } else if(notas >= media){
        aprovado = `Aluno aprovado, sua nota foi ${notas}`
    } else {
        aprovado = `Aluno reprovado, sua nota foi ${notas}`
    }
    
    return console.log(aprovado)
}

calculaMedia(10, 5)