function showsCounter() {
  const numberOfShows = 50;
  const tvShowsCounter = document.getElementById('tv-counter');

  tvShowsCounter.innerHTML = `TV Shows (${numberOfShows})`;

  return numberOfShows;
}

export default showsCounter;