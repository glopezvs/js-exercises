/* cria uma Promise com as seguintes 
características:
- Ter uma função que faça a soma de 2 
valores, recebidos por parâmetros;
- Se a soma for par, deverá ficar resolvida;
- Se a soma for ímpar, deverá ser rejeitada. */



const somarValor = (valor1, valor2) =>{
const totalSoma = valor1 + valor2;

const promise = new Promise((resolve,reject) => {
  
  if (totalSoma % 2 === 0) {
    resolve("par");
 } else {
    reject("impar"); 

}
});

  promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
 }
 
 console.log(somarValor(2,3));


 //ou
 

 const somaValores = (primeiroValor, segundoValor) => {
  const totalSoma = primeiroValor + segundoValor;

  if (totalSoma % 2 === 0) {
    Promise.resolve("par!").then((result) => console.log(result));
  } else {
    Promise.reject("impar!").catch((error) => console.log(error));
  }
};


/*
const promiseUsers = Promise.resolve("Users!");
      
      async function resolvePromiseUsers() {
        try {
          const result = await promiseUsers;
          console.log("success", result);
        } catch (e) {
          console.log("error", e);
        }
      }

      resolvePromiseUsers();
*/





  async function somarAsync (primeiroValor, segundoValor){ 
    const totalSoma = primeiroValor + segundoValor;

    const promise = new Promise((resolve,reject) => {
  
      if (totalSoma % 2 === 0) {
        resolve("par");
     } else {
        reject("impar"); 
    
    }
    });
    try{
    const result = await promise;
    console.log(result)
    } catch (error) {
      console.log(error)

    }

  }


  