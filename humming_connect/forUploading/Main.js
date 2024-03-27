import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mainStyle from './Main.module.css';
import Slider from "react-slick";
//import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ArtItem from '../components/ArtItem';

export default function Main(artWorkList){
  //console.log(typeof ArtWorkList().length);
  // console.log(JSON.parse(ArtWorkList()));

  //const newArtList = JSON.parse(artList());
  // console.log()

  // const tagArt = newArtList.map(artItem => 
  //       console.log(artItem.artist)
  //   )
  // const artListItem =  (JSON.parse(artWorkList.artList)).map(artItem => <ArtItem key={artItem.artCode} art={artItem}/>);

  // const artListTitle = (JSON.parse(artWorkList.artList)).map(artItem => console.log(artItem));
  
  const artList = (JSON.parse(artWorkList.artWorkList));

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
        <div className={mainStyle.slickCenter}>
          <h3 className={mainStyle.h3}>1</h3>
        </div>
        <div className={mainStyle.slickCenter}>
          <h3 className={mainStyle.h3}>2</h3>
        </div>
        <div className={mainStyle.slickCenter}>
          <h3 className={mainStyle.h3}>3</h3>
        </div>
        <div className={mainStyle.slickCenter}>
          <h3 className={mainStyle.h3}>4</h3>
        </div>
        <div className={mainStyle.slickCenter}>
          <h3 className={mainStyle.h3}>5</h3>
        </div>
        <div className={mainStyle.slickCenter}>
          <h3 className={mainStyle.h3}>6</h3>
        </div>
      </Slider>
    </div>
    )
    // return (
    //   <div className="slider-container">
    //     <Slider {...settings}>
    //       <div className={mainStyle.centerBox}>
    //         <Link>
    //           <img src={artList[32].imgUrl} alt="new art Item img" />
    //           <div className={mainStyle.newText}>
    //             <p>{artList[32].title}</p>
    //             <p>{artList[32].artist}</p>
    //           </div>
    //         </Link>
    //       </div>
    //       <div className={mainStyle.centerBox}>
    //         <Link>
    //             <img src={artList[6].imgUrl} alt="new art Item img" />
    //             <div className={mainStyle.newText}>
    //               <p>{artList[6].title}</p>
    //               <p>{artList[6].artist}</p>
    //             </div>
    //           </Link>
    //       </div>
    //       <div className={mainStyle.centerBox} style={{marginRight: 10}}>
    //         <Link>
    //             <img src={artList[19].imgUrl} alt="new art Item img" />
    //             <div className={mainStyle.newText}>
    //               <p>{artList[19].title}</p>
    //               <p>{artList[19].artist}</p>
    //             </div>
    //         </Link>
    //       </div>
    //       <div className={mainStyle.centerBox}>
    //         <Link>
    //           <img src={artList[23].imgUrl} alt="new art Item img" />
    //           <div className={mainStyle.newText}>
    //             <p>{artList[23].title}</p>
    //             <p>{artList[23].artist}</p>
    //           </div>
    //         </Link>
    //       </div>
    //       <div className={mainStyle.centerBox} style={{marginRight: 10}}>
    //         <Link>
    //           <img src={artList[13].imgUrl} alt="new art Item img" />
    //           <div className={mainStyle.newText}>
    //             <p>{artList[13].title}</p>
    //             <p>{artList[13].artist}</p>
    //           </div>
    //         </Link>
    //       </div>
    //       <div className={mainStyle.centerBox} style={{marginRight: 10}}>
    //         <Link>
    //           <img src={artList[9].imgUrl} alt="new art Item img" />
    //           <div className={mainStyle.newText}>
    //             <p>{artList[9].title}</p>
    //             <p>{artList[9].artist}</p>
    //           </div>
    //         </Link>
    //       </div>
    //     </Slider>
    //   </div>
    // );
  }

  //console.log('artList json : ' + JSON.stringify(JSON.parse(artWorkList.artWorkList)));

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
  //{banner()}

  const artListItem = (JSON.parse(artWorkList.artWorkList)).map(artItem => 
    <ArtItem key={artItem.artCode} art={artItem}/>
    // <li key={artItem.artCode} art={artItem}>
    //   <Link>
    //     <img src={artItem.imgUrl} alt="search result"/>
    //     {/*src={`${process.env.PUBLIC_URL}/img/searchIcon.svg`}*/}
    //     <div>
    //       <p>{artItem.artist}</p>
    //       <p>{artItem.description}</p>
    //       <p>{artItem.title}, {artItem.date}</p>          
    //       <p>￦{artItem.price}</p>          
    //     </div>
    //   </Link>
    // </li>
  );


  //NEW 리스트
  const newListItem = () => {
    const index = Math.floor(Math.random() * 49);
      console.log('new list index : ' + index);
      const newItem = (
        <li>
          <Link>
            <img src={artList[index].imgUrl} alt="new art Item img" />
            <div className={mainStyle.newText}>
              <p>{artList[index].title}</p>
              <p>{artList[index].artist}</p>
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

        <div className={mainStyle.mainListBox}>
          <p className={mainStyle.mainListTitle}>NEW</p>
          <ul>
            {newListItem()}
            {newListItem()}
            {newListItem()}
            {newListItem()}
          </ul> {/* NEW */}

          <p className={mainStyle.mainListTitle}>Our Picks</p>
          {CenterMode()}{/* OurPicks */}


        </div>
        <ul style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20}}>
          {artListItem}
        </ul>
      </div>
    </>
  );
}
