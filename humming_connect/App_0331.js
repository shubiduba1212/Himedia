import * as request from 'superagent';
import Login from '../src/pages/login/Login';
import EasyLogin from '../src/pages/login/EasyLogin'
import PhoneLogin from '../src/pages/login/PhoneLogin';
import FindId from '../src/pages/login/FindId';
import FindPwd from '../src/pages/login/FindPwd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Search from './pages/Search';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Detail from './pages/Detail';
import Mypage from './pages/mypage/Mypage';
import Mypage2 from './pages/mypage/MypageTable2';
import Mypage3 from './pages/mypage/MypageTable3';
import Order from './pages/order/Order';
import OrderDone from './pages/order/OrderDone';
import Payment from './pages/order/Payment';
import Register from './pages/Register';
import RegisterJoin from './pages/register/RegisterJoin';
import RegisterComple from './pages/register/RegisterComple';
import Sell from './pages/sell/Sell';
import SellDone from './pages/sell/SellDone';
import Error from './pages/Error';
import { useState, useEffect } from 'react';

export default function App() {
  // login 상태 초기 state 설정
  const [isLogin, setIsLogin] = useState(false); //로그인 안한 상태
  const [id, setId] = useState(''); // 로그인 id
  const [artList, setArtList] = useState([]);

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2ZmY5NzI0MS04N2NkLTQ5YTQtOWY0Mi1mZGRjOTU0NTkwOGIiLCJleHAiOjE3MTIxMzQxMzEsImlhdCI6MTcxMTUyOTMzMSwiYXVkIjoiNmZmOTcyNDEtODdjZC00OWE0LTlmNDItZmRkYzk1NDU5MDhiIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY2MDNkZDczMzFmNTcxMDAwZDNiNjU1MiJ9.gEfk_hNdrt_zDEkupDmuEbNRweVzKEU-oroY3PK8Ca4';

  //artworks 30 list 
  //https://api.artsy.net/api/artworks?size=30&page=5&exact=true&published=false

  // login 상태 변경하는 함수
  const setLoginStatus = (status) => {
    //console.log('current Login Status from Login : ' + status);
    setIsLogin(status);
  }

  // loginId 상태 변경하는 함수
  const setLoginId = (logId) => {
    //console.log('current Login id from Login : ' + id);
    setId(logId);
  }
  
  //Api호출 후 JSON데이터에 접근해 필요한 데이터만 추출
  useEffect(    
    () => {
      //console.log('useEffect isLogin from App.js : ' + isLogin );

      const fetchDetails = async () => {
        try {
          const firstApi = await request
          .get('https://api.artsy.net/api/artists?gene_id=4d90d18fdcdd5f44a5000025&size=50&page=1&exact=true')
          .set('X-Xapp-Token', token)
          .set('Accept', 'application/vnd.artsy-v2+json')
          .then((res) => {
            //console.log('first api called');
            // API response 데이터에서 필요한 데이터만 추출해 새로운 배열 생성
            const newArtList = (res.body._embedded.artists).map((artist, index) => {
              // 가격 랜덤 생성
              const getRandomIntInclusive = (Math.floor(Math.random() * 99) + 1) * (Math.floor(Math.random()) * 100 + 100000);

              return {
                artCode: index + 1, // artLIst내 객체 구분에 필요한 key
                artist: artist.name, // 작가명
                nationality: artist.nationality, // 국적
                price: getRandomIntInclusive, // 가격  
                birthday: (artist.birthday === '' || artist.birthday === null) ? "unknown" : artist.birthday, // 출생연도
                date: (artist.date === '' || artist.date === null || (typeof artist.birthday) === "string") ? "unknown " : (parseInt(artist.birthday) + (Math.floor(Math.random() * 50) + 20)) >= 2024 ? 2024 : (parseInt(artist.birthday) + (Math.floor(Math.random() * 10) + 20)), // 작품연도
                imgUrl: artist._links.image === undefined ? (res.body._embedded.artists[49]._links.image.href).replace('{image_version}', 'square') : (artist._links.image.href).replace('{image_version}', 'square') // 이미지 url(이미지 사이즈 설정 가능)                    
                }
              }
            );
            return newArtList;
          })

          const secondApi = await request
          .get('https://api.artsy.net/api/genes?size=50')
          .set('X-Xapp-Token', token)
          .set('Accept', 'application/vnd.artsy-v2+json')
          .then((res) => {
            //console.log('second api called');                 
            const secondArr = (res.body._embedded.genes).map((genes, index) => {
              return firstApi[index].description = genes.description; // description 작품설명
            })
            //console.log(firstApi);
            return secondArr;                 
          })

          const thirdApi = await request
          .get('https://api.artsy.net/api/artworks?size=50&page=1&exact=true')
          .set('X-Xapp-Token', token)
          .set('Accept', 'application/vnd.artsy-v2+json')
          .then((res) => {
            //console.log('third api called');
            const thirdArr = (res.body._embedded.artworks).map((artwork, index) => {
              firstApi[index].title = artwork.title; // 작품명
              firstApi[index].materials = artwork.medium; // 작품 소재
              firstApi[index].dimensions_cm = artwork.dimensions.cm.text; // 작품사이즈 cm
              firstApi[index].dimensions_in = artwork.dimensions.in.text; // 작품사이즈 인치  
              return artwork;
            })
            //console.log(firstApi);
            return thirdArr;
          })

          setArtList(firstApi);
          //console.table('third api : ' + firstApi);
          //console.table('third api : ' + JSON.stringify(firstApi));
        } catch (error) {
          console.log('error' + error);
        }
      };
      fetchDetails();      
      //console.log('artlist from App.js : ' + artList === undefined ? 'artlist = undefined' : artList);
      return () => {
        fetchDetails();
      }
     
    },[isLogin, id]
  );
  // useEffect(
  //   () => {
  //     console.log('useEffect from App.js : ' + isLogin );
  //   },[isLogin]
  // );
  //console.log('artlist from App.js : ' + artList === undefined ? 'artlist = undefined' : artList);

  return (

    <>      
      <BrowserRouter>
        <Routes>
            <Route path='login' element={<Login isLogin={{isLogin, setLoginStatus}}/>}/>
            <Route path='easyLogin' element={<EasyLogin/>}/>
            <Route path='phoneLogin' element={<PhoneLogin isLogin={{isLogin, setLoginStatus}}/>}/>
            <Route path='findId' element={<FindId/>}/>
            <Route path='findPwd' element={<FindPwd/>}/>
          <Route path="/" element={<Layout currentLoginStatus={{isLogin, setLoginStatus, id}}/>}>
            <Route index element={<Main artList={JSON.stringify(artList)}/>}/>
            <Route path="main/:id" element={<Main artList={JSON.stringify(artList)} login={setLoginId}/>}/> {/* 메인 */}           
            <Route path="about/:id" element={<About/>}/> {/* 회사소개 */}
            <Route path="search/:id" element={<Search artList={JSON.stringify(artList)}/>}/> {/* 검색 */}
            <Route path="detail/:artCode/:price/:id" element={<Detail props={JSON.stringify(artList)}/>}/> {/* 상세페이지 */}
            <Route path="mypage/:id" element={<Mypage props={JSON.stringify(artList)}/>}/> {/* 마이페이지 */}
            <Route path="mypage2/:id" element={<Mypage2 props={JSON.stringify(artList)}/>}/> {/* 마이페이지2 */}
            <Route path="mypage3/:loginId" element={<Mypage3 props={JSON.stringify(artList)}/>}/> {/* 마이페이지3 */}
            <Route path="register" element={<Register/>}/> {/* 회원가입 */}
            <Route path="register/registerjoin" element={<RegisterJoin/>}/> {/* 회원가입2 */}
            <Route path="register/registerjoin/registercomple" element={<RegisterComple/>}/> {/* 회원가입3 */}
            <Route path="order/:artCode/:price/:id" element={<Order props={JSON.stringify(artList)}/>}/> {/* 주문 */}
            <Route path="payment/:artCode/:price/:id" element={<Payment props={JSON.stringify(artList)}/>}/> {/* 결제 페이지 */}
            <Route path="orderDone/:id" element={<OrderDone/>}/> {/* 결제 페이지 */}
            <Route path="sell/:id" element={<Sell/>}/> {/* 판매신청 */}
            <Route path="sellDone/:id" element={<SellDone/>}/> {/* 판매완료 */}
          </Route> 
          <Route path="*" element={<Error/>}/> {/* 에러페이지 */}
        </Routes>
      </BrowserRouter> 
      <GlobalStyle/>  
    </>    
  );
}
