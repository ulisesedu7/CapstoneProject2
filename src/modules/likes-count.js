const likesId = 'Sukb2o3ILkdyrdEG0stQ';

class LikesInfo {
  static sendLikesInfo = async (id) => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yiF2R8ciVWjovqKObXPN/likes/', {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
  
    const success = await response.json();
    return success;
  };
  
  static receiveLikesInfo = async (iBaseUrl) => {
    const response = await fetch(iBaseUrl);
    const result = await response.json();
  
    return result;
  };
}


export default LikesInfo;