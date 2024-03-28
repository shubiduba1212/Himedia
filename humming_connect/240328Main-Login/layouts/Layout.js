import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopBtn from '../components/TopBtn';

export default function Layout(props) {

  console.log('props : ' + props);
  console.log('props.setLoginStatus : ' + props.currentLoginStatus.setLoginStatus);
  const isLogin = props.currentLoginStatus.isLogin;
  const setLoginStatus = props.currentLoginStatus.setLoginStatus;
  const loginId = props.currentLoginStatus.id;

  return (
    <>
      <TopBtn />
      <Header currentLoginStatus={{isLogin, setLoginStatus, loginId}}/>
      <Outlet />
      <Footer />
    </>
  );
}