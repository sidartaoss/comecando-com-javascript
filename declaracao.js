/** Declaracao de Funcoes. 
 * 
 * Sao blocos de codigos que podem ser executados mais de uma vez.
 * No JavaScript, para declarar uma funcao, usamos a palavra-chave function e damos uma nome para ela.
 * 
 */

/** 1. Declaracao Tradicional  */
// function dizerOla(nome) {
//     console.log(`Ola ${nome}`);
// }
// dizerOla('Romario');
// dizerOla('Robinho');

/** Outra maneira de declarar uma funcao eh utilizando uma expressao de funcao.
 * Para isso, armazena-se a funcao dentro de uma variavel. Nesse caso, vamos fazer uma funcao
 * anonima, ou seja, a funcao nao tem um nome definido.
 */
/** 2. Declaracao com Funcao Anonima (colocando a funcao dentro de uma variavel) */
// var dizerOla = function(nome) {
//     console.log(`Ola ${nome}`);
// };
/** Usamos essa variavel como se ela fosse uma funcao */
// dizerOla('Romario');
// dizerOla('Robinho');


/** Terceira maneira de declararmos uma funcao
 * 
 * Definir o construtor da funcao.
 * Definimos uma variavel e atribuimos new Function(). Esse construtor aceita n argumentos.
 * O primeiro argumento do construtor eh o nome do primeiro argumento que seria de uma funcao.
 * O ultimo argumento eh a definicao da funcao, o corpo da funcao (bloco de execucao).
 */
/** 3. Declaracao com Construtor de Funcao, atribuindo a uma variavel.  */
// var dizerTchau = new Function("nome", "console.log(`Tchau ${nome}`);");
// dizerTchau('Romario')


/** O JavaScript tambem faz hoisting de declaracao de funcoes.
 * Para dizerOi() funciona, porque eh uma funcao padrao.
 * Para dizerOla() e dizerTchau() nao funciona, porque sao funcoes de uma variavel, ou seja,
 * eh feito o hoisting da variavel: a variavel vai estar no topo do script, soh que ela ainda nao vai
 * ter sido definida como funcao.
 * Soh serah uma funcao somente depois da declaracao da funcao.
 */

// dizerOi('Robinho');
// dizerOla('Felipe Neto'); // Erro: dizerOla is not a function
console.log(dizerOla);      // Antes da declaracao da funcao: undefined


function dizerOi(nome) {
    console.log(`Ola ${nome}`);
}

var dizerOla = function(nome) {
    console.log(`Ola ${nome}`);
};

console.log(dizerOla);  // Apos a declaracao da funcao [Function: dizerOla]


var dizerTchau = new Function("nome", "console.log(`Tchau ${nome}`);");

