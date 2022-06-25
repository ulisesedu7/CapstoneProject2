import './style.css';
import MainComments from './modules/comment-function.js';

/*
Ulises JS
*/
// Imports
import MainCards from './modules/add-cards.js';
import LikesInfo from './modules/likes-count.js';
import galaxyIcon from './assets/images/galaxyicon.png';
import showsCounter from './modules/shows-counter.js';

const baseUrl = 'https://api.tvmaze.com/shows/';
const iBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi9NdZdiCp9O1MxDwJQW/likes/';
const cBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi9NdZdiCp9O1MxDwJQW/comments';

// Const from DOM
const cardsContainer = document.getElementById('cards-section');
const mainLogo = document.getElementById('main-logo');

const modalContainer = document.getElementById('myModal');

// Load first cards function
function loadAllCards() {
  const numberOfShows = 50;
  for (let i = 0; i < numberOfShows; i += 1) {
    const number = i + 6;
    MainCards.displayCards(baseUrl, number);
  }

  showsCounter();
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
  } else if (e.target.classList.contains('fa-regular') === true) {
    const likeId = e.target.parentElement.nextElementSibling.title;

    e.target.classList.remove('fa-regular');
    e.target.classList.add('fa-solid');

    // Send New Like
    LikesInfo.sendLikesInfo(iBaseUrl, likeId);

    // Update Likes Info
    LikesInfo.receiveLikesInfo(iBaseUrl);
  }

  // Function to display Modal Window
  if (e.target.classList.contains('comments-popup') === true) {
    const posterId = e.target.id;

    MainCards.getPopUpInfo(baseUrl, posterId);

    const commentPopUp = document.querySelector('.modal');
    commentPopUp.classList.add('show');
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
    const userName = document.getElementById('user-name');
    const userComment = document.getElementById('user-comment');
    const posterId = e.target.name;

    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (userName !== '' && userComment !== '') {
        MainComments.makeComment(cBaseUrl, userName.value, userComment.value, posterId);
      }
    });
  }
});
