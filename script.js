const criarTarefa = document.getElementById( 'criar-tarefa' );
const textoTarefa = document.getElementById( 'texto-tarefa' );
const listaTarefas = document.getElementById( 'lista-tarefas' );
const limpaTudo = document.getElementById( 'apaga-tudo' );
const removeFinalizado = document.getElementById( 'remover-finalizados' );
const removeSelecionado = document.getElementById( 'remover-selecionado' );
const salvaTarefas = document.getElementById( 'salvar-tarefas' );
const moveCima = document.getElementById( 'mover-cima' );
const moveBaixo = document.getElementById( 'mover-baixo' );
// Função remover cor
function removerCor() {
    const element = document.querySelectorAll( '.item-lista-tarefas' );
    for ( let ind = 0; ind < element.length; ind += 1 ) {
        element[ ind ].style.backgroundColor = 'transparent';
        element[ ind ].classList.remove( 'selected' );
    }
}
// Função adicionar cor
function adicionarCor( event ) {
    removerCor();
    const element = event.target;
    element.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
    element.classList.add( 'selected' );
}
// Função riscar item
function riscarItem( event ) {
    const element = event.target;
    if ( element.classList.contains( 'completed' ) ) {
        element.classList.remove( 'completed' );
        return;
    }
    element.classList.add( 'completed' );
}
// Função carregar página
function carregarPagina() {
    listaTarefas.innerHTML = localStorage.getItem( 'tarefas' );
    const element = document.querySelectorAll( '.item-lista-tarefas' );
    for ( let ind = 0; ind < element.length; ind += 1 ) {
        element[ ind ].addEventListener( 'dblclick', riscarItem );
        element[ ind ].addEventListener( 'click', adicionarCor );
    }
}
carregarPagina();
// Função adicionar tarefa
function adicionarTarefa() {
    if ( textoTarefa.value !== '' ) {
        const novoItem = document.createElement( 'li' );
        novoItem.classList.add( 'item-lista-tarefas' );
        listaTarefas.appendChild( novoItem );
        novoItem.addEventListener( 'dblclick', riscarItem );
        novoItem.addEventListener( 'click', adicionarCor );
        novoItem.innerHTML = textoTarefa.value;
        textoTarefa.value = '';
    }
}
criarTarefa.addEventListener( 'click', adicionarTarefa );
textoTarefa.addEventListener( 'keyup', ( event ) => {
    if ( event.keyCode === 13 ) {
        adicionarTarefa();
    }
} );
// Função apagar tudo
function apagaTudo() {
    while ( listaTarefas.firstChild ) {
        listaTarefas.removeChild( listaTarefas.firstChild );
    }
}
limpaTudo.addEventListener( 'click', apagaTudo );
// Função remover finalizados
function removerFinalizados() {
    const element = document.querySelectorAll( '.completed' );
    for ( let ind = 0; ind < element.length; ind += 1 ) {
        listaTarefas.removeChild( element[ ind ] );
    }
}
removeFinalizado.addEventListener( 'click', removerFinalizados );
// Função remover selecionados
function removerSelecionados() {
    const element = document.querySelectorAll( '.selected' );
    for ( let ind = 0; ind < element.length; ind += 1 ) {
        listaTarefas.removeChild( element[ ind ] );
    }
}
removeSelecionado.addEventListener( 'click', removerSelecionados );
// Função salvar tarefas
function salvarTarefas() {
    localStorage.setItem( 'tarefas', listaTarefas.innerHTML );
}
salvaTarefas.addEventListener( 'click', salvarTarefas );
// Função mover para cima
function moverCima() {
    const selecionado = document.querySelector( '.selected' );
    if ( selecionado !== null ) {
        const anteriorItem = selecionado.previousElementSibling;
        if ( anteriorItem !== null ) {
            listaTarefas.insertBefore( selecionado, anteriorItem );
        }
    }
}
moveCima.addEventListener( 'click', moverCima );
// Função mover para baixo
function moverBaixo() {
    const selecionado = document.querySelector( '.selected' );
    if ( selecionado !== null ) {
        const proximoItem = selecionado.nextElementSibling;
        if ( proximoItem !== null ) {
            listaTarefas.insertBefore( proximoItem, selecionado );
        }
    }
}
moveBaixo.addEventListener( 'click', moverBaixo );