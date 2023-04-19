import cardsMarkup from '../templates/card-menu.handlebars';
import cards from '../menu.json';

const refslistMenu = document.querySelector('.js-menu');
const succesMarkup = cardsMarkup(cards);

refslistMenu.insertAdjacentHTML('beforeend', succesMarkup);