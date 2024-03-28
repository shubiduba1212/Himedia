import * as request from 'superagent';
import { useState, useEffect } from 'react';

export function ArtWorkList() {

  const [artList, setArtList] = useState([]);

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2ZmY5NzI0MS04N2NkLTQ5YTQtOWY0Mi1mZGRjOTU0NTkwOGIiLCJleHAiOjE3MTIxMzQxMzEsImlhdCI6MTcxMTUyOTMzMSwiYXVkIjoiNmZmOTcyNDEtODdjZC00OWE0LTlmNDItZmRkYzk1NDU5MDhiIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY2MDNkZDczMzFmNTcxMDAwZDNiNjU1MiJ9.gEfk_hNdrt_zDEkupDmuEbNRweVzKEU-oroY3PK8Ca4';

  //artworks 30 list 
  //https://api.artsy.net/api/artworks?size=30&page=5&exact=true&published=false

  //Api호출 후 JSON데이터에 접근해 필요한 데이터만 추출
  useEffect(
    () => {
      new Promise((resolve, reject) => {
        //_embedded        
        request
          .get('https://api.artsy.net/api/artists?gene_id=4d90d18fdcdd5f44a5000025&size=50&page=1&exact=true')
          .set('X-Xapp-Token', token)
          .set('Accept', 'application/vnd.artsy-v2+json')
          .then((res) => {
            //console.log(JSON.stringify(res.body._embedded.artists));
            // API response 데이터에서 필요한 데이터만 추출해 새로운 배열 생성
            const newArtList = (res.body._embedded.artists).map((artist, index) => {
              // 가격 랜덤 생성
              const getRandomIntInclusive = (Math.floor(Math.random() * 99) + 1) * (Math.floor(Math.random()) * 100 + 100000);

              return {
                artCode: index + 1, // artLIst내 객체 구분에 필요한 key
                artist: artist.name, // 작가명
                nationality: artist.nationality, // 국적
                price: getRandomIntInclusive, // 가격  
                birthday: artist.birthday === '' ? "unknown" : artist.birthday, // 출생연도
                date: artist.birthday === '' ? "unknown " : (parseInt(artist.birthday) + (Math.floor(Math.random() * 50) + 20)) >= 2024 ? 2024 : (parseInt(artist.birthday) + (Math.floor(Math.random() * 10) + 20)), // 작품연도
                imgUrl: artist._links.image === undefined ? (res.body._embedded.artists[49]._links.image.href).replace('{image_version}', 'square') : (artist._links.image.href).replace('{image_version}', 'square') // 이미지 url(이미지 사이즈 설정 가능)                    
              }

            }
            );
            request
              .get('https://api.artsy.net/api/genes?size=50')
              .set('X-Xapp-Token', token)
              .set('Accept', 'application/vnd.artsy-v2+json')
              .then((res) => {
                // (res.body._embedded.genes).map((genes, index) => 
                //   console.log(JSON.stringify(genes))
                // )                   
                (res.body._embedded.genes).map((genes, index) => {
                  return newArtList[index].description = genes.description; // description 작품설명
                })
                //console.log('list after description: ' + JSON.stringify(list));
                //setArtList(newArtList);          
              })
            request
              .get('https://api.artsy.net/api/artworks?size=50&page=1&exact=true')
              .set('X-Xapp-Token', token)
              .set('Accept', 'application/vnd.artsy-v2+json')
              .then((res) => {
                (res.body._embedded.artworks).map((artwork, index) => {
                  newArtList[index].title = artwork.title; // 작품명
                  newArtList[index].materials = artwork.medium; // 작품 소재
                  newArtList[index].dimensions_cm = artwork.dimensions.cm.text; // 작품사이즈 cm
                  newArtList[index].dimensions_in = artwork.dimensions.in.text; // 작품사이즈 인치  
                  return newArtList;
                })
                // console.log('list after artwork: ' + JSON.stringify(list));
                setArtList(newArtList);
                // console.log('artlist afterall :' + JSON.stringify(artList));
              })

            resolve(artList);
            return artList;
            //console.log('new Artist afterall : ' + newArtList);
          })
      })
      return () => {
        
      }
    }, []


  );
  //console.log("artList after call API : ");
  //console.table(artList);
  //console.log(artList);
  const artsyArtList = JSON.stringify(artList);

  return artsyArtList;
}