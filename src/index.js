import './style.css';
import commentPopup from './modules/comment.js';

const baseUrl = 'https://api.tvmaze.com/shows/';

/*
Ulises JS
*/
// Imports 
import MainCards from './modules/add-cards.js';
import LikesInfo from './modules/likes-count.js';
import galaxyIcon from './assets/images/galaxyicon.png'

// Const from DOM
const cardsContainer = document.getElementById('cards-section');
const mainLogo = document.getElementById('main-logo');
const iBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Sukb2o3ILkdyrdEG0stQ/likes/';

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

// Likes Counter
class LikesPerObject {
  constructor(item_id, likes) {
    this.item_id = item_id;
    this.likes = likes;
  }
}

// Function to change heart color
cardsContainer.addEventListener('click', (e) => {

  if (e.target.classList.contains('fa-solid') === true) {
    e.target.classList.remove('fa-solid');
    e.target.classList.add('fa-regular');

  } 
  else if (e.target.classList.contains('fa-regular') === true) {
    e.target.classList.remove('fa-regular');
    e.target.classList.add('fa-solid');


  }


  // Function to display Modal Window
  if (e.target.classList.contains('comments-popup') === true) {
    
    MainCards.getPopUpInfo(baseUrl, 13);

    const commentPopUp = document.querySelector('.modal');
    commentPopUp.classList.add('show');
  }

});

/*
Addisu JS
*/
