// GET
carregarAlunos();

function carregarAlunos() {
    const container = document.querySelector('#alunos-container');

    fetch("http://localhost:3000/alunos", {method:'GET'})
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


// POST
const form_aluno = document.querySelector('#form-aluno');

form_aluno.addEventListener('submit', inserirAluno)

function inserirAluno(event){
    event.preventDefault();

    // Obter os dados
    const form = new FormData(event.target);

    // Construir objeto
    aluno = {
        nome: form.get('nome'),
        matricula: form.get('matricula'),
        turma: form.get('turma'),
        foto: form.get('foto'),
    }

    // Enviar para a API
    fetch("http://localhost:3000/alunos", {
        method:'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(aluno),
    })
    .then( resposta => console.log(resposta))
    .catch( erro => console.log(erro) )
}