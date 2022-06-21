// import itemCount from './counter.js';
import renderError from './error.js';

// make comment
const makeComment = async (username, userComment, id) => {
  const baseUrl = 'https://api.tvmaze.com/shows/';

  try {
    username = username.value;
    userComment = userComment.value;
    if (username !== '' && userComment !== '') {
      const newComment = {
        item_id: id,
        username,
        comment: userComment
      };

      await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(newComment)
      });
    }
    document.getElementById('username').value = '';
    document.getElementById('userComment').value = '';
  } catch (err) {
    renderError(err.message);
  }
};

// Show all comments
const showAllComments = async (showId) => {
  const baseUrl = 'https://api.tvmaze.com/shows//comments?item_id=${showId }';

  let data;

  try {
    const request = await fetch(baseUrl);
    const response = await request.json();
    data = await response;
  } catch (err) {
    renderError(err.message);
  }
  return data;
};

const commentPopup = async (show) => {
  const modal = document.getElementById('myModal');
  const modalContent = document.getElementById('modal-content');
  const commentButton = document.createElement('button');
  const allComments = document.createElement('ul');
  const showId = show.idShow;

  const showType = document.querySelector('#modal-content');
  showType.innerHTML += ` 
  <div class="showType">
    <img src=${show.image} alt=${show.name} />
    <h2 class="show-title">${show.name}</h2>
    <div class="show-details">
      <ul>
        <li>name</li>
        <li>type</li>
        <li>language</li>
        <li>genres</li>
        <li>status</li>
        <li>runtime</li>
        <li>premiered</li>
      </ul>
    </div>
  
    <div class="comments">
      <h3>Comments</h3>
    </div>

    <form method="post" id="popup-form">
      <h3 class="formHeader">Add a comment</h3>
      <input type="text" placeholder="Your name" id="name" />
      <textarea
        name="comment"
        id="msg"
        cols="60"
        rows="10"
        placeholder="Your insights..."
      ></textarea>
      <button type="submit" class="btn btn-primary">Comment</button>
    </form>
  </div>`;

  document.getElementsByClassName('close')[0].addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.removeChild(showType);
  });

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      if (modalContent.hasChildNode) {
        modalContent.removeChild(showType);
      }
    }
  };
};

export default commentPopup;
