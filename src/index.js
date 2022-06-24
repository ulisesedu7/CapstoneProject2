import './style.css';
// import commentPopup from './modules/comment.js';
import MainComments from './modules/comment-function.js';

const baseUrl = 'https://api.tvmaze.com/shows/';
const iBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi9NdZdiCp9O1MxDwJQW/likes/';

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

const modalContainer = document.getElementById('myModal');

// Load first cards function
function loadAllCards () {
  const numberOfShows = 9;
  for(var i=0; i < numberOfShows; i++) {
    let number = i + 8;
    MainCards.displayCards(baseUrl, number)
  } 

  const tvShowsCounter = document.getElementById('tv-counter');

  tvShowsCounter.innerHTML = 'TV Shows (' + numberOfShows + ')';
}

document.addEventListener('DOMContentLoaded', loadAllCards);

// Display Likes 
document.addEventListener('DOMContentLoaded', LikesInfo.receiveLikesInfo(iBaseUrl));

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
    
  } 
  else if (e.target.classList.contains('fa-regular') === true) {
    let likeId = e.target.parentElement.nextElementSibling.title;

    e.target.classList.remove('fa-regular');
    e.target.classList.add('fa-solid');

    // Send New Like 
    LikesInfo.sendLikesInfo(iBaseUrl, likeId);

  }


  // Function to display Modal Window
  if (e.target.classList.contains('comments-popup') === true) {
    
    const posterId = e.target.id;

    MainCards.getPopUpInfo(baseUrl, posterId);

    const commentPopUp = document.querySelector('.modal');
    commentPopUp.classList.add('show');

    // MainComments.showAllComments(posterId);
    
  }

});


// Function to Close the Modal
modalContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('close') === true) {
    const commentPopUp = document.querySelector('.modal');
    commentPopUp.classList.remove('show');

    const showType = document.querySelector('.showType');

    showType.remove();

  }

  if (e.target.classList.contains('btn-comment') === true) {
     const mainForm = document.getElementById('comment-form');

    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    const userName = document.getElementById('username').value;
    const userComment = document.getElementById('userComment').value;
    const posterId = e.target.name;

    if (userName !== '' && userComment !== '') {

      console.log(MainComments.makeComment(userName, userComment, posterId));
    }
  }
});
