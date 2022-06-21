const cardsSection = document.getElementById('cards-section');

class MainCards {
  static displayCards (baseUrl) {
    this.getInformation(baseUrl);
  }

  static addCards ({title, url, media_type}) {
    const newCard = document.createElement('article');
    newCard.classList.add('info-card');

    newCard.innerHTML = 
    `<img src="${url}" class="card-image">

    <div>
      <h2 class="card-title">${title}</h2>
      <input type="checkbox" class="likes">
    </div>

    <button class="card-btn">Comments</button>
    <button class="card-btn">Reservation</button>`

    cardsSection.appendChild(newCard);
  }

  static getInformation (baseUrl) {

    fetch(baseUrl)
    .then(response => response.json())
    .then(result => this.addCards(result));
  }
}

export default MainCards;