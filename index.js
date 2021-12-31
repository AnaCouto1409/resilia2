//variavies usando tipo de frutas
var res = prompt("Digite uma fruta");
var alimentos =["tomate", "laranja", "abacaxi","limão"]
var semanaAnterior = 6
var semanaAtual = 10
var total = semanaAnterior - semanaAtual
if (res === alimentos [0] || res === alimentos[1] res === alimentos[2] || res === alimentos[3]){
    if(semanaAtual > semanaAnterior){
        console.log (´O ${alimentos} aumentou ${total} reais´)
    }else if (semanaAtual < semanaAnterior){
        console.log(´O ${alimentos} diminuiu ${total} reais´)
    }else if (semanaAtual === semanaAnterior){
        console.log(´Não houve alteraçãono preço ${alimentos}´)
    }
    else {
        console.log(´${res} indisponível na feira´)
    }
}