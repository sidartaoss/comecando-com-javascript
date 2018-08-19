/** Caminho inverso do metodo split() */

var array = "Ned John Robb Bran Rickon".split(' ');
// console.log(array);

/** Temos algumas maneiras de transformar um array em string
 * Uma delas e o metodo toString()
 */
// console.log(array.toString());

/** Segunda maneira de transformar um array em string
 * Usar o metodo join(), que vai fazer o oposto do que o split fez.
 * Passar, como parametro, o que vai juntar esses elementos.
 */
// console.log(array.join(' | '));

/** Colocar um novo elemento no array.
 * Adiciona no final do array.
 * Usar a propriedade chamada push.
 */
// array.push("Sansa");
// console.log(array);

/** Adicionar Sansa no array, mas no inicio.
 * Usar outro metodo chamado unshift().
 */
array.unshift("Sansa");
// console.log(array);

/** Para remover um elemento do array.
 * O primeiro metodo para isso e o pop().
 * O pop() tira do final do array.
 */
// var elemento = array.pop();
// console.log(array);
// console.log(elemento);

/** Para remover o primeiro elemento do array, usar metodo shift() */
var elemento = array.shift();
// console.log(array);
// console.log(elemento);

/** Alterar um elemento do array */
array[1] = 'John Snow';
// console.log(array);

/** Tambem temos o metodo slice (para obter uma parte da string) nos arrays. */
/** slice permite dois argumentos. O primeiro e a posicao a qual vai comecar
 *  a obter o elemento. Vai obter a partir dessa posicao ate o final.
 *  O segundo argumento e a posicao final mas nao inclusa da extracao desejada.
 */
var slice = array.slice(3);
console.log(slice);     // [ 'Bran', 'Rickon' ]
console.log(array);

/** Obter somente o Bran */
var slice2 = array.slice(3, 4);
console.log(slice2);

/** Metodo splice() permite retirar e tambem inserir novos elementos dentro do array.
 * O primeiro parametro e a posicao do elemento que deseja remover.
 * O segundo parametro e a quantidade de elementos que deseja remover a partir dessa posicao.
 * Quer remover apenas o John Snow.
 * A partir do terceiro parametro e para inserir novos elementos no lugar do elemento removido.
 */
var splice = array.splice(1, 1, "Arya", "Sansa");
console.log(splice);        // [ 'John Snow' ]
console.log(array);


/** Pode usar o splice para remover o elemento em qualquer posicao. */
/** Quer remover o Rob, posicao 3 */
array.splice(3, 1);
console.log(array);

/** Tem dois arrays e quer juntar um com o outro.
 * Para isso, temos o metodo concat().
 *  */ 

 /** Juntar com o array splice, ou seja, vai incluir John Snow de novo.
  * Metodo concat gera um novo array.
  */
array = array.concat(splice);
console.log(array);

/** Alem do array splice, vai juntar o array slice */
array = array.concat(slice);
console.log(array);

 


