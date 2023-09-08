document.addEventListener('DOMContentLoaded', function(){
const buttons = document.querySelectorAll('[data-tab-button]'); //recupera botão
const questions= document.querySelectorAll('[data-faq-question]');

/*Mostrar Botoes ao rolar a Pagina */
const heroSection = document.querySelector('.hero'); //Para Saber qaundo a rolagem da pagina passou pelo hero precisamos saber a altura dele
const alturaHero = heroSection.clientHeight;

//Acessar evento do Window para saber onde a pagina esta
window.addEventListener('scroll', function(){
    //Pegar posição do Scroll no navegador
    const posicaoAtual = window.scrollY;

    if(posicaoAtual < alturaHero){
        ocultaElementosDoHeader();
    }else{
        exibeElementosDoHeader();
    }
    
})


//Seção de atrações, programação das abas
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

    //Seção FAQ, accordion
    /*Efeito Sanfona Do*/
    for(let i=0 ; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

    function abreOuFechaResposta(elemento){
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode; /*Acessar elemento Pai*/

        elementoPai.classList.toggle(classe);
    }
})

//Função para adicionar classe hidden no Menu

function ocultaElementosDoHeader(){
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader(){
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}

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