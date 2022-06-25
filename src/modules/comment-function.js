import itemCount from "./counter.js";

const userName = document.getElementById('user-name');
const userComment = document.getElementById('user-comment');
class MainComments {
  static newAppApiShow() {
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
      method: 'POST',
    }).then(response => response.text())
    .then(result => console.log(result))
  }

  static makeComment (cBaseUrl, Name, Comment, id) {
    let commentsData;
    fetch(cBaseUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: Name,
        comment: Comment,  
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(response => response.text())
    .then(((result) => {commentsData = result;}));

    // Update Comments
    this.showAllComments(cBaseUrl, id);

    return commentsData;
  }

  static getCommentsInfo = async (cBaseUrl, posterId) => {
    const newerBaseUrl = `${cBaseUrl}?item_id=${posterId}`;

    const response = await fetch(newerBaseUrl);
    const result = await response.json();

    return result;
  }

  static showAllComments(cBaseUrl, posterId) {
    const commentHeader = document.getElementById('commentHeader');
    const allComments  = document.getElementById('allComments');

    const data = this.getCommentsInfo(cBaseUrl, posterId);

    data.then((comments) => {
      let tmpList;
      if (comments.error) {
        commentHeader.innerHTML = 'No comments yet! Add comments.';
        tmpList = [];
      } 
      else {
        while (allComments.firstChild) {
          allComments.removeChild(allComments.firstChild);
        }        
        for(var i=0; i < comments.length; i +=1) {
          this.displayComments(comments[i]);
        }
        
        tmpList = comments;
        const commentsNumber = itemCount(tmpList);
        commentHeader.textContent = `Comments (${commentsNumber})`;
      }
    });

  }

  static displayComments ({creation_date, username, comment}) {
    const allComments  = document.getElementById('allComments');
    const newCommentElement = document.createElement('li');

    newCommentElement.innerHTML = `${creation_date} ${username}: ${comment}`

    allComments.appendChild(newCommentElement);

  }
}

export default MainComments;