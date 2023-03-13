function mudancaPreco(){
  let precoAnterior = prompt("Qual é o preço anterior do produto?");
  let precoAtual = prompt("Qual é o preço atual do produto?");
  let resultado = document.getElementById("resultado");
  let precoCustava = parseFloat(precoAnterior).toFixed(2).toString().replace(",", ".");
  let precoCusta = parseFloat(precoAtual).toFixed(2).toString().replace(",", ".");
  let diferencaMaior = precoCusta - precoCustava;  
  let diferencaMenor = precoCustava - precoCusta;
  let porcentagemMaior = (diferencaMaior / precoCustava) * 100;
  let porcentagemMenor = (diferencaMenor / precoCustava) * 100;
  if(precoAtual > precoAnterior){
    resultado.innerHTML = `O produto custava R$${precoCustava} e agora custa R$${precoCusta}. <br>Hoje o produto está mais caro.<br>O preço subiu R$ ${diferencaMaior.toFixed(2)} em relação ao preço anteior.<br>Uma variação de ${porcentagemMaior.toFixed(2)}% para mais.`;
  }else{
    resultado.innerHTML = `O produto custava R$${precoCustava} e agora custa R$${precoCusta}. <br>Hoje o produto está mais barato.<br>O preço desceu R$ ${diferencaMenor.toFixed(2)} em relação ao preço anteior.<br>Uma variação de ${porcentagemMenor.toFixed(2)}% para baixo.`;
  }  
}