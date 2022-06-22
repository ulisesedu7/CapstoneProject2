const iBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/:app_id/likes/';

const sendLikesInfo = async (iBaseUrl, like) => {
  const response = await fetch(iBaseUrl, {
    method: 'POST',
    body: JSON.stringify({
      newLike: like,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const success = await response.json();
  return success;
};

const receiveLikesInfo = async () => {
  
};


// export default changeLike;