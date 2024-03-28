import Footer_login from "../../components/login/Footer_login";
import Header_login from "../../components/login/Header_login";
import Content_login from "../../components/login/Content_login";


function Login(props){
    
    console.log('login status from Login.js : ' + JSON.stringify(props.isLogin));
    console.log('setLogin from Login.js : ' + JSON.stringify(props.setLoginStatus));

    const isLogin = props.isLogin.isLogin;
    const setLoginStatus = props.isLogin.setLoginStatus;

    return(
        <>
        <div id="Header">
            {<Header_login/>}
        </div>

        <div id="content">
            {<Content_login props={{isLogin, setLoginStatus}}/>}
        </div>

        <div id="Footer">
            {<Footer_login/>}
        </div>
        </>
    )
}

export default Login;