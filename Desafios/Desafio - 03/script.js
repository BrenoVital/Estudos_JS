function antesDepois() {
  var numeroInteiro = prompt("Digite um número inteiro qualquer:");
  var numeroInteiro = parseInt(numeroInteiro);
  var numeroAnterior = numeroInteiro - 1;
  var numeroPosterior = numeroInteiro + 1;
  alert(`Antes de ${numeroInteiro}, temos o número ${numeroAnterior}. \nDepois de ${numeroInteiro}, temos o número ${numeroPosterior}.`);
}