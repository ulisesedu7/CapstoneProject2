import MainComments from './comment-function.js';

const cardsSection = document.getElementById('cards-section');
const cBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi9NdZdiCp9O1MxDwJQW/comments';

class MainCards {
  static displayCards(baseUrl, number) {
    this.getInformation(baseUrl, number);
  }

  static getInformation(baseUrl, number) {
    const numberStr = number.toString();
    const newUrl = baseUrl + numberStr;
    fetch(newUrl)
      .then((response) => response.json())
      .then((result) => this.addCards(result, number));
  }

  static addCards({ name, image }, number) {
    if (name !== 'Not Found') {
      const newCard = document.createElement('article');
      newCard.classList.add('info-card');

      newCard.innerHTML = `<img src="${image.medium}" class="card-image">

      <div class="card-title">
        <h2 class="card-title">${name}</h2>
        <i class="fa-regular fa-heart fa-2x like-icon"></i>
      </div>

      <p class="likes-counter" title="${number}">0 likes</p>

      <button class="card-btn comments-popup" id="${number}">Comments</button>
      <button class="card-btn">Reservation</button>`;

      cardsSection.appendChild(newCard);
    }
  }

  static getPopUpInfo(baseUrl, number) {
    const numberStr = number.toString();
    const newUrl = baseUrl + numberStr;

    fetch(newUrl).then((response) => response.json())
      .then((result) => this.addCommentPopUp(result, number));
  }

  static addCommentPopUp({
    name, image, type, language, status, runtime, premiered,
  }, number) {
    const PopUpSpace = document.getElementById('modal-content');
    const commentPopUp = document.createElement('div');
    commentPopUp.classList.add('showType');

    commentPopUp.innerHTML = `
      <span class="close">&times;</span>
      <img src="${image.original}" alt="Movie-poster" class="main-img-popup"/>
      
      <h2 class="show-title">${name}</h2>
      <div class="show-details">
        <ul class="show-details-items">
        <li>Name: ${name}</li>
        <li>Type: ${type}</li>
        <li>Language: ${language}</li>
        <li>Status: ${status}</li>
        <li>Runtime: ${runtime}</li>
        <li>Premiered: ${premiered}</li>
        </ul>
      </div>

      <div class="comments">
        <h3 id="commentHeader"></h3>
        <ul id="allComments"></ul>
      </div>

      <form id="comment-form" class="comment-form">
        <h3 class="formHeader">Add a comment</h3>
        <div class="contact">
          <input type="text" placeholder="Your name" id="user-name" required/>
          <textarea
            name="comment"
            id="user-comment"
            cols="60"
            rows="10"
            placeholder="Your insights..."
            required
          ></textarea>
          <button type="submit" class="btn btn-comment" name="${number}">Comment</button>
        </div>
      </form>    
    `;

    PopUpSpace.appendChild(commentPopUp);

    // Show all Comments once the Pop Up appears
    MainComments.showAllComments(cBaseUrl, number);

    const mainForm = document.getElementById('comment-form');
    const userName = document.getElementById('user-name');
    const userComment = document.getElementById('user-comment');

    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (userName !== '' && userComment !== '') {
        MainComments.makeComment(cBaseUrl, userName.value, userComment.value, number);
      }

      MainComments.showAllComments(cBaseUrl, number);
    });
  }
}

export default MainCards;