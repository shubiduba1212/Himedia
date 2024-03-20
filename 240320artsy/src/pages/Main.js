import * as request from 'superagent';
import * as traversonRequest from 'traverson';

function Main(){
  //request = require('superagent');

const clientID = 'e48ab2d5bb4d48c9c2d7',
    clientSecret = 'e32c6c255beded65ef663409b6256ffd',
    apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';

let xappToken1 = '';
    

request
  .post(apiUrl)
  .send({ client_id: clientID, client_secret: clientSecret })
  .end((error, response) => {
    xappToken1 =response.body.token;
    console.log(response.body.type);
    console.log(response.body.token);
    //console.log(JSON.stringify(title));
  });

  const traverson = traversonRequest('traverson'),
    JsonHalAdapter = traversonRequest('traverson-hal'),
    xappToken = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2ZmY5NzI0MS04N2NkLTQ5YTQtOWY0Mi1mZGRjOTU0NTkwOGIiLCJleHAiOjE3MTE1MjY5MjUsImlhdCI6MTcxMDkyMjEyNSwiYXVkIjoiNmZmOTcyNDEtODdjZC00OWE0LTlmNDItZmRkYzk1NDU5MDhiIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY1ZmE5OThkNWQ1ODk0MDAwZDMwYTRlZiJ9.E3KkLTNOVOc9KUyu4kvejh2tV37gazMzl5szElEgB-I';

traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
const api = traverson.from('https://api.artsy.net/api').jsonHal();

api.newRequest()
  .follow('artist')
  .withRequestOptions({
    headers: {
      'X-Xapp-Token': xappToken,
      'Accept': 'application/vnd.artsy-v2+json'
    }
  })
  .withTemplateParameters({ id: 'andy-warhol' })
  .getResource(function(error, andyWarhol) {
    console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
  });

  return (
    <>
      <h1>메인 화면입니다.</h1>
      
    </>
  );
}

export default Main;