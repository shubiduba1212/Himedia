import * as request from 'superagent';
import { useState, useEffect } from 'react';
import PopUp from '../components/PopUp';

function Main(){
  const [artList, setArtList] = useState([]);
  // const [imgUrl, setImgUrl] = useState("");
  // const [artistName, setArtistName] = useState("");
  // const [title, setTitle] = useState("");
  // const [year, setYear] = useState("");
  // const price = 8000000;
  // const [materials, setMaterials] = useState("");
  // const [description, setDescription] = useState("");
  const [nextId, setNextId] = useState(1);

  // 가격 랜덤 생성
  const getRandomIntInclusive = (Math.floor(Math.random() * (99)) + 1) * 100000; 

  const changeArtList = (artist) => {
    artList.concat({
      artCode: nextId,
      artist: artist.name,
      nationality : artist.nationality,
      title: "",
      year: "res.body.date",
      price: 8000000,
      materials: "res.body.medium",
      description: "res.body.additional_information",
      img: "res.body._links.thumbnail.href",
      //img size
    });

    setNextId(nextId + 1);
  }
  

      // artList
      //   .concat({
      //     artCode: nextId,
      //     artist: index.name,
      //     nationality: index.nationality
      //   })

  // const clientID = 'e48ab2d5bb4d48c9c2d7',
  //   clientSecret = 'e32c6c255beded65ef663409b6256ffd',
  //   apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2ZmY5NzI0MS04N2NkLTQ5YTQtOWY0Mi1mZGRjOTU0NTkwOGIiLCJleHAiOjE3MTE1MjY5MjUsImlhdCI6MTcxMDkyMjEyNSwiYXVkIjoiNmZmOTcyNDEtODdjZC00OWE0LTlmNDItZmRkYzk1NDU5MDhiIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY1ZmE5OThkNWQ1ODk0MDAwZDMwYTRlZiJ9.E3KkLTNOVOc9KUyu4kvejh2tV37gazMzl5szElEgB-I';

  //artworks 30 list 
  //https://api.artsy.net/api/artworks?size=30&page=5&exact=true&published=false

  //Api호출 후 각 artist에 접근해서 데이터 저장 request
  useEffect(
    () => {
      new Promise((resolve, reject) => {
        //_embedded        
          request
            // .get('https://api.artsy.net/api/artists/604922225322320011487491')
            .get('https://api.artsy.net/api/artists?similarity_type=contemporary&artworks=true&size=30&page=1')
            .set('X-Xapp-Token', token)
            .set('Accept', 'application/vnd.artsy-v2+json')
            .then((res) => {
              console.log(res.body)
              const newArtList = 
              (res.body._embedded.artists).map(index => 
                 changeArtList(index)
                );
              console.log('newArtList' + newArtList);

              // console.log('art list' + JSON.stringify(res.body._embedded.artists));
              
              // console.log(res.body._embedded.artists[0].name);
              // console.log(res.body._embedded.artists[0].nationality);
              // console.log(res.body._embedded.artists[0]._links.thumbnail.href);
              // console.log(res.body._embedded.artists[0]._links.artworks.href);
              
              // (res.body._embedded.artists).map(artist => console.log(
              //   'artist name : ' + artist.name + '\n'
              //   + 'artist nationality : ' + artist.nationality+'\n'
              //   + 'img url : ' + artist._links.thumbnail.href + '\n'
              //   + 'price : '
              // ))

              // request
              //   .get(res.body._embedded.artists[0]._links.artworks.href)
              //   .set('X-Xapp-Token', token)
              //   .set('Accept', 'application/vnd.artsy-v2+json')
              //   .then((res) => {
              //     //console.log(res.body);
              //     console.log(res.body._embedded.artworks[0].title); //작품명
              //     console.log(res.body._embedded.artworks[0].medium); //작품소재
              //     console.log(res.body._embedded.artworks[0].date); // 작품제작연도
              //     console.log(res.body._embedded.artworks[0].dimensions.cm.text); // 작품사이즈 cm
              //     console.log(res.body._embedded.artworks[0].dimensions.in.text); // 작품사이즈 인치
              //     console.log((res.body._embedded.artworks[0]._links.image.href).replace('{image_version}', 'square'));
              //   })
              
              console.log('artlist : ' + artList);

              //setNextId(nextId + 1);
              //setArtList(changeArtList);
              //return res.body;
              resolve(res.body);
            })

        

        //resolve(res.body);
        //console.log("artList from ArtList.js : ");
        //console.table((artList));

        //     return artList;

        //   })
      })
    }, []
  );
  //console.log("artList after setState : ");
  //console.table(artList);

  return(
    <>
      <PopUp />
      <div style={{height:'calc(100vh - 160px)', padding: 20}}>
        <h1>Main 화면</h1>
      </div>
    </>
  );
}

export default Main;
