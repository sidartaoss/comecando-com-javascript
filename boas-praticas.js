/** 1. Evitar colocar variaveis no escopo global.
 * Na hora em que incluir essa variavel no codigo, vai ficar sendo permitido o acesso a essa variavel
 * por todos os outros scripts que forem adicionados.
 */
var variavelGlobal = "";

/** O ideal e que, toda vez que definirmos um arquivo JavaScript em que quisermos fazer um componente
 * ou o que for, o ideal e definirmos dentro de um escopo.
 * Esse escopo e feito atraves da funcao auto-executada:
 */
(function() {
    /** Aqui define uma variavel e ela vai estar no escopo local.
     * So vai funcionar dentro do nosso arquivo aqui, porque foi definida dentro desse
     * escopo dessa funcao.
     * 
     */
    var escopoLocal;
})();

/** 2. Sempre deixar as declaracoes de todas as variaveis no topo. */
(function() {
    var escopoLocal;
    escopoLocal = 'foo';
    console.log(escopoLocal);
    
})();

/** 3. Para nao deixar a declaracao de variaveis repetitivo demais, basta separar as 
 * declaracoes por virgulas. */
(function() {
    // var escopoLocal;
    // var escopoGlobal;
    // var foo;
    var escopoLocal,
        escopoGlobal, 
        foo;
})();

/** 4. Usar sempre aspas duplas ao inves de aspas simples.
 * Razao 1: Porque a maioria das linguagens de programacao entendem aspas duplas como string
 * e aspas simples como caracteres.
 * Razao 2: No JavaScript, temos o JSON, que e o modo de escrever objetos JSON no JavaScript, e
 * alguns compiladores as aspas simples para string.
 */
(function() {
    var escopoLocal,
        escopoGlobal, 
        foo;
    escopoLocal = "foo";
    console.log(escopoLocal);
    
    /** Se definirmos um objeto e, nessa notacao JSON, definirmos uma string com aspas simples,
     * alguns compiladores nao vao entender isso como string.
     */
    var obj = {
        foo: 'bar'
    };

})();

/** Declaracao de arrays e objetos */
(function() {
    var escopoLocal,
        escopoGlobal, 
        foo,
        obj,
        obj2,
        array;

    /** Um [ENTER para separar o assunto/contexto] */

    escopoLocal = "foo";
    escopoLocal.split("");
    console.log(escopoLocal);

    /** Um [ENTER para separar o assunto/contexto] */

    /** O ideal, se forem poucas propriedades, e definir tudo na mesma linha */
    obj = {foo: "bar"};

    /** Um [ENTER para separar o assunto/contexto] */

    /** Caso seja necessario definir mais propriedades, o ideal e quebrar em varias linhas. 
     * Cuidar com os espacos para diminuir o tamanho do codigo e porque pode gerar 
     * problemas com a ferramenta de versionamento.
    */
    obj2 = {
        foo: "bar",
        bar: "foo",
        foobar: "oi"
    }

    /** Um [ENTER para separar o assunto/contexto] */

    /** O mesmo vale para arrays.
     * Colchete de abertura na mesma linha em que esta sendo declarado e colchete de fechamento
     *  sempre em uma linha nova.
     */
    array = [
        1,
        2,
        3
    ]
})();