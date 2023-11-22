nickJogador = prompt("Qual seu nick? ")

let numeroVitórias = prompt("Quantas vitórias no total voce possui? ")

let numeroDerrotas = prompt("Quantas derrotas no total voce possui? ")


let saldo = somarSaldo(numeroVitórias,numeroDerrotas)

function somarSaldo(numeroVitórias, numeroDerrotas){
    let saldoDeVitorias = numeroVitórias - numeroDerrotas
    return saldoDeVitorias 
}

if (saldo <= 10) {
    console.log (nickJogador + " tem de saldo de " + saldo +" está no nível Ferro")
} 

if (saldo > 10 && saldo <=20){
    console.log (nickJogador + " tem de saldo de " + saldo +" está no nível Bronze")
} 

if (saldo > 20 && saldo <=50){
    console.log (nickJogador + " tem de saldo de " + saldo +" está no nível Prata")
} 

if (saldo > 50 && saldo <=80){
    console.log (nickJogador + " tem de saldo de " + saldo +" está no nível Ouro")
} 

if (saldo > 80 && saldo <=90){
    console.log (nickJogador + " tem de saldo de " + saldo +" está no nível Diamante")
} 

if (saldo >90 && saldo <=100){
    console.log (nickJogador +  " tem de saldo de " + saldo +" está no nível Lendário")
} 

if (saldo > 100) {
    console.log (nickJogador + " tem de saldo de " + saldo +" está no nível Imortal")
}

