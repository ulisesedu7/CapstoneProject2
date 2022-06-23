import itemCount from './counter.js';
import commentPopup from './comment.js';
import renderError from './error.js';

const baseUrl = 'https://api.tvmaze.com/shows/';
const showsHolder = document.getElementById('showsHolder');

// display all shows
const displayShows = (list) => {
  const showType = document.createElement('div');
  const commentButton = document.createElement('button');
  if (list) {
    document.querySelectorAll('.showsCount').forEach((menuCount) => {
      menuCount.innerHTML = itemCount(list);
    });

    list.forEach((show) => {
      commentButton.addEventListener('click', () => {
        commentPopup(show);
      });
      showType.append(commentButton);
      showsHolder.appendChild(showType);
    });
  } else {
    showsHolder.innerHTML = '<p class="showsHolderErr"> No shows yer for this number </p>';
  }
};

// Checking that the fetch was successful
const fetchShows = async () => {
  try {
    const request = await fetch(baseUrl);
    if (!request.ok) throw new Error('Something went wrong. Try again');
    const response = await request.json();
    displayShows(response.shows);
  } catch (err) {
    renderError(err.message);
  }
};

export default fetchShows;
