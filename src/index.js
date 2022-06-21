import './style.css';

const baseUrl = 'https://api.tvmaze.com/shows/';

/*
Ulises JS
*/
import MainCards from './modules/add-cards.js';

function loadAllCards () {
  for(var i=0; i < 6; i++) {
    let number = i + 7;
    MainCards.displayCards(baseUrl, number)
  } 
}

document.addEventListener('DOMContentLoaded', loadAllCards);


/*
Addisu JS
*/
