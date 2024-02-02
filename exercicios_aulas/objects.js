const pessoa = {
    nome: "gabs",
    idade:"24",
    naturalidade:"maracay",
    0 : "boas",
    "user-name": "tops"
}
const pessoa2 = new Object();
pessoa2.nome = "gabs";
pessoa2.idade ="24",
pessoa2.naturalidade ="maracay"

console.log(Object.keys(pessoa2))
console.log(Object.values(pessoa2))
console.log(Object.entries(pessoa2))

// o - nao é um indentificador valido nos nomes, porque é lido como "subtração"
// teriamos qu usar "use-name" ou seja declarar como string e nao user-name
// numeros sao propridades validas, mas ao ler temos que fazer por ex (pessoa[0])