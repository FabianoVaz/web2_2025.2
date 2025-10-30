/*
    GET (body: null) -> SELECT | LIST | FILTER | FIND ID ...
    POST (body: json) -> INSERT | ADD | CREATE
    DELETE (body: null) -> DELETE
    PUT (body: json) -> UPDATE

    Listar: GET /alunos         ->
    Localizar: GET /alunos/{id} ->
    Inserir: POST /alunos       -> json
    Excluir: DELETE /alunos/{id}->
    Editar: PUT /alunos/{id}    -> json

    listar: {method: GET, endpoint: /alunos, return: json, input:()}
    Object get-listar(){ return JSON}
    
    insert: {method: POST, endpoint: /alunos, return: json, input:(json)}
    Object post-inserir( json ){return json-inserido;}
*/

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

carregarAlunos();