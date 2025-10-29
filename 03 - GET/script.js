function carregarAlunos() {
    const container = document.querySelector('#alunos-container');

    fetch("http://localhost:3000/alunos")
    .then( resposta => resposta.json())
    .then( dados =>{
        dados.forEach(aluno => {
            container.innerHTML += `
                <div class="card">
                    <img src="${aluno.foto}" alt="">
                    <h3>${aluno.nome}</h3>
                    <p><strong>Matrícula:</strong>${aluno.matricula}</p>
                    <p><strong>Turma:</strong>${aluno.turma}</p>
                </div>
            `
        });
    })
    .catch( erro => console.log(erro))
}

carregarAlunos();