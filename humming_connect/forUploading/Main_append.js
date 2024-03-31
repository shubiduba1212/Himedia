import '../styles/slick-theme.css';
import '../styles/slick.css';
import mainStyle from './Main.module.css';
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArtItem from '../components/ArtItem'
import LoadingSpinner from '../components/Loading';
// CSS

/* add sale list button */
// .addItemsBtn{width: 200px; height: 50px; border-radius:10px; background-color:#28282a; border:none; color:#fff; text-align:center; line-height:50px; font-weight:500; font-size:16px; cursor: pointer}
export default function Main(artWorkList) { 
    // const [artList, setartList] = useState([]);
    //const [newIndex, setNewIndex] = useState([7,29,14,8]);
    const [isLoading, setIsLoading] = useState(true);
    const [clickCount, setClickCount] = useState(0);

  

    const {id} = useParams({});
    console.log('param : ' + id);
    
    useEffect(
      () => {
        // const setApiStatus = (status) => {
        //   setIsLoading(status);
        // }
        //setIsLoading(true);
        //console.log('new Index '+newIndex);
        //window.scrollTo(0, 0); // 페이지 리로드 시, 스크롤 최상단 위치하도록
        
        if(artWorkList.login === undefined){
          console.log('props' + JSON.stringify(artWorkList.login));
        }else{
          console.log('props' + JSON.stringify(artWorkList.login));
          artWorkList.login(id);
        }
        if(artWorkList.artList === undefined){
          
        } else {
          
          // setartList(JSON.parse(artWorkList.artList)); //작품리스트 데이터 저장
          //console.log('artWorkList :' + JSON.parse(artWorkList.artList));
          //setNewIndex(newIndex.map((num, index ) =>  num = Math.floor(Math.random() * 49))) // New 이미지 랜덤 변경을 위한 index 숫자 랜덤 생성 및 state 설정

        } 
        
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
        
        return () => {
          //setIsLoading(false);
          //setApiStatus(false);
          //setNewIndex();
          // setartList();
        }
      },
      [artWorkList, id, isLoading]
    );
  
  // Artsy JSON데이터
  const artList = (JSON.parse(artWorkList.artList)); 
  
  //상단 배너
  const banner = () => {
    const settings = {
      dots : true,
      infinite : true,
      autoplay : true,
      autoplaySpeed : 5000,
      speed : 1000,
      slidesToShow : 1,
      slidesToScroll : 1,
      pauseOnHover : true,
      className : "sliderBox",
      useCSS : true,
      arrows : false,
    };

    return (
      <Slider {...settings}>
        <div className={mainStyle.sliderBox}>
          <Link to={`/about/${id}`}>
            <div className={mainStyle.imgBox}>
              <img src={`${process.env.PUBLIC_URL}/img/banner01.svg`} alt="banner"/>
            </div>
            <div className={mainStyle.bannerText}>
              <p>Humming</p>
              <p>Connect</p>
              <p>새로운 문화예술 공간으로<br/>여러분을 초대합니다</p>
              <span className={mainStyle.bannerInnerBtn}>About Us</span>
            </div>
          </Link>          
        </div>
        <div className={mainStyle.sliderBox}>
          <Link to={`/search/${id}`}>
            <div className={mainStyle.imgBox}>
              <img src={`${process.env.PUBLIC_URL}/img/banner02.jpg`} alt="banner"/>
            </div>
            <div className={mainStyle.bannerText}>              
              <p>Humming</p>
              <p>Connect</p>
              <p>색다른 작품을 찾으세요?<br/>바로 검색하세요</p>
              <span className={mainStyle.bannerInnerBtn_search}>Search</span>
            </div>
          </Link>
        </div>
        <div className={mainStyle.sliderBox}>
          <Link to={(id === 'undefined' || id === undefined) ? '/login' : `/sell/${id}`}>
            <div className={mainStyle.imgBox}>
              <img src={`${process.env.PUBLIC_URL}/img/banner03.jpg`} alt="banner"/>
            </div>
            <div className={mainStyle.bannerText}>
              <p>Humming</p>
              <p>Connect</p>
              <p>UNIQUE 작품의 주인을<br/>찾아드립니다</p>
              <span className={mainStyle.bannerInnerBtn_sell}>Sell</span>
            </div>
          </Link>
        </div>                
      </Slider>
    );
  }

  //Our Picks
  const CenterMode = () => {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    
    return(
      <div className="slider-container">
      <Slider {...settings}>        
        {[...Array(parseInt(10))].map((n,index) => {
          return(
            //key={artList[index + 3]?.artCode}
            <div className={mainStyle.centerList} key={index}>
              <Link to={`/detail/${artList[index + 3]?.artCode}/${artList[index + 3]?.price}/${id}`} key={artList[index + 3]?.artCode}>
                <img src={artList[index + 3]?.imgUrl} alt="Our Picks art"/>
                <div className={mainStyle.descriptText}>
                  <p>{artList[index + 3]?.artist}</p>
                  <p>{artList[index + 3]?.title}, {artList[index]?.year}</p>          
                  <p>￦{artList[index + 3]?.price.toLocaleString()}</p>          
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
    )
  } // our picks slide


  //NEW 리스트
  const newListItem = () => {
    const idx = Math.floor((Math.random() * 26) + 15);
    return (
      [...Array(parseInt(4))].map((n, index) => {      
      return (
        <li key={index}>
          <Link to={`/detail/${artList[idx+index]?.artCode}/${artList[idx+index]?.price}/${id}`}>
            <div><img src={artList[idx+index]?.imgUrl} alt="new art Item" /></div>
            <div className={mainStyle.newText}>
              <p>{artList[idx+index]?.title}</p>
              <p>{artList[idx+index]?.artist}</p>
            </div>
          </Link>
        </li>
      );
    }));
  }

  // 이미지/작가/타이틀,연도/가격 정보 표시하는 <li></li> 태그 
  
  // const artListItem = artList?.map(artItem => <ArtItem key={artItem.artCode} art={artItem} id={id}/>);
  const artListItem = artList?.map(artItem => <ArtItem key={artItem.artCode} art={artItem} id={id}/>);
  const onSaleList = () => {
    //const startIdx = 
    return(
      [...Array(parseInt((clickCount + 1) * 20))].map((saleItem, index) => artListItem[index])
    );    
  }
  let count = 0;
  // addSaleList button click handler
  const addSaleList = () => {
    count++;
    setClickCount(count); // 추가 버튼 클릭한 횟수 state 업데이트
    console.log('count : ' + count);    
  }

  return(    
    <>
      {isLoading ? <LoadingSpinner/> : console.log('loading complete')}
      <div className={mainStyle.mainCont}>      
        {banner()}{/* banner */}
        
        {/* NEW */} 
        <div className={mainStyle.mainListBox}>
          <p className={mainStyle.mainListTitle}>NEW</p>
          <ul>
            {newListItem()}
          </ul>                  
        </div>
        
        {/* OurPicks */}
        <p className={mainStyle.mainListTitle} style={{paddingInline:20}}>Our Picks</p>
        <div className={mainStyle.pickBox}>          
          {CenterMode()} 
        </div>

        {/* 등록된 전체 상품 리스트 */}
        <div className={mainStyle.saleBox}>
          <p className={mainStyle.mainListTitle}>On Sale</p>
          <ul className='onSaleList'>
            {/* {artListItem} */}
            {onSaleList()}
          </ul>
          <button className={mainStyle.addItemsBtn} onClick={addSaleList}>View More</button>
        </div>

        {/* Promotion */}
        <div className={mainStyle.promoBox}>
          <p className={mainStyle.mainListTitle}>Promotion</p>
          <ul>
            <li>
              <Link to='https://tbilisiartfair.art/en' target='_blank'>
              <img src="https://tbilisiartfair.art/uploads/programme/1711377193.webp" alt="TBILISI ART FAIR" />
              <div className={mainStyle.promoText}>
                <p>TBILISI ART FAIR(TAF)</p>
                <p>11 - 14 APRIL</p>
              </div>
              </Link>
            </li>
            <li>
              <Link to='https://www.artvancouver.net/' target='_blank'>
                <video controls="" autoPlay={true} name="media" loop={true} draggable={true}><source src="https://video.wixstatic.com/video/80b7c2_c17d6630062b4563869aa3ee01e55726/480p/mp4/file.mp4" type="video/mp4"/></video>
                <div className={mainStyle.promoText}>
                  <p>ART VANCOUVER</p>
                  <p>11 - 14 APRIL</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>        
      </div>
    </>
  );
}
