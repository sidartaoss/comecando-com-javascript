// numeros
x = 10;

// strings
x = 'Ola';
x = "Ola";

// booleanos: true/false
x = true;

// arrays: containers de dados. Dessa maneira, podemos guardar mais de um dado no mesmo espaço.
// Para isso, usamos os colchetes.
x = [10, "Ola", false];

/** objetos: Outra maneira de armazenarmos mais de um valor no mesmo espaco eh usarmos os objetos. 
 * Para declararmos um objeto, usamos as chaves.
 * Dentro de um objeto, precisamos dizer, ao contrario dos arrays em que so definimos os valores,
 * definir as chaves, ou seja, as propriedades (chave/valor).
 * **/
x = { nome: 'Joao', sobrenome: ' das Neves' };

/** O JavaScript armazena os valores nas variaveis com o que se chama de Tipagem Dinamica (Dynamic Types). 
 * Significa que, por exemplo, pode-se declarar uma variavel e atribuir um numero a ela e, logo depois,
 * atribuir um valor que eh uma string.
*/
var y = 15;
y = "Ola";

/** Alem desses valores padroes, tem outros valores que eh importante que saibamos tambem, que sao:
 * 
 * undefined: Eh um valor que significa que uma variavel ainda nao foi definida.
 * Por exemplo, se tiver apenas uma declaracao de variavel, automaticamente, dentro dessa variavel
 * vai estar o valor undefined: 
 */
var z; // undefined

/** Outro valor tambem que temos eh o valor null. O null significa que eh nada, ou seja, deveria
 * ser algo que nao existe.
 * Se temos uma variavel pessoa e atribui-se o valor null, significa que ainda nao existe nenhuma
 * pessoa nessa variavel.
  */
var pessoa = null;

