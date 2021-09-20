const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const limpaTudo = document.getElementById('apaga-tudo');
const removeFinalizado = document.getElementById('remover-finalizados');
const removeSelecionado = document.getElementById('remover-selecionado');
const salvaTarefas = document.getElementById('salvar-tarefas');
const moveCima = document.getElementById('mover-cima');
const moveBaixo = document.getElementById('mover-baixo');
// Função remover cor
function removerCor() {
    const element = document.querySelectorAll('.item-lista-tarefas');
    for (let ind = 0; ind < element.length; ind += 1) {
        element[ind].style.backgroundColor = 'transparent';
        element[ind].classList.remove('selected');
    }
}
// Função adicionar cor
function adicionarCor(event) {
    removerCor();
    const element = event.target;
    element.style.backgroundColor = 'rgb(128, 128, 128)';
    element.classList.add('selected');
}
// Função riscar item
function riscarItem(event) {
    const element = event.target;
    if (element.classList.contains('completed')) {
        element.classList.remove('completed');
        return;
    }
    element.classList.add('completed');
}