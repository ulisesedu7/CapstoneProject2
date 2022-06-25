
function showsCounter () {
  const numberOfShows = 9;
  const tvShowsCounter = document.getElementById('tv-counter');

  tvShowsCounter.innerHTML = 'TV Shows (' + numberOfShows + ')';

  return numberOfShows;
}

export default showsCounter;