import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout({logined}){
  const [isLogin, setIsLogin] = useState(false);
  console.log('logined in layout :' + logined); // props 확인

  useEffect(
    () => {                  
      console.log("logined props :" + logined);
      setIsLogin(logined);
      console.log("logined in layout : "+logined);
    },
    []
  );
  

  return(
    <>
      <Header isLogined={isLogin}/>      
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;