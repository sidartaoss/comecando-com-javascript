/** Maneiras de fazer a invocacao de uma funcao */

function dizerOi(nome) {
    /** Passando this, quando a invocacao executar passando um objeto vazio, dizerOi.apply({}, ['Romario']), 
     * so vai mostrar esse objeto vazio, que eh o contexto que foi dado, o escopo.
     */
    console.log(this);
    
    console.log(`Ola ${nome}`);
    /** This diz o escopo em que a funcao estah sendo executada. Quando retornar o this na
     * invocacao, vai retornar o objeto global, ou seja, o escopo em que o codigo estah sendo executado.
     */
    // console.log(this);
    
}

// 1. Maneira Tradicional
// dizerOi('Romario');

/** Outra maneira de fazer a invocacao eh atraves do metodo call.
 * Chamar o nome da funcao dizerOi, ponto call().
 * O que faz o call()? Ele vai executar essa funcao, mas ele nos da algumas possibilidades a mais.
 * Por exemplo, pode-se dar a funcao um objeto que vai ser o escopo dessa funcao.
 * 
 * Quando usa o call(), pode-se dar um novo objeto para esse escopo. Para criar-se um objeto vazio, 
 * eh so abrir/fechar chaves. A partir dai, os proximos argumentos dessa funcao call() seriam os argumentos
 * que estivessem na definicao da funcao dizerOi().
 */
// 2. Maneira com o call().
// dizerOi.call({}, 'Romario');
// dizerOi("Romario");


/** A terceira maneira para invocar uma funcao eh utilizando um outro metodo chamado apply().
 * Coloca o nome da funcao e usamos .apply().
 * O apply() tambem nos da a possibilidade de definir um escopo para essa funcao e, a partir dai, o 
 * proximo argumento eh um array. O array se define com um colchete, []. Dentro do array vai definir
 * os argumentos.
 */
/** 3. Maneira com o apply(). */
// dizerOi.apply({}, ['Romario']);

/** Caso, na invocacao, seja passado null no primeiro argumento, ai vai fazer como se estivesse chamando
 * o objeto global, mostrando o contexto global.
  */
 // dizerOi.apply(null, ['Romario']);
 dizerOi.call(null, 'Romario');