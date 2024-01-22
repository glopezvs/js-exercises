//Cria uma função anónima que seja logo executada, e que faça console.log da string isto foi demasiado rápido!;

var anonFunction = function() {
    console.log('isto foi demasiado rápido!;')
}
anonFunction();

/*Cria uma closure que construa campos de um formulário. Na primeira função devemos passar o nome do campo, e na 
segunda função devemos passar o resultado.*/

function formulario(nome){
    return function(resultado){
        return nome + ': ' + resultado
    }
}
console.log(formulario('Nome')('Gabi'))

//Cria uma função construtora relativa a um produto que tenha um nome e um valor à escolha. 

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
   }
   const novoProd = new Produto('TV', 120);
   console.log(novoProd);
   
   novoProd.preco = 2.5
   console.log(novoProd.preco);

   console.log(parseInt(novoProd.preco));