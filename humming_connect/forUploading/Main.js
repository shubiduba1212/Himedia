import '../styles/slick-theme.css';
import '../styles/slick.css';
import mainStyle from './Main.module.css';
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArtItem from '../components/ArtItem'

export default function Main(artWorkList) {  
    const [artsList, setArtsList] = useState([]);
    const [bannerIndex, setBannerIndex] = useState([7,29,14]);

    useEffect(
      () => {
        if(artWorkList.artList === undefined){

        } else {
          setArtsList(JSON.parse(artWorkList.artList)); //작품리스트 데이터 저장
        }        
        setBannerIndex(bannerIndex.map(num => {num = Math.floor(Math.random() * 49)})) // 배너 이미지 랜덤 변경을 위한 index 숫자 랜덤 생성 및 state 설정
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
      autoplaySpeed : 3000,
      speed : 1000,
      slidesToShow : 1,
      slidesToScroll : 1,
      pauseOnHover : true,
      className : "sliderBox",
      useCSS : true,
      arrows : false,
    };
    //<img src={artsList[bannerIndex[0]].imgUrl} /> 
    return (
      <Slider {...settings}>
        <div className={mainStyle.sliderBox}>
          <img src={`${process.env.PUBLIC_URL}/img/banner01.jpg`} alt='banner image'/> 
        </div>
        <div className={mainStyle.sliderBox}>
          <img src={`${process.env.PUBLIC_URL}/img/banner02.jpg`} alt='banner image'/> 
        </div> 
        <div className={mainStyle.sliderBox}>
          <img src={`${process.env.PUBLIC_URL}/img/banner03.jpg`}  alt='banner image'/> 
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
        
        <div className={mainStyle.centerList}>
          <Link>
            <img src={artList[0]?.imgUrl} alt="Our Picks art image"/>
            <div className={mainStyle.descriptText}>
              <p>{artList[0]?.artist}</p>
              <p>{artList[0]?.title}, {artList[0]?.year}</p>          
              <p>￦{artList[0]?.price}</p>          
            </div>
          </Link>
        </div>
        <div className={mainStyle.centerList}>
          <Link>
            <img src={artList[0]?.imgUrl} alt="Our Picks art image"/>
            <div className={mainStyle.descriptText}>
              <p>{artList[0]?.artist}</p>
              <p>{artList[0]?.title}, {artList[0]?.year}</p>          
              <p>￦{artList[0]?.price}</p>          
            </div>
          </Link>
        </div>
        <div className={mainStyle.centerList}>
          <Link>
            <img src={artList[0]?.imgUrl} alt="Our Picks art image"/>
            <div className={mainStyle.descriptText}>
              <p>{artList[0]?.artist}</p>
              <p>{artList[0]?.title}, {artList[0]?.year}</p>          
              <p>￦{artList[0]?.price}</p>          
            </div>
          </Link>
        </div>
        <div className={mainStyle.centerList}>
          <Link>
            <img src={artList[0]?.imgUrl} alt="Our Picks art image"/>
            <div className={mainStyle.descriptText}>
              <p>{artList[0]?.artist}</p>
              <p>{artList[0]?.title}, {artList[0]?.year}</p>          
              <p>￦{artList[0]?.price}</p>          
            </div>
          </Link>
        </div>
        <div className={mainStyle.centerList}>
          <Link>
            <img src={artList[0]?.imgUrl} alt="Our Picks art image"/>
            <div className={mainStyle.descriptText}>
              <p>{artList[0]?.artist}</p>
              <p>{artList[0]?.title}, {artList[0]?.year}</p>          
              <p>￦{artList[0]?.price}</p>          
            </div>
          </Link>
        </div>
      </Slider>
    </div>
    )
  } // our picks slide

  // 이미지/작가/타이틀,연도/가격 정보 표시하는 <li></li> 태그 
  const artListItem = (JSON.parse(artWorkList.artList))?.map(artItem => <ArtItem key={artItem.artCode} art={artItem}/>);

  //NEW 리스트
  const newListItem = () => {
    const index = Math.floor(Math.random() * 49);
      const newItem = (
        <li>
          <Link>
            <div><img src={artList[index]?.imgUrl} alt="new art Item img" /></div>
            <div className={mainStyle.newText}>
              <p>{artList[index]?.title}</p>
              <p>{artList[index]?.artist}</p>
            </div>
          </Link>
        </li>
      )
      return newItem;
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
            {newListItem()}
            {newListItem()}
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
