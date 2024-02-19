function calcularNivel(vitorias, derrotas) {


    //saldo de vitórias
    let name = 'Daniele';
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Níveis
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Saldo de vitórias e o nível
    return `Nosso herói ${name} tem saldo de ${saldoVitorias} está no nível ${nivel}`;
}

let resultado = calcularNivel(200, 80);
console.log(resultado);


    


