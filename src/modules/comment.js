import itemCount from './counter.js';
import renderError from './error.js';

// make comments
const makeComment = async (username, userComment, id) => {
  const baseUrl =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Sukb2o3ILkdyrdEG0stQ/comments/';

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

// to show all comments
const showAllComments = async (showId) => {
  const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Sukb2o3ILkdyrdEG0stQ/comments?item_id=${showId}`;

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

const commentPopup = async ({name, image, type, language, status, runtime, premiered}) => {
  const modal = document.getElementById('myModal');
  const modalContent = document.getElementById('modal-container');
  const commentButton = document.createElement('button');
  const allComments = document.createElement('ul');
  const showId = 13;
  const commentHeader = document.querySelector('.commentHeader');

  const showType = document.querySelector('#modal-content');
  showType.innerHTML += ` 
    <div class="showType">
      <img src="${image.original}" alt="Movie-poster" />
      <span class="close">&times;</span>
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
    </div>`;

  // show comments
  commentButton.addEventListener('click', () => {
    while (allComments.firstChild) {
      allComments.removeChild(allComments.lastChild);
    }
    makeComment(showId).then(() => {
      showAllComments(showId).then((data) => {
        commentHeader.innerHTML = `Comments (${itemCount(data)})`;
        data.forEach((insight) => {
          const li = document.createElement('li');
          li.append(
            `${insight.creation_date} ${insight.username} ${insight.comment}`
          );
          allComments.append(li);
        });
      });
    });
  });

  // showAllComments;
  showAllComments(showId).then((data) => {
    try {
      if (data.error) {
        commentHeader.innerHTML = 'Comments (0)';
        allComments.innerHTML = 'No comments yet! Add comments';
      } else {
        commentHeader.innerHTML = `Comments (${itemCount(data)})`;
        data.forEach((insight) => {
          const li = document.createElement('li');
          li.append(
            `${insight.creation_date} ${insight.username} ${insight.comment}`
          );
          allComments.append(li);
        });
      }
    } catch (err) {
      renderError(err.message);
    }
  });

  // close button
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
