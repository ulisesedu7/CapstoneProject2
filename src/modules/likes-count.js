const likesId = 'Sukb2o3ILkdyrdEG0stQ';

class LikesInfo {
  static sendLikesInfo = async (iBaseUrl, likes, item) => {
    const response = await fetch(iBaseUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: item,
        likesAmount: likes,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
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