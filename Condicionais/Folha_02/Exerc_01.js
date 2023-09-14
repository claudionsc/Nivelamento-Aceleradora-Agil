// Exerc. 1.1
function subtrair(n1, n2) {
    return console.log(n1 - n2)
}

// subtrair(10, 20)

// Exerc. 1.2

function multiplicar(n1, n2, n3) {
    return console.log(n1 * n2 * n3)
}

// multiplicar(10, 20, 30)

// Exerc. 1.3

function somar(n1, n2, n3, n4) { // recebe somente números inteiros
    if(Number.isInteger(n1, n2, n3, n4)) {
        return console.log(n1 + n2 + n3 + n4)
    }
    else {
        return console.log("insira números inteiros")
    }
}

// somar(10, 20, 30, 40)

// Exerc. 1.4

function calcularMedia(a, b, c){
    return console.log((a + b + c) / 3)
}

// calcularMedia(10, 5, 5)

// Exerc. 1.5

function converterQuilosEmGramas(quilos){
    return console.log(quilos * 1000)
} 

// converterQuilosEmGramas(85.7)

// Exerc. 1.6

function calcularPreco(etiqueta, pagamento){

    let preco

    if(pagamento == 1){                                      //se pagamento a vista
        preco = etiqueta - etiqueta * 10 / 100
    } else if (pagamento == 2){                            //se pagamento parcelado em 2x
        preco = etiqueta / 2
    } else if (pagamento == 4){                          //se pagamento parcelado em 4x
        preco = (etiqueta + etiqueta * 5 / 100) / 4     //acrescenta taxa de 5%
    }
    return console.log(preco)
}

// calcularPreco(100, 4)

// Exerc. 1.7

function calcularSalario(salarioAtual){  // acrescenta 25% ao salário
    return console.log(salarioAtual + salarioAtual * 25 / 100)
}

// calcularSalario(1000)

// Exerc. 1.8

function calcularSalario2(salarioAtual, porcentagem){
    return console.log(salarioAtual + salarioAtual * porcentagem / 100) 
}

// calcularSalario2(1000, 30)

// Exerc. 1.9

function calcularSalario3(salarioAtual){

    let gratificacao = 5
    let imposto = 7

    let novoSalario = salarioAtual + salarioAtual * gratificacao / 100

    let salarioLiquido = novoSalario - novoSalario * imposto / 100

    return console.log(salarioLiquido)
}

// calcularSalario3(1000)

// Exerc. 1.10

function calcularDiasVividos(nome, dataNascimento) {
    const dataAtual = [12, 9, 2023]
    const diasNaoVividos = (30 - dataAtual[0]) + ((12 - dataAtual[1]) * 30)
    /* primeiro, define-se a quantidade de dias *não vividos*, subtraindo 30(dias do mês) 
    pelo dia atual e após isso, os dias restantes do ano. */
    const arrDataNascimento = dataNascimento.split('/')
    const dias = 30 - arrDataNascimento[0]
    /* define-se a quantidade de dias *vividos* subtraindo 30(dias do mês)
    pela data de nascimento */
    const mesesEmDias = (12 - arrDataNascimento[1]) * 30
    // define-se a quantidade de dias *vividos* correspondente aos meses em números de dias 
    const anosEmDias = (2023 - arrDataNascimento[2]) * 365
    // define-se a quantidade de dias *vividos* correspondente aos números de dias do ano
    const diasVividos = (dias + mesesEmDias + anosEmDias) - diasNaoVividos
    // soma-se os dias vividos e subtrai pelos restante dos dias do ano atual
    return console.log(`${nome} viveu ${diasVividos} dias`)
}

// calcularDiasVividos("Victor", '12/09/2023')

// Exerc. 1.11

function lerNomeSobrenome(sobrenome, nome){
    return console.log(`Sr.(a) ${nome} ${sobrenome}, é uma honra contar com a sua presença!`)
}

// lerNomeSobrenome("Nascimento", "Claudio")

// Exerc. 1.12

function calcularCatetos(c1, c2){

    let hipotenusa = Math.sqrt(c1**2 + c2**2)
    return console.log(hipotenusa)
}

// calcularCatetos(2, 2)

// Exerc. 1.13

function calcularAreaTriangulo(base, altura) {
    return console.log(base * altura / 2)
}

// calcularAreaTriangulo(2, 4)

// Exerc. 1.14

function calcularAreaCirculo(raio) {
    return console.log(Math.PI * Math.pow(raio, 2))
}

// calcularAreaCirculo(4)

// Exerc. 1.15

function calcularNumero(a){

    let quadrado = a**2
    let cubo = a**3
    let raizQ = Math.sqrt(a)
    let raizC = Math.cbrt(a)

    return console.log(`
    Número ao quadrado: ${quadrado}. Número ao cubo ${cubo}. Raiz quadrada: ${raizQ}. Raíz cúbica: ${raizC}
    `)
}

// calcularNumero(8)

// Exerc. 1.16

function elevarDoisNumeros(a, b){

    return console.log(a**b)
}

// elevarDoisNumeros(5, 2)

// Exerc. 1.17

function calcularComprimentos(pes){

    let polegadas = pes * 12
    let jardas = pes / 3
    let milhas = pes / 5280

    return console.log(`
    Conversão de ${pes} pés em: ${polegadas} polegadas, ${jardas} jardas e ${milhas} milhas
    `)
}

// calcularComprimentos(6)

// Exerc. 1.18

const cacularIdadeAnos = (anoNascimento, anoAtual) => {
    const idade = anoAtual - anoNascimento
    const idadeFutura = 2050 - anoNascimento
    console.log(`Idade: ${idade} anos, idade em 2050: ${idadeFutura} anos`)
}

// cacularIdadeAnos(2000, 2023)

// Exerc. 1.19

const calcularPorcentagemm = (valor, porcentagem) => { 
    // função que calcula porcentagem para evitar repetição de código
    return valor * porcentagem / 100
}
const calculaValorCarro = (precoFabrica, percentualLucro, percentualImpostos) => {
    const lucro = calcularPorcentagemm(precoFabrica, percentualLucro) // cálculo da porcentagem de lucro
    const impostos = calcularPorcentagemm(precoFabrica, percentualImpostos) // cálculo da porcentagem de impostos
    const precoFinal = precoFabrica + lucro + impostos /* cálculo do preço final, considerando o preço de fábrica, 
    a o lucro desejado e o imposto */
    console.log(`lucro: ${lucro}, impostos: ${impostos}, preço final: ${precoFinal}`)
}
// calculaValorCarro(100, 20, 10)

// Exerc. 1.20

const calcularValorHora = (horas, salMin) => {

    let valorHoraTrab = salMin / 10 // hora trabalhada equivale a 1 décimo do salário mínimo
    let salarioBruto = horas * valorHoraTrab
    let imposto = salarioBruto * 3 / 100 // o imposto adicionado ao salário é de 3%

    let salarioAReceber = salarioBruto - imposto

    return console.log(salarioAReceber)
}

// calcularValorHora(200, 1000)

// Exerc. 1.21

const converterHora = (hora, minutos) => {
    const horaParaMinutos = hora * 60
    const somaMinutos = horaParaMinutos + minutos
    const segundos = somaMinutos * 60
    console.log(`
                Horas convertidas em minutos: ${horaParaMinutos},
                minutos totais: ${somaMinutos},
                segundos totais: ${segundos}.`)
}
// converterHora(1, 5)