const axios = require('axios');


exports.handler = async function (event, context) {
  
  let to_return = null
  console.log(event);
  await axios.get(`https://www.shazam.com/services/search/v4/en/IN/web/search?term=${event.queryStringParameters.query}&numResults=6&offset=0&types=songs&limit=6`)
  .then(function (response) {
    if(response.data){
      let filtered = []
      console.log(response.data.tracks);
      response.data.tracks.hits.forEach(element => {
        filtered.push({
          key:element.track.key*1789,
          title:element.track.title,
          subtitle:element.track.subtitle,
          coverart:element.track.images.coverart,
        })
      });
      to_return = filtered
    }
  })
  .catch(function (error) {
    to_return = error
  });

  return {
    statusCode: 200,
    body: JSON.stringify(to_return ),
  };
  
};