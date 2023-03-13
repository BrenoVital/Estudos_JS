function reajusteSalarial() {
    var nomeFuncionario = prompt("Qual é o nome do funcionário?");
    var salarioAtual = parseFloat(prompt(`Qual é o salário atual de ${nomeFuncionario}?`));
    var porcentagemAumento = prompt(`O salário de ${nomeFuncionario} vai ser reajustado em qual porcentagem?`);
    var valorAumento = salarioAtual * (porcentagemAumento / 100);
    var salarialAumentado = salarioAtual * (porcentagemAumento / 100) + salarioAtual;
    salarioAtual = salarioAtual.toString().replace(".", ",");
    porcentagemAumento = porcentagemAumento.toString().replace(".", ",");
    valorAumento = valorAumento.toFixed(2).toString().replace(".", ",");
    salarialAumentado = salarialAumentado.toFixed(2).toString().replace(".", ",");
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `O salário atual era R$ ${salarioAtual}.<br>Com o aumento de ${porcentagemAumento}%, o salário vai aumentar ${valorAumento} no próximo mês.<br>E a partir daí, ${nomeFuncionario} vai passar a ganhar R$ ${salarialAumentado}.`;
}