// Exerc. 2.1

function dividir(a, b){
    let dividir = a / b 

    if(b === 0){
        console.log('Não é possível dividir por zero!')
        return
    }
    
    return console.log(dividir)
}

// dividir(20, 0)

// Exerc. 2.2

function dividir2(a, b){
    let dividir = a / b 

    if(b === 0){
        console.log('Não é possível dividir por zero! Por favor digitar outro denominador')
        return
    }
    
    return console.log(dividir)
}

// dividir2(20, 0)

// Exerc. 2.3

function novoSalario(salarioAtual){

    let base = 2500
    let novoSalario 

    if(salarioAtual >= base){
        novoSalario = salarioAtual + salarioAtual * 20 / 100
    } else {
        novoSalario = salarioAtual + salarioAtual * 10 / 100
    }

    return console.log(novoSalario)
}

// novoSalario(2500)

// Exerc. 2.4

function calculaMedia(a, b, c, d){

    let notas = (a + b + c + d) / 4
    
    let media = 7

    let aprovado = ''

    if(!notas){
        aprovado = 'Favor inserir notas'
    } else if(notas >= media){
        aprovado = `Aluno aprovado, sua nota foi ${notas}`
    } else if(notas >= 4){
        aprovado = `Aluno esta em EXAME, sua nota foi ${notas}`
    } else {
        aprovado = `Aluno reprovado, sua nota foi ${notas}`
    }
    
    return console.log(aprovado)
}

calculaMedia(7, 7, 7, 6)
