function anoBissexto() {
  var anoVerificar = prompt("Qual é o ano que você quer verificar?");
  var ano = parseInt(anoVerificar);
  var resultado = document.getElementById("resultado");
  var imgCorreta = '<img src="correto.png" width="24px" height="24px">';
  var imgErrado = '<img src="cruz.png" width="24px" height="24px">';
  var texto = "Analisando o ano de " + ano + "...<br>";
  var bissexto = "é bissexto".toUpperCase();
  var naoBissexto = "não é bissexto".toUpperCase();
  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    resultado.innerHTML = `${texto}O ano de ${ano} ${bissexto} ${imgCorreta}`;
  } else {
    resultado.innerHTML = `${texto}O ano de ${ano} ${naoBissexto} ${imgErrado}`;
  }
}
