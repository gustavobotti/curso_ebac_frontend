let alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Ana", nota: 9 },
    { nome: "Pedro", nota: 4 }
];

function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(function(a) {
        return a.nota >= 6;
    });
}


let alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);
