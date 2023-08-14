document.addEventListener('DOMContentLoaded', function(){
const buttons = document.querySelectorAll('[data-tab-button]'); //recupera botão


//Adiciona Evento ao clique do botão (mudar de ABA)
//PEga toda a lista, remove a classe active e mostra a classe selecionada

for (let i = 0 ; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(botao){
        /* console.log(botao.target.dataset.tabButton);Buscar informação no console */
        const abaAlvo= botao.target.dataset.tabButton;
        const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
        // Pegar<ul> remover classe active
        escondeTodasAbas();
        //Pegar abaAlvo e adicionar a classe para garantir que apenas uma <ul> seja exibida
        aba.classList.add('shows__list--is-active');

        //Acessar botão atual
        removeBotaoAtivo();
        botao.target.classList.add('shows__tabs__button--is-active');
        
    })
}

})

//Remove a classe CSS Active do BOTAO

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for( let i =0 ; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

//Remove a classe CSS Active das ABAS
function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i=0; i < tabsContainer.length; i++ ){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}