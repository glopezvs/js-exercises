const pessoa = {
    nome: "gabs",
    idade:"24",
    naturalidade:"maracay"
}
const pessoa2 = new Object();
pessoa2.nome = "gabs";
pessoa2.idade ="24",
pessoa2.naturalidade ="maracay"

console.log(Object.keys(pessoa2))
console.log(Object.values(pessoa2))
console.log(Object.entries(pessoa2))