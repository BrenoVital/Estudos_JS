function calcularMedidas(){
  var distancia = prompt("Digite uma distância em metros (m):");
  var quilometros = distancia / 1000;
  var hectometros = distancia / 100;
  var decametros = distancia / 10;
  var decimetros = distancia * 10;
  var centimetros = distancia * 100;
  var milimetros = distancia * 1000;
  document.getElementById("resultado").innerHTML = "A distância de " + distancia + " metros corresponde a: <br>" + quilometros + " quilômetros (km). <br>" + hectometros + " hectômetros (hm). <br>" + decametros + " decâmetros (dam). <br>" + decimetros + " decímetros (dm). <br>" + centimetros + " centímetros (cm). <br>" + milimetros + " milímetros (mm).";
}