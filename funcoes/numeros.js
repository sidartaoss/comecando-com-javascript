/** Aprender a manipular os numeros com os metodos e propriedades que nos sao dados pelo Prototype
 * dos numeros no JavaScript.
 */
var x = 34;

/** Para numeros muito grandes, usar anotacao exponencial ou anotacao cientifica. */
// var y = 45600000;
/** Usar a letra 'e' para indicar que estamos usando a anotacao exponencial. */
var y = 456e5;  // vezes 10 elevado a 5.

/** E para numeros muito pequenos? */
// var j = 0.000123;
var j = 123e-6; // 123 vezes 10 elevado a -6.

/** O JavaScript so tem capacidade de armazenar com precisao ate 15 digitos.
 * Depois que nos fazemos esses 15 digitos, acontece overflow, que e o estouro dessa numeracao
 * ou underflow, se for em casas decimais.
 */

 /** 15 digitos */
//  var z = 999999999999999;
//  console.log(z);

 /** 16 digitos */
// var z = 9999999999999999;
// console.log(z);     // 10000000000000000
/** Como vai acontecer o estouro da numeracao, vai acontecer e que ele vai colocar o maior numero possivel
 * em relacao a quantidade de bits que ele pode armazenar, que e de 64 bits.
 * Isso vale tambem para decimais.
  */

  /** No caso dos decimais, o JavaScript suporta somente ate 16 digitos. */
//   var z = 0.9999999999999999;
//   console.log(z);
  
 /** Se adicionar mais uma casa, 17 digitos decimais, vai arredondar para o maximo que consegue,
  * o mais proximo disso, que seria 1.
  */
//  var z = 0.99999999999999999;
//  console.log(z);            // 1

 /** Outra maneira que pode ser feita e gravar esses numeros em notacao hexadecimal. */
//  var a = 0x100;     // 256 em notacao decimal
//  console.log(a);    // Exibe em notacao decimal.

// var b = 0xFFF;
// console.log(b);         // 4095 em notacao decimal.

/** Existe tambem uma maneira de gravarmos um numero em uma variavel usando a notacao octal.
 * Essa maneira nao e ainda 100% propagada em todos os compiladores JavaScript. No NodeJS funciona. **/ 
/** Para a notacao octal, comecar com zero. */
// var b = 07777;
// console.log(b);         // 4095 em notacao decimal.

/** Atraves do metodo toString(), pode-se escolher a base (notacao) em que o numero sera exibido. */
var b = 07777;
/** Exibir em base hexadecimal */
// console.log(b.toString(16));        // FFF

/** Exibir em base octal */
// console.log(b.toString(8));         // 7777

/** Exibir em binario */
// console.log(b.toString(2));         // 111111111111, 12 bits completos, ou seja, 12 numeros 1

/** Exibir notacao exponencial. */
var k = 45600000;
// console.log(k.toExponential());     // 4.56e+7. 4.56 exponencial elevado a 7.
/** Definir quantas casas quero que apareca na parte decimal */
// console.log(k.toExponential(4));     // 4.5600e+7
/** Pode diminuir o numero de casas decimais. Vai arredondar a casa decimal */
// console.log(k.toExponential(1));       // 4.6e+7
/** Fazer o arredondamento. Arredondar o numero para 5 */
// console.log(k.toExponential(0));       // 5e+7

/** Exibir um numero especifico de decimais com um numero pequeno.
 * Em dinheiro: so pode ter 2 casas decimais. Usar toFixed();
 * Vai arredondar para 2 casas decimais.
 */
var l = 123e-6;
console.log(l.toFixed(2));

/** Preco da gasolina */
console.log(3.357.toFixed(2));      // 3.36

/** Tambem podemos utilizar o metodo toPrecision(). Vai definir a quantidade de
 * algarismos que tem no numero completo.
 * O metodo toFixed() vai contar a quantidade de casas decimais. O metodo toPrecision()
 * vai contar o total de numeros que temos em 3.357.
 */
console.log(3.357.toPrecision(2));

