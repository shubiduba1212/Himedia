
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
import Order from './pages/Order';
import Register from './pages/Register';
import { ArtWorkList } from './data/ArtWorkList';
import Sell from './pages/sell/Sell';
import Error from './pages/Error';
import LoadingSpinner from './components/Loading';
import Test from './pages/Test';
import { useState } from 'react';

export default function App() {
  // // login 상태 초기 state 설정
  // // const [isLogin, setIsLogin] = useState(true); //로그인 상태

  // /* 로그인 한 상태의 header로 사용하고 싶은 경우 아래 주석 해제하고 사용해주세요. */
  // const [isLogin, setIsLogin] = useState(true); //로그인 안한 상태

  // // login 상태 변경하는 함수
  // const setLoginStatus = (status) => {
  //   setIsLogin(status);
  // }
  const [isLoading, setIsLoading] = useState(true);

  const setApiStatus = (status) => {
    setIsLoading(status);
  }
  
  const renderAPI = JSON.parse(ArtWorkList());

  return (

    <>  
      {isLoading ? <LoadingSpinner/> : renderAPI}
      {/* {ArtWorkList()} */}
      <BrowserRouter>
        <Routes>
            <Route path='login' element={<Login/>}/>
            <Route path='easyLogin' element={<EasyLogin/>}/>
            <Route path='phoneLogin' element={<PhoneLogin/>}/>
            <Route path='findId' element={<FindId/>}/>
            <Route path='findPwd' element={<FindPwd/>}/>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Test loadingStatus={setApiStatus}/>}/>
            {/* <Route index element={<Main artList={ArtWorkList()}/>}/> */}
            <Route path="main" element={<Main artList={ArtWorkList()}/>}/> {/* 메인 */}           
            <Route path="about" element={<About/>}/> {/* 회사소개 */}
            <Route path="search" element={<Search artList={ArtWorkList()}/>}/> {/* 검색 */}
            <Route path="detail" element={<Detail/>}/> {/* 상세페이지 */}
            <Route path="mypage" element={<Mypage props={ArtWorkList()}/>}/> {/* 마이페이지 */}
            <Route path="mypage2" element={<Mypage2 props={ArtWorkList()}/>}/> {/* 마이페이지2 */}
            <Route path="mypage3" element={<Mypage3/>}/> {/* 마이페이지3 */}
            <Route path="order" element={<Order/>}/> {/* 주문 */}
            <Route path="register" element={<Register/>}/> {/* 회원가입 */}
            <Route path="sell" element={<Sell/>}/> {/* 판매신청 */}
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
