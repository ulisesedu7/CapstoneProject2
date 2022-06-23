import itemCount from "./counter.js";

const userName = document.getElementById('username');
const userComment = document.getElementById('userComment');

class NewComments {
  constructor(item_id, username, userComment) {
    this.item_id = item_id;
    this.username = username;
    this.comment = userComment;
  }
}

class MainComments {
  static makeComment = async (Name, Comment, id) => {
    const baseUrl =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Sukb2o3ILkdyrdEG0stQ/comments/';
    
    // Object
    if (Name !== '' && Comment !== '') {
      const newComment = new NewComments(id, Name, Comment);

      await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
      });
    }
  
  }

  static showAllComments = async (posterId) => {
    const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Sukb2o3ILkdyrdEG0stQ/comments?item_id=${posterId}`;
    const allComments = document.querySelector('allComments');
    const commentHeader  = document.querySelector('commentHeader');

    let data;

    const request = await fetch(baseUrl);
    const response = await request.json();
    data = response;
  
    if (data === 0) {
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