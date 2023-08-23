const form = document.getElementById('form-adiciona');
const imgFoto = '<img src="./images/usuario.png" alt="icone de usuario">';
const imgTelefone = '<img src="./images/telefone.png" alt="icone de telefone para ligação"/>';
const contatos = [];
const num = [];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});


function adicionaLinha() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} ja foi adicionado`);
    } else {

        contatos.push(inputNomeContato.value);

        let linha = '<tr>';
            linha += `<td>${imgFoto}</td>`;
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputNumeroContato.value}</td>`;
            linha += `<td>${imgTelefone}</td>`;
            linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
