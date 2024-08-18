import '../css/style.css';
import { infoCards } from './data.js';
import { createCard } from './components/createCards.js';

const infoCardsGrid = document.querySelector('.info-cards-grid');
const filterDivs = document.querySelectorAll('.cards-box .card');

// Função para renderizar os cards, com filtragem opcional
function renderCards(filterType = 'all') {
    let filteredCards = infoCards;

    if (filterType !== 'all') {
        filteredCards = infoCards.filter(card => card.type === filterType);
    }

    infoCardsGrid.innerHTML = filteredCards.map(createCard).join('');
}

// Adiciona um listener para cada div de filtro
filterDivs.forEach(div => {
    div.addEventListener('click', () => {
        const filterType = div.getAttribute('data-type');
        renderCards(filterType);
    });
});

// Renderiza todos os cards inicialmente
renderCards();
