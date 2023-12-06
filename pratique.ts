function multiplicacao(x: number, y: number): number {
    return x * y;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultado = multiplicacao(5, 3);
console.log("Resultado da multiplicação:", resultado);

const msg = saudacao("Gustavo");
console.log(msg);