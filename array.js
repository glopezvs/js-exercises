
const dias = ["3",2,"3",4]

for (let i = 0; i < 4; i++){
   console.log(dias[i]);
}

//OU
 
 for (var i=0; i < dias.length; i++ ) {
   console.log(dias[i])
 }

/*podemos usar a mm variavel no for, porque pertencem excluisivamente a cada for*/

const meses = new Array(4)
meses[0] = "jan";
meses[1] = "fev";
meses[2] = "mar";
meses[3] = "abr";

for (let i = 0; i < 4; i++){
   console.log(meses[i]);
}



const newArray = ["Olá", "Tudo bem?"]
console.log(newArray.length)


const newArray2 = ["Olá", "Tudo bem?", "Sim"]
console.log(newArray2.toString());

/* ter cuidado com os console.log, porque em array que adiconamos algo, nao mostra o que foi adicionado,
 mostra a length nova do array, é necessário fazer console.log do array e nao da função*/


const newArray3 = [1, 2, 3]
newArray3.pop(0)
newArray3.shift(2)
console.log(newArray3);


const newArray4 = ["Bom dia", "Boa tarde"]
newArray4.push("Boa noite")
console.log(newArray4);


const newArray5 = ["Bom dia", "Boa tarde"]
console.log(newArray5.join("/"));

const newArray6 = ["Bom dia", "Boa tarde"]
console.log(newArray6.concat(newArray));

