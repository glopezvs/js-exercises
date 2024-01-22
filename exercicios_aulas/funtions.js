
function somar (num1,num2) {
    return num1 + num2;
 }
 console.log(somar(2,2));

 function multiplicar (num1,num2) {
    return num1*num2
 }
 console.log(multiplicar(3,2));

 function gerarPessoa (nomeValor, idadeValor) { 
    return {
         nome:nomeValor,
         idade:idadeValor
    }
 }
 
 console.log(gerarPessoa("gabi",24))