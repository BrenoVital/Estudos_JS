function calcularMedidas(){
  var temperatura = prompt("Digite uma temperatura em °C (Celsius):");
  var kelvin = parseFloat(temperatura) + 273.15;
  var farenheit = parseFloat(temperatura) * 1.8 + 32;
  kelvin = farenheit.toString().replace(".", ",");
  farenheit = farenheit.toString().replace(".", ",");
  var resultado = "A temperatura em Kelvin é: " + kelvin + " K" + "A temperatura em Farenheit é: " + farenheit + " °F";
  document.getElementById("resultado").innerHTML = resultado;
}