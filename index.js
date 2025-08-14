function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function definirNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}


let vitorias = 154;
let derrotas = 30;
let saldoVitorias = calcularSaldo(vitorias, derrotas);
let nivel = definirNivel(vitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
