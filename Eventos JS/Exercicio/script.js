function somar() {
  var n1 = document.getElementById("n1");
  var n2 = document.getElementById("n2");
  var tn1 = Number(n1.value)
  var tn2 = Number(n2.value)
  var resultado = document.getElementById("valor");
  var soma = tn1 + tn2;
  resultado.innerHTML = `A soma entre ${tn1} e ${tn2} é igual á ${soma}.`;
}

function positivoNegativo() {
  var n3 = document.getElementById("n3");
  var tn3 = Number(n3.value);
  var resultado2 = document.getElementById("valor2");
  if (tn3 <= 0) {
    resultado2.style.color = "red";
    resultado2.innerHTML = `O número informado é negativo.`;
  } else {
    resultado2.style.color = "green";
    resultado2.innerHTML = `O número informado é positivo.`;
  }
}

function parImpar() {
  var n4 = document.getElementById("n4");
  var tn4 = Number(n4.value);
  var resultado3 = document.getElementById("valor3");
  if (tn4 % 2 == 0) {
    resultado3.innerHTML = `O número informado é par.`;
  } else {
    resultado3.innerHTML = `O número informado é impar.`;
  }
}

function primo() {
  var n5 = document.getElementById("n5");
  var tn5 = Number(n5.value);
  var resultado4 = document.getElementById("valor4");
  var cont = 0;
  for (var i = 1; i <= tn5; i++) {
    if (tn5 % i == 0) {
      cont++;
    }
  } if (cont == 2) {
    resultado4.style.color = "green";
    resultado4.innerHTML = `O número informado é primo.`;
  } else {
    resultado4.style.color = "red";
    resultado4.innerHTML = `O número informado não é primo.`;
  }
}

function maiorQue() {
  var n6 = document.getElementById("n6");
  var tn6 = Number(n6.value);
  var resultado5 = document.getElementById("valor5");
  if (tn6 > 10) {
    resultado5.style.color = "green";
    resultado5.innerHTML = `O número informado é maior que 10.`;
  } else {
    resultado5.style.color = "red";
    resultado5.innerHTML = `O número informado é menor que 10.`;
  } 
}