import contentStyle from './Content_login.module.css'
import { getMemberList } from '../../apis/memberAPI';
import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import popStyle from '../../components/PopUp.module.css';

// import { Profile } from '../../data/';
    

function Content_login(props){

    console.log('login status props from contentLogin : ' + JSON.stringify(props.props.isLogin)); //App.js에서 로그인 상태관련 props 전달

    const navigate = useNavigate();

const [memberList, setMemberList]=useState([]);
const [id , setId] = useState("")
const [pwd , setPwd] = useState("")
const [isPopUpOpen, setIsPopUpOpen] = useState(false);
const [text, setText]=useState("");
const [text2, setText2]=useState("");
const openPopUp = () => {
    setIsPopUpOpen(true)
}

function PopUp(){

  //확인 버튼 클릭시, 팝업창 비활성화
    const onClickHandler = (e) => {
    e.target.parentNode.style.display = 'none';
    e.target.parentNode.previousSibling.style.display = 'none';
    setIsPopUpOpen(false)
    }
    

    return(
    <>
        <div className={popStyle.popBg}></div>
        <div className={popStyle.popUp_cont}>
            <p className={popStyle.popText}>{text}</p>
            <p className={popStyle.popText}>{text2}</p>
            <button className={popStyle.popBtn} onClick={onClickHandler}>확인</button>
        </div>
    </>
    );
}


    useEffect(
        ()=>{
            setMemberList(getMemberList());
            
        },
        []
        
    )
    const onIdChange=(e)=>{
        setId(e.target.value)
    }
    const onPwdChange=(e)=>{
        setPwd(e.target.value)
    }

    const onClickHandler=()=>{
        if(id==="" || pwd===""){
            openPopUp(true)
            // <Link to="/main/"></Link>
            openPopUp(true)
            setText("")
            setText2("아이디 , 비밀번호를 입력해주세요.")
            setId("")
            setPwd("")
        }else if(id===memberList.members[0].id && pwd===memberList.members[0].password){
            // <NavLink to=""></NavLink>
            props.props.setLoginStatus(true);
            navigate(`/main/${memberList.members[0].id}`);
            setId("")
            setPwd("")
        }else if(id===memberList.members[1].id && pwd===memberList.members[1].password){
            // <NavLink to=""></NavLink>
            props.props.setLoginStatus(true);
            navigate(`/main/${memberList.members[1].id}`);
            setId("")
            setPwd("")
        }else if(id===memberList.members[2].id && pwd===memberList.members[2].password){
            // <NavLink to=""></NavLink>
            props.props.setLoginStatus(true);
            navigate(`/main/${memberList.members[2].id}`);
            setId("")
            setPwd("")
        }else{
            setText("아이디 혹은 비밀번호가 틀렸습니다.")
            setText2("확인후 다시 입력해주세요.")
            console.log(memberList.members[0])
            // <NavLink></NavLink>
            openPopUp(true)
            setId("")
            setPwd("")
        }
    }

    return(
        <>
        <div>
            <div className={contentStyle.contentInner}> 
                <ul className={contentStyle.ul}>
                    <li className={contentStyle.li}>
                        <Link to="../login" className={contentStyle.on} role='tab'>
                            <span>ID 로그인</span>
                        </Link>
                    </li>
                    <li className={contentStyle.li}>
                        <Link to="../easyLogin" className={contentStyle.menuId} role='tab'>
                            <span>간편 로그인</span>
                        </Link>
                        </li>
                    <li className={contentStyle.li}>

                        
                        <Link to="../PhoneLogin" className={contentStyle.menuId} role='tab'>
                            <span>전화번호 로그인</span>
                        </Link>
                        </li>
                </ul>
            </div>
            

        <div className='idTap'>
            <div className={contentStyle.loginDiv}>
                <div className={contentStyle.loginBox}>
                    <div className={contentStyle.input}>
                        <input onChange={onIdChange} value={id} className={contentStyle.inputBox} type='id' id='id' placeholder='아 이 디' />
                    </div>
                    <div className={contentStyle.input}>
                        <input onKeyDown={e => e.key == "Enter" ? onClickHandler() : null } onChange={onPwdChange} value={pwd} className={contentStyle.inputBox} type='password' id='password' placeholder='패 스 워 드'/>
                    </div>
                    <div className={contentStyle.text}>
                        <ul className={contentStyle.loginCheackBox}>
                            <li><input id="keep" type='checkbox'/></li>
                            <label htmlFor="keep" className={contentStyle.loginSave}>로그인 유지</label> 
                        </ul>
                    </div>

                    <div>
                        <Link to="" className={contentStyle.text_button}>
                        <button onClick={onClickHandler} className={contentStyle.button}>로그인</button>
                        
                        </Link>

                        <ul className={contentStyle.ul3}>
                            <li className={contentStyle.li}>
                                <Link to="../findId">
                                    <span className={contentStyle.text}>아이디 찾기</span>
                                </Link>
                            </li>
                            <li className={contentStyle.li}>
                                <span className={contentStyle.text}>|</span>
                                <Link to="../findPwd">
                                    <span className={contentStyle.text}>비밀번호 찾기</span>
                                </Link>
                                <span className={contentStyle.text}>|</span>
                            </li>
                            <li className={contentStyle.li}>
                                <Link>
                                    <span className={contentStyle.text}>회원 가입</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
    {isPopUpOpen && PopUp()}
        </>
    )
    }

export default Content_login;
