/** Algumas maneiras de manipular as strings. */
var s = "The winter is coming. It's really coming!";
// console.log(s);

/** Quantos caracters tem nessa string?
 * Para isso, utiliza-se uma propriedade chamada length
 */
// console.log(`${s.length} caracteres`);

/** Em qual posicao a palavra 'coming' esta? */
// console.log(`posicao da palavra 'coming': ${s.indexOf('coming')}`);

/** Saber qual e a ultima vez em que a palavra 'coming' aparece */
// console.log(`ultima posicao em que a palavra 'coming' aparece: ${s.lastIndexOf('coming')}`);

/** Obter somente parte da string: winter */
// console.log(`obter parte da string: ${s.slice(4, 10)}`);

/** Obter parte da string: de winter ate antes da palavra coming.
 * Para o segundo argumento, contar de tras para frente. O valor fica negativo.
 * Os parametros do slice sao posicao inicial e final.
 */
// console.log(`obter parte da string: ${s.slice(4, -8)}`);

/** Outra forma de obter parte da string e com o metodo substr.
 * Os parametros do substr sao: posicao inicial e quantos caracters deseja.
 */
// console.log(`obter parte da string: ${s.substr(4, 6)}`);

/** Para substituir partes da string */
// console.log(`Substituir partes da string: ${s.replace('winter', 'summer')}`);

/** Caixa-alta */
// console.log(`Caixa-alta: ${s.toUpperCase()}`);

/** Caixa-baixa */
// console.log(`Caixa-baixa: ${s.toLowerCase()}`);

/** Juntar strings */
// console.log(s + '!!');

/** Metodo concat() */
// console.log(`Concatenar strings: ${s.concat('!', '!', '?')}`);

/** Converter uma string em um array.
 * Digamos que tenha recebido um lote de membros da familia Stark, [
 * mas quer separa-los em um array.
 * Para isso, usar o split().
 */
var s2 = "Ned , John , Robb , Sansa , Bran , Arya , Rickon";
console.log(s2.split(' , '));






