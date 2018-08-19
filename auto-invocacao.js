/** Maneira de fazermos escopo dentro do JavaScript.
 * 
 * Funcao auto-invocada: para isso, vamos utilizar uma funcao anonima e, no mesmo momento em que a declararmos,
 * ja vamos executa-la.
 * Primeiro, abre parenteses. Dentro desse parenteses, declaramos uma funcao anonima
 */

 /** Somente fazendo essa declaracao, na hora de executar, nao vai acontecer nada.
  * Mas, quando coloca essa funcao anonima entre parenteses, isso da a possibilidade de, ja nesse momento,
  * trata-la como se fosse uma funcao mesmo. Entao, a parti dai posso fazer a invocacao abrindo e fechando
  * parenteses no final.
  */
 /** 1.  */
// (function() {
//     console.log('Ola');
// })

/** 2. */
// (function() {
//     console.log('Ola');
// })();

/** Isso e muito interessante quando precisamos isolar o escopo disso que estamos fazendo aqui.
 * Por exemplo, se aqui dentro dessa funcao criar-se uma variavel 'a' e atribui-la o valor 1, na
 * hora em que executar, vai aparecer 1.
 */
(function() {
    var a = 1;
    console.log(a);
    
})();

/** Agora, quando usar 'a' aqui fora, vai dizer que nao foi definido.
 * Isso quer dizer que esse 'a' so existe dentro desse escopo que nos criamos aqui no codigo.
 * Isso nos da a liberdade de reutilizar essa variavel 'a' sem ter o receio de ja ter algo atribuido a ela.
 */
 console.log(a);
 
 /** Quando a gente quiser isolar o escopo no JavaScript, nos fazemos dessa maneira: nos criamos
  * uma funcao auto-invocada.
  */