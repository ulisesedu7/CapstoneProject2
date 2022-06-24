import itemCount from "./counter.js";

const userName = document.getElementById('username');
const userComment = document.getElementById('userComment');
class MainComments {
  static newAppApiShow() {
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
      method: 'POST',
    }).then(response => response.text())
    .then(result => console.log(result))
  }

  static makeComment = async (Name, Comment, id) => {
    const baseUrl =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi9NdZdiCp9O1MxDwJQW/comments';
    
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: id,
        username: Name,
        comment: Comment,
      }),
    });

    const success = await response.text();
    return success;
  }

  static showAllComments = async (posterId) => {
    const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi9NdZdiCp9O1MxDwJQW/comments?item_id=${posterId}`;
    const allComments = document.querySelector('allComments');
    const commentHeader  = document.querySelector('commentHeader');

    let data;

    const request = await fetch(baseUrl);
    const response = await request.json();
    data = response;
  
    if (data === null) {
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
  }
}

export default MainComments;