//Manipulação de datas com JavaScript 

//Data atual
var data = new Date();

//Dia
var dia = data.getDate();

//Mês
var mes = data.getMonth()

//Ano
var ano = data.getFullYear();

//Hora
var hora = data.getHours();

//Minutos
var min = data.getMinutes();

//Segundos
var seg = data.getSeconds();

//Exibindo a data formato brasileiro
alert("Olá, seja bem vindo a hora atual: " + dia + "/" + mes + "/" + ano + " " + hora + ":" + min + ":" + seg);


//Exibindo a data no HTML
function horaAtual() {
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  var seg = data.getSeconds();
  return data + hora + ":" + min + ":" + seg;

}
document.getElementById("hora").innerHTML = horaAtual();
