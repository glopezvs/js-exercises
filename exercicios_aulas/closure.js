function dividir (valor1) {
    return function () {
        return valor1 / 2;
    }       
}

console.log(dividir(5)())


function dividir2 (valor1) {
    return function (valor2) {
        return valor1 / valor2;
    }       
}

console.log(dividir2(5)(2))






