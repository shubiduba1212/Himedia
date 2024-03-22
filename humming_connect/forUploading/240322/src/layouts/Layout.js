import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout(props){
  console.log('props : ' + props);
  console.log('props.setLoginStatus : ' + props.currentLoginStatus.setLoginStatus);
  const isLogin = props.currentLoginStatus.isLogin;
  const setLoginStatus = props.currentLoginStatus.setLoginStatus;
  return(
    <>
      <Header currentLoginStatus={{isLogin, setLoginStatus}}/>      
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;