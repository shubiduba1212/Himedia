import '../styles/slick-theme.css';
import '../styles/slick.css';
import mainStyle from './Main.module.css';
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArtItem from '../components/ArtItem'

export default function Main(artWorkList) {  
    // const [artList, setartList] = useState([]);
    //const [newIndex, setNewIndex] = useState([7,29,14,8]);

    const {id} = useParams({});
    console.log('param : ' + id);
    if(artWorkList.login === undefined){
      console.log('props' + JSON.stringify(artWorkList.login));
    }else{
      console.log('props' + JSON.stringify(artWorkList.login));
      artWorkList.login(id);
    }
    

    useEffect(
      () => {
        //console.log('new Index '+newIndex);
        if(artWorkList.artList === undefined){

        } else {
          // setartList(JSON.parse(artWorkList.artList)); //작품리스트 데이터 저장
          console.log('artWorkList :' + JSON.parse(artWorkList.artList));
          //setNewIndex(newIndex.map((num, index ) =>  num = Math.floor(Math.random() * 49))) // New 이미지 랜덤 변경을 위한 index 숫자 랜덤 생성 및 state 설정

        }        
        
        return () => {
          //setNewIndex();
          // setartList();
        }
      },
      []
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
              <img src={`${process.env.PUBLIC_URL}/img/banner01.svg`} alt="banner image"/>
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
              <img src={`${process.env.PUBLIC_URL}/img/banner02.jpg`} alt="banner image"/>
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
              <img src={`${process.env.PUBLIC_URL}/img/banner03.jpg`} alt="banner image"/>
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
                <img src={artList[index + 3]?.imgUrl} alt="Our Picks art image"/>
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

  // 이미지/작가/타이틀,연도/가격 정보 표시하는 <li></li> 태그 
  const artListItem = artList?.map(artItem => <ArtItem key={artItem.artCode} art={artItem} id={id}/>);

  //NEW 리스트
  const newListItem = () => {
    return (
      [...Array(parseInt(4))].map((n, index) => {
      const idx = Math.floor((Math.random() * 26) + 15);
      return (
        <li key={index}>
          <Link to={`/detail/${artList[idx]?.artCode}/${artList[idx]?.price}/${id}`}>
            <div><img src={artList[idx]?.imgUrl} alt="new art Item img" /></div>
            <div className={mainStyle.newText}>
              <p>{artList[idx]?.title}</p>
              <p>{artList[idx]?.artist}</p>
            </div>
          </Link>
        </li>
      );
    }));
  }

  return(    
    <>
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
          <ul>
            {artListItem}
          </ul>
        </div>

        {/* Promotion */}
        <div className={mainStyle.promoBox}>
          <p className={mainStyle.mainListTitle}>Promotion</p>
          <ul>
            <li>
              <Link to='https://tbilisiartfair.art/en' target='_blank'>
              <img src="https://tbilisiartfair.art/uploads/programme/1711377193.webp" alt="TBILISI ART FAIR img" />
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
