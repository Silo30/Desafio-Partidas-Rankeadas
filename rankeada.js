let rankDoHeroi = calcularRank(200,190)
let nivelDoHeroi;

function calcularRank(vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas;
    return saldoRankeadas
}

if (rankDoHeroi <= 10){
    nivelDoHeroi = "ferro"
} else if (rankDoHeroi <=20){
    nivelDoHeroi = "bronze"
}

console.log("O Herói tem de saldo " + rankDoHeroi + " vitórias e está no nível de " + nivelDoHeroi);