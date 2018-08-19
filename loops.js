// for, for in, for of, while, do while

var x = 0;

// while (x > 1) {
//     console.log(`x e igual a ${x}`);
//     x++;
// }

// do while
// do {
//     console.log(`x e igual a ${x}`);
//     x++;
// } while (x > 1);

// for
// for (var i = 0; i < 10; i++) {
//     console.log(i);
    
// }

// for in: Itera entre as propriedades de um objeto.
var obj = { 
    nome: 'John',
    sobrenome: 'Snow'
 };

 // O valor da chave vai chamar de prop dentro do objeto.
 // Exibir todas as chaves de um objeto.
// for (var prop in obj) {
//     console.log(prop);
// }

// Para exibir o valor das propriedades.
for (var prop in obj) {
    console.log(obj[prop]);
}