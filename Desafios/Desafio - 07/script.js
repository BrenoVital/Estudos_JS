var valorDolar = parseFloat(prompt("Antes de mais nada, quanto está a cotação do dólar hoje?").toString().replace(",", "."));
function calcularDolar(){
  var valorReal = parseInt(prompt("Quantos R$ você tem na carteira?").toString().replace(".",","));
  var valorConvertido = valorReal / valorDolar;
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = `Com R$ ${valorReal} reais, você pode comprar U$ ${valorConvertido.toFixed(2).replace(".",",")} dólares.`;
}