import './style.css';

const baseUrl = 'https://api.tvmaze.com/shows/';

/*
Ulises JS
*/
// Imports 
import MainCards from './modules/add-cards.js';
import galaxyIcon from './assets/images/galaxyicon.png';

// Const from DOM
const cardsContainer = document.getElementById('cards-section');
const mainLogo = document.getElementById('main-logo');

// Load first cards function
function loadAllCards () {
  for(var i=0; i < 6; i++) {
    let number = i + 8;
    MainCards.displayCards(baseUrl, number)
  } 
}

document.addEventListener('DOMContentLoaded', loadAllCards);

// Insert Main Logo Icon
const myLogo = new Image();
myLogo.src = galaxyIcon;
myLogo.classList.add('main-img-logo');
mainLogo.appendChild(myLogo);

// Function to change heart color
cardsContainer.addEventListener('click', (e) => {

  if (e.target.classList.contains('fa-solid') === true) {
    e.target.classList.remove('fa-solid');
    e.target.classList.add('fa-regular');
  } else if (e.target.classList.contains('fa-regular') === true) {
    e.target.classList.remove('fa-regular');
    e.target.classList.add('fa-solid');
      }

});

/*
Addisu JS
*/
