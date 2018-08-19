/** O Prototype e muito parecido com o conceito de uma Classe.
 * Todo objeto tem um Prototype.
 * Criamos um Prototype atraves de uma funcao. Definimos os argumentos: isso
 * vai ser como se fosse o Construtor da Classe.
 */
/** Definicao de um Prototype para uma Classe chamada Bonifacio */
function Bonifacio(nome, idade, corDoCabelo) {
    /** Para definirmos os atributos dentro do Prototype, usamos o this. */
    this.nome = nome;
    this.idade = idade;
    this.corDoCabelo = corDoCabelo;
    this.sobrenome = "Bonifacio";
    this.apresentar = function() {
        console.log(`Ola, eu sou ${this.nome} ${this.sobrenome}.`);
        
    }
}

/** Se, simplesmente, chamar isso como uma funcao, vai agregar esses valores ao escopo dela.
 * Mas, para que possamos transformar isso em um objeto, usamos a palavra-chave new.
 * Temos dois objetos que herdam o Prototype de Bonifacio.
 */
var fundador = new Bonifacio('Jose', 52, 'castanhos');
fundador.apresentar();
/** Adicionar propriedade ao objeto fundador. */
fundador.darTchau = function() { console.log("Tchau!"); };
fundador.darTchau();

/** Adicionar propriedade ao Prototype Bonifacio */
Bonifacio.prototype.darTchau = function() { console.log("Tchau!"); }

console.log();

var herdeiro = new Bonifacio('Jose Filho', 15, 'castanhos');
// herdeiro.apresentar();
// console.log(fundador);
// console.log(herdeiro);

// herdeiro.darTchau(); // Erro, porque a propriedade darTchau foi definida somente para o objeto fundador.

herdeiro.darTchau();    // Ok, porque a propriedade darTchau foi definida para o Prototype Bonifacio.

/** Prototype e muito util quando queremos agregar algo ao objeto. */
/** Exemplo: temos uma string. O JavaScript trata strings como objeto. E possivel adicionar novas coisas
 * ao Prototype da string. Por exemplo, 
 */
String.prototype.apagar = function() { return ""; };
/** A partir da definicao acima, pode-se usar a propriedade criada acima em qualquer string. */
console.log(`string vazia: ${'Oi'.apagar()}`);

/** Isso nos da a possibilidade de estender cada vez mais os nossos objetos e as classes que nos criarmos
 * no JavaScript.
 */