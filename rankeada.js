let rankDoHeroi = calcularRank(200,150)
let nivelDoHeroi;

function calcularRank(vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas;
    return saldoRankeadas
}

if (rankDoHeroi <= 10){
    nivelDoHeroi = "ferro"
} else if (rankDoHeroi === 11 || rankDoHeroi <= 20){
    nivelDoHeroi = "bronze"
} else if (rankDoHeroi  === 21 || rankDoHeroi <=50){
    nivelDoHeroi = "prata"
} else if (rankDoHeroi  === 51 || rankDoHeroi <=80){
    nivelDoHeroi = "ouro"
} else if (rankDoHeroi  === 51 || rankDoHeroi <=80){
    nivelDoHeroi = "diamante"
} else if (rankDoHeroi  === 81 || rankDoHeroi <=100){
    nivelDoHeroi = "Lendário"
} else {
    nivelDoHeroi = "Imortal"
}

console.log("O Herói tem de saldo " + rankDoHeroi + " vitórias e está no nível de " + nivelDoHeroi);