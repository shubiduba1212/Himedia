import { useEffect } from "react";
import topBtnStyle from './TopBtn.module.css';

export default function TopBtn(){

  // 윈도우 스크롤 최상단으로 이동
  const scrollTop = () => {
    window.scrollTo({
      top : 0,
      behavior : 'smooth'
    });
    document.querySelector(`.${topBtnStyle.topBtn}`).classList.remove(`${topBtnStyle.active}`);
  }

  useEffect(
    () => {
      const clickShowBtn = () => {

        if(window.scrollY > 500){
          document.querySelector(`.${topBtnStyle.topBtn}`).classList.add(`${topBtnStyle.active}`);          
        } else {
          document.querySelector(`.${topBtnStyle.topBtn}`).classList.remove(`${topBtnStyle.active}`);         
        }
      }

      console.log(window.scrollY);
      window.addEventListener("scroll", clickShowBtn);

      return () => {
        window.removeEventListener("scroll", clickShowBtn);
      }
    },[]
  );

  return (
    <span className={topBtnStyle.topBtn} onClick={scrollTop}>Top</span>
  );

}