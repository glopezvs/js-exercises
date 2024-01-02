function Livro (titulo, autor){
this.titulo = titulo;
this.autor = autor;
}
const livro1 = new Livro('Os três mosqueteiros', 'Alexandre Dumas');
const livro2 = new Livro('Os Maias', 'Eça de Queiroz');

console.log(livro1,livro2)

livro1.titulo = 'O Conde de Monte Cristo'
console.log(livro1);