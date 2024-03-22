import { useState, useEffect } from 'react';
import headerStyle from './Header.module.css';
import footerStyle from './Footer.module.css';

function Footer(){
  return(
    <>
      <div className={`${footerStyle.footer_cont} ${headerStyle.footer_cont} `}>
        <footer className={headerStyle.footer}>
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
          <ul className={footerStyle.footer_menu}>
            <li><a href="#">About</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <div className={`${headerStyle.footerRight} ${footerStyle.footerRight}`}>
            <ul>
              <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/twitterIcon.svg`} alt="twitter icon" /></a></li>
              <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/facebookIcon.svg`} alt="facebook icon" /></a></li>
              <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/instagramIcon.svg`} alt="instagram icon" /></a></li>
            </ul>
            <p>2024 Humming Connect . All Rights Reserved</p>
          </div>
        </footer>
      </div>  
    </>
  );
}

export default Footer;