import { ArtList } from "./ArtList";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mainStyle from './Main.module.css';
import Slider from "react-slick";


export default function Main(){
  
  //console.table(JSON.stringify(ArtList()));


  const CenterMode = () => {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div className={mainStyle.centerBox} style={{marginRight: 10}}>
              <h3>1</h3>
            </div>
            <div className={mainStyle.centerBox} style={{marginRight: 10}}>
              <h3>2</h3>
            </div>
            <div className={mainStyle.centerBox} style={{marginRight: 10}}>
              <h3>3</h3>
            </div>
            <div className={mainStyle.centerBox} style={{marginRight: 10}}>
              <h3>4</h3>
            </div>
            <div className={mainStyle.centerBox} style={{marginRight: 10}}>
              <h3>5</h3>
            </div>
            <div className={mainStyle.centerBox} style={{marginRight: 10}}>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
    }

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
        arrows : true,
      };

      return (
        <Slider {...settings}>
          <div className={mainStyle.sliderBox}><img src={`${process.env.PUBLIC_URL}/logo192.png`} alt=""/> </div>         
            <div className={mainStyle.sliderBox}><img src={`${process.env.PUBLIC_URL}/P1045114.jpg`} alt=""/></div>
            <div className={mainStyle.sliderBox}><img src={`${process.env.PUBLIC_URL}/P1045642.jpg`} alt=""/></div>
        </Slider>
      );
    }
    //{banner()}

    return(
      <div>
        <h1>메인</h1>
        
        
        <br/>
        {CenterMode()}
      </div>
    );
  }
