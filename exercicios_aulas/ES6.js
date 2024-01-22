var estudantes = [{ id: 1, nome: 'João', idade: 20 },
{ id: 2, nome: 'Maria', idade: 22 },
{ id: 3, nome: 'Pedro', idade: 18 },
{ id: 4, nome: 'Ana', idade: 21 }]


/* Cria uma arrow function que encontra o estudante pelo id. O id deve ser facultado como parâmetro;*/ 

const find = (id = 1) => estudantes.find((estudante) => estudante.id === id)
console.log(find(2));

 
/* Cria uma arrow function que leia todos os estudantes e escreva os seus nomes no body, na seguinte estrutura: “Nome do estudante: João” */ 

const getStudentsNames = () => estudantes.forEach((estudante) => {console.log(`Nome do estudante: ${estudante.nome}`) })
getStudentsNames()

/* Cria uma arrow function que devolva todos os estudantes que tenham uma idade maior do que um valor passado por parâmetro */

const idade = (idade = 18) => estudantes.filter((estudante) => estudante.idade > idade)
console.log(idade(20));