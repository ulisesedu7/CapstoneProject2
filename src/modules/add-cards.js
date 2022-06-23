import commentPopup from './comment.js';

const cardsSection = document.getElementById('cards-section');

class MainCards {
  static displayCards (baseUrl, number) {
    this.getInformation(baseUrl, number);
  }

  static getInformation (baseUrl, number) {
    const numberStr = number.toString();
    const newUrl = baseUrl + numberStr;
    fetch(newUrl)
    .then(response => response.json())
    .then(result => this.addCards(result));
  }

  static addCards ({name, image}) {
    const newCard = document.createElement('article');
    newCard.classList.add('info-card');

    newCard.innerHTML = 
    `<img src="${image.medium}" class="card-image">

    <div class="card-title">
      <h2 class="card-title">${name}</h2>
      <i class="fa-regular fa-heart fa-2x like-icon"></i>
    </div>

    <p class="likes-counter">3 likes</p>

    <button class="card-btn comments-popup">Comments</button>
    <button class="card-btn">Reservation</button>`

    cardsSection.appendChild(newCard);
  }

  static getPopUpInfo (baseUrl, number) {
    const numberStr = number.toString();
    const newUrl = baseUrl + numberStr;

    fetch(newUrl).then(response => response.json())
    .then(result => this.addCommentPopUp(result));
  }

  static addCommentPopUp({name, image, type, language, status, runtime, premiered}) {
    const PopUpSpace = document.getElementById('modal-content');
    const commentPopUp = document.createElement('section');
    commentPopUp.classList.add('showType');

    commentPopUp.innerHTML = `
      <span class="close">&times;</span>
      <img src="${image.original}" alt="Movie-poster" class="main-img-popup"/>
      
      <h2 class="show-title">${name}</h2>
      <div class="show-details">
        <ul>
        <li>Name: ${name}</li>
        <li>Type: ${type}</li>
        <li>Language: ${language}</li>
        <li>Status: ${status}</li>
        <li>Runtime: ${runtime}</li>
        <li>Premiered: ${premiered}</li>
        </ul>
      </div>

      <div class="comments">
        <h3 class="commentHeader"></h3>
        <ul class="allComments"></ul>
      </div>

      <form method="post" id="comment-form" class="comment-form">
        <h3 class="formHeader">Add a comment</h3>
        <div class="contact">
          <input type="text" placeholder="Your name" id="name" />
          <textarea
            name="comment"
            id="msg"
            cols="60"
            rows="10"
            placeholder="Your insights..."
          ></textarea>
          <button type="submit" class="btn btn-primary">Comment</button>
        </div>
      </form>    
    `

  PopUpSpace.appendChild(commentPopUp);
  }

}

export default MainCards;