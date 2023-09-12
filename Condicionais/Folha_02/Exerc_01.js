function subtrair(n1, n2) {
    return console.log(n1 - n2);
}

subtrair(10, 20);

function multiplicar(n1, n2, n3) {
    return console.log(n1 * n2 * n3);
}

multiplicar(10, 20, 30);

function somar(n1, n2, n3, n4) {
    if(Number.isInteger(n1, n2, n3, n4)) {
        return console.log(n1 + n2 + n3 + n4);
    }
    else {
        return console.log("insira números inteiros");
    }
}

somar(10, 20, 30, 40);

function calcularMedia(a, b, c){
    return console.log(Math.floor((a + b + c) / 3));
}

calcularMedia(10, 5, 5);



