//exercicios do alimento -- com javascript
//var foods = prompt("Qual a opção de alimento que voce deseja verificar se houver alimento?")
//if (foods == "tomate" || foods == "laranja" || foods == "abacaxi" || foods == "limao"){
  //  var old = prompt ("Qual é o valor do alimento semana passada?");
    //var current = prompt ("Qual é o valo do alimento essa semana?");
//}
//if (parseFloat(old) < (parseFloat(current)){
  //  console.log ("O alimento" + foods + "aumentou" (parseFloat(current) - parseFloat(old)));
//}
//else if (parseFloat(old) > parseFloat(current)){
  //  console.log ( "O alimento" + foods + "diminuiu" + parseFloat(current)- parseFloat(old)));
//}
//else if(parseFloat(old) == parseFloat(current)){
  //  console.log("Não houve alteração");
//} else{
  //  console.log("Alimento indisponível");
//}

//outra versão do exercicio 23/12

var alimentos = prompt("Qual alimento voce quer?")
if (alimentos == "tomate" || alimentos == "laranja" || alimentos == "abacaxi" || "limão"){
    var valorSemanaAnterior = prompt ("Qual é o valor da semana passada?");
    var valorSemanaAtual = prompt ("Qual o valor da semana atual?");

    if(parseFloat(valorSemanaAtual)> parseFloat(valorSemanaAnterior)){
        alert("O" + alimentos + "aumentou" + (parseFloat(valorSemanaAtual)- parseFloat(valorSemanaAnterior))+ "reais")
    }
    else if (parseFloat(valorSemanaAtual)< parseFloat(valorSemanaAnterior)){
        alert ("O" + alimentos + "diminuiu:" + (parseFloat(valorSemanaAnterior)- parseFloat(valorSemanaAtual))+"reais")
    }
    else{
        alert("Não houve aumento no preço do" + alimentos)
    }
}else{
    alert(alimentos + "Não está disponível na feira")
}