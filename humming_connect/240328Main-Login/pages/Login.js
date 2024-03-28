// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// //로그인 상태 여부에 따라 header 변경하기 위한 샘플 로그인 화면
// // ID : user01  PW : user01
// export default function Login(props){

//   const [user, setUser] = useState({
//     username : '',
//     password : '',
//   });

//   const navigate = useNavigate();

//   const onChangeHandler = (e) => {
//     setUser({
//       ...user,
//       [e.target.name] : e.target.value
//     });
//   }

//   const onClickHandler = () => {
//     if((user.username === 'user01') && (user.password === 'user01')){
//       setUser({
//         username : '',
//         password : ''
//       })

//       navigate('/main');
//       props.currentLoginStatus(true);
//     } else {
//       console.log('login failed.');
//     }
//   }

//   useEffect(
//     () => {},
//     [user.username]
//   );

//   useEffect(
//     () => {},
//     [user.password]
//   );

//   return(
//     <div style={{display: 'flex', alignItems : 'center',height : 'calc(100vh - 160px)'}}>
//       <div style={{margin : '0 auto', padding: 20, border : '1px solid #878787', borderRadius:5, width:500,}}>
//         <p style={{paddingBottom : 20, fontSize:18, fontWeight:600, textAlign : 'center'}}>로그인</p>
//         <input 
//           type="text" 
//           name="username"
//           placeholder="아이디를 입력하세요" 
//           style={{width:'100%', height:50, borderRadius:'5px', paddingLeft:10, paddingRight:10, marginBottom : 10, border:'1px solid #dfdfdf'}}
//           onChange={onChangeHandler}          
//         />
//         <input 
//           type="password" 
//           name="password"
//           placeholder="비밀번호를 입력하세요"
//           style={{width:'100%', height:50, borderRadius:'5px', paddingLeft:10, paddingRight:10, marginBottom : 10, border:'1px solid #dfdfdf'}}
//           onChange={onChangeHandler}
//         />
//         <button 
//           style={{width:'100%', height:50, borderRadius:'5px', color: '#fff', backgroundColor:'#28282a', fontSize:16, fontWeight:500, cursor : 'pointer', border:'none'}}
//           onClick={onClickHandler}
//         >로그인</button>
//       </div>
//     </div>
//   );
// }