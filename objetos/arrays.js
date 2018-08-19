/** Agora que ja aprendemos sobre objetos no JavaScript, vamos aprender sobre um tipo especial
 * de objeto, que sao os Arrays.
 */

 /** Os objetos, no JavaScript, sao variaveis que guardam variaveis */
 var obj = {
    foo: "bar",
    bar: "foo"
 };

 /** Os arrays sao bem parecidos com isso, mas, ao inves de ter nomes nos seus indices, 
  * e como se o objeto tivesse um indice numerico.
  */
var ob2 = {
    0: "bar",
    1: "foo"
 };

 /** Nos temos uma lista de Starks. Entao, se quiser lista-los aqui, teria que fazer: */
//  var stark1 = "Ned";
//  var start2 = "John";

 /** Para declararmos um array, e necessario usar os colchetes. */
 var stark = [];            // Este e um array em branco.

 /** Os itens podem ser definidos dentro do array. */
 var stark1 = ["Ned", "John", "Robb"];

 /** Se quiser acessar esses elementos, e bem simples. So precisa usar o nome da variavel,
  * abrir colchetes e definir o numero do indice.
  */
// console.log(stark1[1]);

/** Os arrays, no JavaScript, nao sao tipados, ou seja, os elementos podem ter dados diferentes.
 * O array guarda qualquer tipo de dados.
 * O JavaScript trata qualquer coisa como objeto. O array tambem e um objeto, isso quer dizer que
 * ele guarda qualquer coisa que seria um objeto.
 * O array pode guardar, inclusive, outro array dentro dele.
 */
var stark2 = ["Ned", 2, function() {}, []];

/** Se quiser ter uma tabela com o nome/idade de cada Stark: */
var starks = [
    ["Ned", 40],
    ["John", 16],
    ["Rickon", 3]
];

/** Pode-se acessar os elementos, no array, usando os indices ou atraves de objetos.
 * Se quisermos fazer algo parecido com array associativo (Como no PHP, em que e possivel
 * nomear os indices), temos o objeto.
 */
var stark3 = {
    nome: "Ned",
    idade: "40"
}
/** Elemento do array: */
console.log(starks[0]);
/** Acessar elemento atraves do objeto */
console.log(stark3["nome"]);
