
function calcularDesconto(){
    var produto = prompt("Qual é o produto que você está comprando?");
    produto = produto.toUpperCase();
    var preco = prompt(`Qual é o preço do ${produto}?`);
    var desconto = preco * 10 / 100;
    var precoDesconto = preco - desconto;
    preco = preco.toString().replace(".", ",");
    desconto = desconto.toFixed(2).toString().replace(".", ",");
    precoFinal = precoDesconto.toFixed(2).toString().replace(".", ",");
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `Calculando o desconto de 10% no produto ${produto}.<br>O preço original era R$ ${preco}.<br>Você acaba de ganhar R$ ${desconto} de desconto (-10%).<br>No fim, você vai pagar R$ ${precoFinal} no produto ${produto}.`;

}



