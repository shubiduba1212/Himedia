import SearchStyle from '../styles/Search.module.css';
import { Link } from 'react-router-dom';

export default function ArtItem({art}){
  return(
    <li>
      <Link to={`/detail/${art.artCode}/${art.price}`}>
        <img src={art.imgUrl} alt="search result"/>
        {/*src={`${process.env.PUBLIC_URL}/img/searchIcon.svg`}*/}
        <div className={SearchStyle.descriptText}>
          <p>{art.artist}</p>
          <p>{art.title}, {art.year}</p>          
          <p>￦{art.price.toLocaleString()}</p>          
        </div>
      </Link>
    </li> 
  );
}
