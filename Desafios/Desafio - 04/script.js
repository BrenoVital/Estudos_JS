function calcularTroco() {
  var produto = prompt("Que produto você está comprando?");
  var preco = prompt("Quanto custa " + produto + " que você está comprando?");
  var dinheiro = prompt("Qual foi o valor que você deu para pagar " + produto + "?");
  var troco = dinheiro - preco;
  alert(`Você comprou ${produto} que custou R$ ${preco}.\nDeu R$ ${dinheiro} em dinheiro e vai receber R$ ${troco} de troco.\nVolte Sempre!`)
}

