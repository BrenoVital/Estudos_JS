function calcularNotas(){
  let nomeAluno = prompt("Qual é o nome do aluno?");
  let nota1 = prompt(`Primeira nota de ${nomeAluno}:`);
  let nota2 = prompt(`Segunda nota de ${nomeAluno}:`);
  let resultado =document.getElementById("resultado");
  let nomeSituacao = `<strong>Analisando a situação de ${nomeAluno}</strong>`;
  let media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
  if (media >= 6 && media < 10){
    var aprovado = "Aprovado";
    aprovado = aprovado.fontcolor("green");
    resultado.innerHTML = `${nomeSituacao} <br> Com as notas ${nota1} e ${nota2} a <strong>média é ${media}</strong><br>Com média acima de 6,00 o aluno está ${aprovado}.`;
  } else if (media >= 3 && media < 6){
    var recuperacao = "Recuperação";
    recuperacao = recuperacao.fontcolor("yellow");
    resultado.innerHTML = `${nomeSituacao} <br> Com as notas ${nota1} e ${nota2} a <strong>média é ${media}</strong><br>Com média entre 3,00 e 6,00 o aluno está em ${recuperacao}.`;
  } else if (media <= 3){
    var reprovado = "Reprovado";
    reprovado = reprovado.fontcolor("red");    
    resultado.innerHTML = `${nomeSituacao} <br> Com as notas ${nota1} e ${nota2} a <strong>média é ${media}</strong><br>Com média abaixo de 3,00 o aluno está ${reprovado}.`;
  }
  
}