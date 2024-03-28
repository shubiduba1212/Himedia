import headerStyle from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header(props){
  console.log('current loginStatus from Header :' + props.currentLoginStatus); //  로그인 상태 확인  

  //로그인 상태 from App.js
  const loginStatus = props.currentLoginStatus.isLogin; //

  // logout 클릭시, login상태 false로 변경
  const onClickHandler = () => {
    props.currentLoginStatus.setLoginStatus(false);
  }

  //login Id
  const loginId = props.currentLoginStatus.loginId;
  
  // 메뉴 아이콘에 마우스 hover시, 아이콘 포인트색상으로 변경
  const onMouseOverHandler = (e) => {
    const fileName = e.target.alt;
    e.target.src = `${process.env.PUBLIC_URL}/img/${fileName}_colored.svg`;
  }

  // 메뉴 아이콘에 마우스 out시, 아이콘 메인색상으로 변경
  const onMouseOutHandler = (e) => {
    const fileName = e.target.alt;
    e.target.src = `${process.env.PUBLIC_URL}/img/${fileName}.svg`;
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
              <li><NavLink to={`/search/${loginId}`}><img src={`${process.env.PUBLIC_URL}/img/searchIcon.svg`} onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler} alt="searchIcon"/></NavLink></li>
              <li className={!loginStatus ? headerStyle.d_none : null}><NavLink to={`/mypage/${loginId}`}><img src={`${process.env.PUBLIC_URL}/img/mypageIcon.svg`} onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler} alt="mypageIcon"/></NavLink></li>
              <li className={!loginStatus ? headerStyle.d_none : null}><NavLink to={`/order/${loginId}`}><img src={`${process.env.PUBLIC_URL}/img/orderIcon.svg`} onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler} alt="orderIcon"/></NavLink></li>
              <li className={!loginStatus ? headerStyle.d_none : null}><NavLink to={`/sell/${loginId}`}><img src={`${process.env.PUBLIC_URL}/img/sellIcon.svg`} onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler} alt="sellIcon"/></NavLink></li>
              <li className={!loginStatus ?  headerStyle.loginBtn : headerStyle.d_none}><NavLink to='/login'>LOGIN</NavLink></li>
              <li className={!loginStatus ? headerStyle.d_none : null}><NavLink to='/main' onClick={onClickHandler}><img src={`${process.env.PUBLIC_URL}/img/logoutIcon.svg`} onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler} alt="logoutIcon"/></NavLink></li>
            </ul>
          </div>
        </header>
      </div>  
    </>
  );
}
