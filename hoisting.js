// Hoisting

/** O JavaScript sempre passa todas as declaracoes de variaveis e funcoes para o topo do script. */
// x = 5;
// var x;

/** Funciona, porque estah definindo uma declaracao e o JavaScript, atraves do hoisting, vai pegar a 
 * declaracao e colocar acima da atribuicao x = 5, no topo, como se estivesse declarando e, depois,
 * utilizando a variavel.
 */
// x = 5;
// var x = 5;

/** Se definir uma atribuicao de um valor juntamente com a declaracao, essa atribuicao nao vai ser levada
 * para o topo.
 */
// Nao vai atribuir o valor 5 a x neste momento. Vai logar undefined, ou seja, a variavel ainda nao foi
// definida.
// console.log(x);     
// var x = 5;


/** 1. Declarou var x; 
 * 2. Logou no console undefined; 
 * 3. Atribui x = 5; 
 * 4. Logou no console 5; */
console.log(x);     // undefined
var x = 5;
console.log(x);     // 5


 