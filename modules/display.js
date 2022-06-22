// import itemCount from './counter.js';
import renderError from './error.js';

const baseUrl = 'https://api.tvmaze.com/shows/';
// const showsHolder = document.getElementById('showsHolder');

// display all shows
const displayShows = () => {};

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
