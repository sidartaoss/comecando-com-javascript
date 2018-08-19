/** Objetos, no JavaScript, sao variaveis que contem variaveis dentro delas. */

/** Declarar objetos: a maneira mais facil e simples de declarar objetos e usando as chaves. */
var obj = {};

/** Dentro do objeto, nos podemos criar varias propriedades que guardam valores  */
/** Guardou dentro da variavel objeto outras duas variaveis: nome, sobrenome. E dentro de cada
 * uma dessas variaveis, colocou valores.
 * As variaveis que ficam dentro do objeto chamamos de propriedades. Podemos declarar as 
 * propriedades separando-as por virgula.
 */
var objeto = { 
    nome: "Romario",
    sobrenome: "da Silva",
    idade: 16,
    // apresentar: function() {
    //     /** this: quando uma funcao esta dentro de um objeto, esse this e considerado o proprio objeto. */
    //     console.log(`Ola, eu sou ${this.nome} ${this.sobrenome}.`);        
    // }
    /** Podemos definir como valor de uma propriedade uma funcao e, a partir dai, chamamos a propriedade
     * de metodo do objeto.
     */
    apresentar: apresentacao
};

console.log(objeto);

/** Como faz para acessar os valores que estao dentro das propriedades? */
console.log(`idade : ${objeto.idade}`);

/** Dentro de uma propriedade tambem e possivel armazenar funcoes anonimas.
 * Pode acessar a variavel, a propriedad com uma funcao (apresentar), chamado de metodo:
 */
// objeto.apresentar();

/** E possivel definir uma funcao nomeada como propriedade do objeto.
 * Esta atrelando a funcao apresentacao() ao metodo apresentar do objeto.
 */
function apresentacao() {
    console.log(`Ola, eu sou ${this.nome} ${this.sobrenome}.`);        
}
/** Invocando o metodo apresentar de objeto, abrindo e fechando parenteses para invocar a funcao do
 * metodo.
 */
objeto.apresentar();
