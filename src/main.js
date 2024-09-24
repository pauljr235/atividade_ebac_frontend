const alunos = [
    {nome: "Paulo", nota: 5},
    {nome: "Joao", nota: 7},
    {nome: "Maria", nota: 9},
    {nome: "Joana", nota: 3},
    {nome: "Felipe", nota: 6},
    {nome: "Cassio", nota: 4}

]

function filtrarAprovados(alunos){
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);