//Por qual motivo o código abaixo retorna com erros?

{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
console.log(cor);

// Const e Let não vazam do escopo de bloco, apenas var vaza.

// Como corrigir o erro abaixo?

const dois = 2;
function somarDois(x) {
    return x + dois;
} 
function dividirDois(x) {
    return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
// Alterar a palavra chave var para let ou const no escopo de bloco.

var numero = 50;

for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);
