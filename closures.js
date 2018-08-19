/** Closures */

/** Dentro de uma funcao, dentro desse escopo da funcao, a variavel criada e o que se chama de 
 * variavel local, ela foi criada localmente.
 * Durante a funcao, ela e criada, ela e usada e ela e removida, deixa de existir quando termina de executar.
 */
// function ola() {
//     var a = 1;
//     console.log(a);    
// }

// console.log(a);

// ola();


/** Agora, quando cria-se aqui uma variavel b, e possivel acessar a variavel b dentro da funcao. */
/** Essa variavel foi criada no escopo global, entao e o que chamamos de variavel global. */
// var b = 2;

// function ola() {
//     var a = 1;
//     console.log(b);    
// }

// ola();

/** Agora, digamos que queremos criar uma funcao que e um contador. **/
// var contador = 0;
// function tick() {
//     contador++;
//     console.log(contador);
    
// }

/** Toda vez que invocar tick(), vai aumentar o contador. */
// tick();
// tick();
// tick();

// console.log(contador);

/** O certo era so a funcao tick() poder acessar a variavel contador e, no entanto, qualquer codigo
 * esta podendo acessa-lo. Entao, o que precisa fazer? Definir dentro da funcao
 * a declaracao do contador e remove a declaracao de fora.
 * Qual o problema disso? Toda vez que invocar o tick(), ele esta criando uma variavel local e 
 * esta chamando-a ali dentro, nao fazendo o incremento.
 * Qual a solucao, entao? E ai que vai entrar os closures. O que sao os closures? Ele sao
 * uma funcao que tem acesso ao escopo pai, mesmo depois deste escopo ter sido destruido.    */
//  function tick() {
//      var contador = 0;
//      contador++;
//      console.log(contador); 
//  }
//  tick();
//  tick();
//  tick();


/** Vamos criar aqui uma variavel chamada tick. E, nessa variavel, vamos criar uma funcao auto-executada.
 * Ou seja, so vai funcionar nesse escopo da criacao dessa variavel.
 * Dentro do escopo dessa variavel, vamos definir o contador como 0, retornando uma funcao anonima
 * que vai incrementar o contador e logar o valor:
 */
/** A variavel tick e o resultado dessa funcao auto-invocada.
 */
var tick = (function() {
    var contador = 0;
    return function() { 
        contador++;
        console.log(contador);        
     }
})();

tick();
tick();
tick();

/** Isso nos permite ter acesso ao tick, porque podemos executa-lo aqui */
tick();

/** Mas nao podemos alterar o contador, a nao ser pelo proprio tick(). */