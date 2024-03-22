import { useState} from 'react';
import headerStyle from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props){
  console.log('current loginStatus :' + props.currentLoginStatus); // props 확인  
  const loginStatus = props.currentLoginStatus.isLogin;

  // logout 클릭시, login상태 false로 변경
  const onClickHandler = () => {
    props.currentLoginStatus.setLoginStatus(false);
  }
  
  return(
    <>
      <div className={headerStyle.header_cont}>
        <header className={headerStyle.header}>
          <div className={headerStyle.logo}>
            <NavLink to='/main'>
              <div className={headerStyle.logoImg}>
                <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="HummingConnect logo"/>
              </div>
              <div className={headerStyle.logoText}>
                <p>Humming</p>
                <p>   Connect</p>
              </div>
            </NavLink>
          </div>

          <div className={headerStyle.headerRight}>
            <ul>
              <li><NavLink to='/search'><img src={`${process.env.PUBLIC_URL}/img/searchIcon.svg`} alt="search icon"/></NavLink></li>
              <li className={!loginStatus ? headerStyle.d_none : null}><NavLink to='/mypage'><img src={`${process.env.PUBLIC_URL}/img/mypageIcon.svg`}  alt="mypage icon"/></NavLink></li>
              <li className={!loginStatus ? headerStyle.d_none : null}><NavLink to='/order'><img src={`${process.env.PUBLIC_URL}/img/orderIcon.svg`} alt="order icon"/></NavLink></li>
              <li className={!loginStatus ? headerStyle.d_none : null}><NavLink to='/sell'><img src={`${process.env.PUBLIC_URL}/img/sellIcon.svg`} alt="sell icon"/></NavLink></li>
              <li className={!loginStatus ?  headerStyle.loginBtn : headerStyle.d_none}><NavLink to='/login'>LOGIN</NavLink></li>
              <li className={!loginStatus ? headerStyle.d_none : null}><NavLink to='/main' onClick={onClickHandler}><img src={`${process.env.PUBLIC_URL}/img/logoutIcon.svg`}alt="logout icon"/></NavLink></li>
            </ul>
          </div>
        </header>
      </div>  
    </>
  );
}

export default Header;