import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login(props){;

  const [user, setUser] = useState({
    username : '',
    password : '',
    isLogin : false,
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    });
  }

  const onClickHandler = () => {
    // ((user.username === 'user01') && (user.password === 'user01')) ? 
    // navigate('/main') : alert('입력한 아이디 또는 비밀번호가 일치하지 않습니다. \n 다시 입력해주세요🖼');
    if((user.username === 'user01') && (user.password === 'user01')){
      setUser({
        username : '',
        password : ''
      })

      navigate('/main');
      props.currentLoginStatus(true);
    } else {
      console.log('login failed.');
    }
  }

  useEffect(
    () => {console.log('username : ' + user.username)},
    [user.username]
  );

  useEffect(
    () => {console.log('password : ' + user.password)},
    [user.password]
  );

  return(
    <div style={{display: 'flex', alignItems : 'center',height : 'calc(100vh - 160px)'}}>
      <div style={{margin : '0 auto', padding: 20, border : '1px solid #878787', borderRadius:5, width:500,}}>
        <p style={{paddingBottom : 20, fontSize:18, fontWeight:600, textAlign : 'center'}}>로그인</p>
        <input 
          type="text" 
          name="username"
          placeholder="아이디를 입력하세요" 
          style={{width:'100%', height:50, borderRadius:'5px', paddingLeft:10, paddingRight:10, marginBottom : 10, border:'1px solid #dfdfdf'}}
          onChange={onChangeHandler}          
        />
        <input 
          type="password" 
          name="password"
          placeholder="비밀번호를 입력하세요"
          style={{width:'100%', height:50, borderRadius:'5px', paddingLeft:10, paddingRight:10, marginBottom : 10, border:'1px solid #dfdfdf'}}
          onChange={onChangeHandler}
        />
        <button 
          style={{width:'100%', height:50, borderRadius:'5px', color: '#fff', backgroundColor:'#28282a', fontSize:16, fontWeight:500, cursor : 'pointer', border:'none'}}
          onClick={onClickHandler}
        >로그인</button>
      </div>
    </div>
  );
}
