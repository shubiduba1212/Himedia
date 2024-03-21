// function Main(){
//   return (
//     <>
//       <h1>메인 화면입니다.</h1>
      
//     </>
//   );
// }

// export default Main;

import * as request from 'superagent';
import { useState, useEffect } from 'react';

function Main() {
  //request = require('superagent');
  const [imgUrl, setImgUrl] = useState("");
  const [artistName, setArtistName] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const price = 8000000;
  const [materials, setMaterials] = useState("");
  const [description, setDescription] = useState("");
  const clientID = 'e48ab2d5bb4d48c9c2d7',
    clientSecret = 'e32c6c255beded65ef663409b6256ffd',
    apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';

  const url = 'https://api.artsy.net/api/tokens/xapp_token?client_id=e48ab2d5bb4d48c9c2d7&client_secret=e32c6c255beded65ef663409b6256ffd'

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2ZmY5NzI0MS04N2NkLTQ5YTQtOWY0Mi1mZGRjOTU0NTkwOGIiLCJleHAiOjE3MTE1MjY5MjUsImlhdCI6MTcxMDkyMjEyNSwiYXVkIjoiNmZmOTcyNDEtODdjZC00OWE0LTlmNDItZmRkYzk1NDU5MDhiIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY1ZmE5OThkNWQ1ODk0MDAwZDMwYTRlZiJ9.E3KkLTNOVOc9KUyu4kvejh2tV37gazMzl5szElEgB-I';

  // artist
  // title
  // year
  // price
  // materials
  // description
  // img
  // img size

  useEffect(
    () => {
      new Promise((resolve, reject) => {
        request
          //.get('https://api.artsy.net/api')
          .get('https://api.artsy.net/api/artworks/516dfb9ab31e2b2270000c45')
          .set('X-Xapp-Token', token)
          .set('Accept', 'application/vnd.artsy-v2+json')
          .then((res) => {
            //console.log('res'+JSON.stringify(res));
            console.log('connected');
            setTitle(res.body.title);
            setYear(res.body.date);
            setMaterials(res.body.medium);
            setDescription(res.body.additional_information);
            console.log('res.body.additional_information' + res.body.additional_information)
            setImgUrl(res.body._links.thumbnail.href);   
            request
              .get(res.body._links.artists.href)
              .set('X-Xapp-Token', token)
              .set('Accept', 'application/vnd.artsy-v2+json')
              .then((res) => {
                //setMaterials(res)
                //console.log('artist name : ' + res.name);
                //console.log('res for artists : ' + JSON.stringify(res));
                console.log('artist name : ' + JSON.stringify(res.body._embedded.artists[0].name));
                setArtistName(res.body._embedded.artists[0].name);
              });
            
            resolve(res.body);
          });
          
        //axios.get()
      }).then(resBody => { 
        // console.log('before request')
        // request
        //   .get(resBody)
        //   .set('X-Xapp-Token', token)
        //   .set('Accept', 'application/vnd.artsy-v2+json')
        //   .then((res) => {
        //     //setMaterials(res)
        //     //console.log('artist name : ' + res.name);
        //     console.log('res for artists : ' + JSON.stringify(res));
        //   });
        //console.log("resBody :"+JSON.stringify(resBody));
      //   request.get(resBody._links.artworks.href)
      //   .set('X-Xapp-Token', token)
      //   .set('Accept', 'application/vnd.artsy-v2+json')
      //   .then(res => {
      //     console.log('artwork.body : ' + res.body);
      //     setTitle(res.body.title);
      //     setYear(res.body.date);
      //     setMaterials(res.body.medium);
      //     setDescription(res.body.additional_information);
        })
      },
      []
    );

    const onClickHandler = () => {
      console.log('clicked : ' + artistName);
      window.location.href="https://api.artsy.net/api/artists?artwork_id=516dfb9ab31e2b2270000c45";
    }
  // request
  //   .get('https://api.artsy.net/api/artists/andy-warhol')
  //   .set('X-Xapp-Token', token)
  //   .set('Accept', 'application/vnd.artsy-v2+json')
  //   .then(res => {
  //     console.log('res' + res);
  //     console.log('res.body : ' + res.body);
  //     console.log('thumbnail : ' + res.body._links.thumbnail.href);
  //     console.log('artworks : ' + res.body._links.artworks.href);
  //     request.get(res.body._links.artworks.href)
  //       .set('X-Xapp-Token', token)
  //       .set('Accept', 'application/vnd.artsy-v2+json')
  //       .then(res => {
  //         console.log('artwork.body : ' + res.body);
  //         setTitle(res.body.title);
  //         setYear(res.body.date);
  //         setMaterials(res.body.medium);
  //         setDescription(res.body.additional_information);
  //       })
  //     console.log('genes : ' + res.body._links.genes.href);
  //     console.log('similar_artists : ' + res.body._links.similar_artists.href)
  //     setImgUrl(res.body._links.thumbnail.href);
  //   });



  // artist
  // title
  // year
  // price
  // materials
  // description
  // img
  // img size
  //<button onClick={window.location.href={artistName}}></button>
  return (
    <>
    <h1>메인 화면입니다.</h1>
    <img src={imgUrl} />
    <h2>Artist : {artistName}</h2>
    <h2>Title : {title}</h2>
    <h2>Date : {year}</h2>
    <h2>Materials : {materials}</h2>
    <h2>price : ￦{price}</h2>
    <h2>description : {description}</h2>
    <button onClick={onClickHandler}>artist</button>
    
    </>
  );
}

export default Main;
