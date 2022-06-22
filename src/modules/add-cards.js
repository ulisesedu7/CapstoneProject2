const cardsSection = document.getElementById('cards-section');

class MainCards {
  static displayCards (baseUrl, number) {
    this.getInformation(baseUrl, number);
  }

  static addCards ({name, image, media_type}) {
    const newCard = document.createElement('article');
    newCard.classList.add('info-card');

    newCard.innerHTML = 
    `<img src="${image.medium}" class="card-image">

    <div class="card-title">
      <h2 class="card-title">${name}</h2>
      <i class="fa-regular fa-heart like-icon"></i>
    </div>

    <p class="likes-counter">3 likes</p>

    <button class="card-btn">Comments</button>
    <button class="card-btn">Reservation</button>`

    cardsSection.appendChild(newCard);
  }

  static getInformation (baseUrl, number) {
    const numberStr = number.toString();
    const newUrl = baseUrl + numberStr;
    fetch(newUrl)
    .then(response => response.json())
    .then(result => this.addCards(result));
  }
}

export default MainCards;