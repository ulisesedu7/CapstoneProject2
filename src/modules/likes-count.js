class LikesInfo {
  static sendLikesInfo(iBaseUrl, id) {
    let likesData;
    fetch(iBaseUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(response => response.text())
    .then(((result) => {likesData = result;}));
    return likesData;
  };
  
  static receiveLikesInfo = async (iBaseUrl) => {
    const response = await fetch(iBaseUrl);
    const result = await response.json();

    const updatedElement = document.querySelectorAll('.likes-counter');
    
     
    updatedElement.forEach((n) => {
      for(var i = 0; i < result.length; i += 1) {
        if(n.title === result[i].item_id) {
          n.textContent = result[i].likes + ' likes';
        }
      }  
    })
  
    return result;
  };
}

export default LikesInfo;