import { useState, useEffect } from 'react';
import headerStyle from './Header.module.css';

function Header({isLogined}){
  console.log('props :' + isLogined); // props 확인
  const [isLogin, setIsLogin] = useState(false); // login 상태 확인
  useEffect(
    () => {
      console.log("isLogined props :" + isLogined);
      setIsLogin(isLogined);
      console.log("isLogin in header : "+isLogin);
    },
    []
  );
  return(
    <>
      <div className={headerStyle.header_cont}>
        <header>
          <div className={headerStyle.logo}>
            <a href="#">
              <div className={headerStyle.logoImg}>
                <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="HummingConnect logo"/>
              </div>
              <div className={headerStyle.logoText}>
                <p>Humming</p>
                <p>   Connect</p>
              </div>
            </a>
          </div>

          <div className={headerStyle.headerRight}>
            <ul>
              <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/searchIcon.svg`} alt="search icon"/></a></li>
              <li className={!isLogin ? headerStyle.d_none : null}><a href="#"><img src={`${process.env.PUBLIC_URL}/img/mypageIcon.svg`}  alt="mypage icon"/></a></li>
              <li className={!isLogin ? headerStyle.d_none : null}><a href="#"><img src={`${process.env.PUBLIC_URL}/img/orderIcon.svg`} alt="order icon"/></a></li>
              <li className={!isLogin ? headerStyle.d_none : null}><a href="#"><img src={`${process.env.PUBLIC_URL}/img/sellIcon.svg`} alt="sell icon"/></a></li>
              <li className={!isLogin ?  headerStyle.loginBtn : headerStyle.d_none}><a href="#">LOGIN</a></li>
              <li className={!isLogin ? headerStyle.d_none : null}><a href="#"><img src={`${process.env.PUBLIC_URL}/img/logoutIcon.svg`}alt="logout icon"/></a></li>
            </ul>
          </div>
        </header>
      </div>  
    </>
  );
}

export default Header;