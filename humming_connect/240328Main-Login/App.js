
import Login from '../src/pages/login/Login';
import EasyLogin from '../src/pages/login/EasyLogin'
import PhoneLogin from '../src/pages/login/PhoneLogin';
import FindId from '../src/pages/login/FindId';
import FindPwd from '../src/pages/login/FindPwd';
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
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
import Register from './pages/Register';
import { ArtWorkList } from './data/ArtWorkList';
import Sell from './pages/sell/Sell';
import SellDone from './pages/sell/SellDone';
import Error from './pages/Error';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  // login 상태 초기 state 설정
  const [isLogin, setIsLogin] = useState(false); //로그인 안한 상태
  const [mainRoute, setMainRoute] = useState('main'); //로그인 여부에 따른 Main 페이지 path에 대한 state 변경
  const [id, setId] = useState('');
  // login 상태 변경하는 함수
  const setLoginStatus = (status) => {
    console.log('current Login Status from Login : ' + status);
    setIsLogin(status);
  }
  // login 상태 변경하는 함수
  const setLoginId = (id) => {
    console.log('current Login id from Login : ' + id);
    setId(id);
  }

  useEffect(
    () => {
      setMainRoute(isLogin === true ? 'main/:id' : 'main');
      console.log('useEffect from App.js : ' + isLogin );
    },[isLogin]
  );

  console.log('loginStatus from App.js : ' + isLogin);
  console.log('loginid from App.js : ' + id);



  return (

    <>      
      <BrowserRouter>
        <Routes>
            <Route path='login' element={<Login isLogin={{isLogin, setLoginStatus}}/>}/>
            <Route path='easyLogin' element={<EasyLogin/>}/>
            <Route path='phoneLogin' element={<PhoneLogin/>}/>
            <Route path='findId' element={<FindId/>}/>
            <Route path='findPwd' element={<FindPwd/>}/>
          <Route path="/" element={<Layout currentLoginStatus={{isLogin, setLoginStatus, id}}/>}>
            <Route index element={<Main artList={ArtWorkList()}/>}/>
            <Route path={mainRoute} element={<Main artList={ArtWorkList()} login={setLoginId}/>}/> {/* 메인 */}           
            <Route path="about/:id" element={<About/>}/> {/* 회사소개 */}
            <Route path="search/:id" element={<Search artList={ArtWorkList()}/>}/> {/* 검색 */}
            <Route path="detail/:artCode/:price/:id" element={<Detail/>}/> {/* 상세페이지 */}
            <Route path="mypage/:id" element={<Mypage props={ArtWorkList()}/>}/> {/* 마이페이지 */}
            <Route path="mypage2/:id" element={<Mypage2 props={ArtWorkList()}/>}/> {/* 마이페이지2 */}
            <Route path="mypage3/:id" element={<Mypage3/>}/> {/* 마이페이지3 */}
            <Route path="order/:id" element={<Order/>}/> {/* 주문 */}
            <Route path="register/:id" element={<Register/>}/> {/* 회원가입 */}
            <Route path="sell/:id" element={<Sell/>}/> {/* 판매신청 */}
            <Route path="sellDone/:id" element={<SellDone/>}/> {/* 판매완료 */}
          </Route> 
          <Route path="*" element={<Error/>}/> {/* 에러페이지 */}
          {/* <Route path="/login" element={<LayoutLogin/>}> */}
            {/* <Route index element={<Login currentLoginStatus={setLoginStatus}/>}/> 로그인 */}
          {/* </Route>                   */}
        </Routes>
      </BrowserRouter> 
      <GlobalStyle/>  
    </>    
  );
}