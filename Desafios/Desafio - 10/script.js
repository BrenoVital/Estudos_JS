function resolvendoBhaskara(){
    var a = prompt("Qual é o valor de a?");
    var b = prompt("Qual é o valor de b?");
    var c = prompt("Qual é o valor de c?");
    var delta = (b*b) - (4*a*c);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `A equação atual é ${a}x² + ${b}x + ${c} = 0 <br>O cálculo realizado será: Δ = ${b}² - 4 . ${a} . ${c} <br>O valor cálculado foi Δ = ${delta} <br>`;
    if(delta < 0){
        resultado.innerHTML += "O delta é negativo, não há raízes reais.";
    }else if(delta == 0){
        var x = -b / (2*a);
        resultado.innerHTML += `O delta é igual a zero, há uma raiz real: ${x}`;
    }else{
        var x1 = (-b + Math.sqrt(delta)) / (2*a);
        var x2 = (-b - Math.sqrt(delta)) / (2*a);
        resultado.innerHTML += `O delta é positivo, há duas raízes reais: <br>x' = ${x1} <br>x'' = ${x2}`;
    }
}
