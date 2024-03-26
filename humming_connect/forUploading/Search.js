import { useEffect, useState } from 'react';
import SearchStyle from '../styles/Search.module.css'
import ArtItem from '../components/ArtItem';

export default function SearchTest(artWorkList){

  const [artsList, setArtsList] = useState([]); // 작품리스트
  const [searchValue, setSearchValue] = useState(''); // 검색어
  const [searchedItem, setSearchedItem] = useState(''); // 검색된 작품
  const [count, setCount] = useState(''); // 검색된 작품 갯수
  const [none, setNone] = useState(    
    <div className={SearchStyle.nullResult}>
      <p>검색어를 입력해주세요. </p>
    </div>
  ) // 검색결과 없을 시 표시 영역


  useEffect(
    () => {
      setArtsList(JSON.parse(artWorkList.artList));
      //setArtsList(getArtworkList());
      //console.table(artsList);      
    },
    [searchValue]
  );

  // 검색버튼 클릭시, 검색 결과 표시
  const onClickHandler = () => {  
    
    console.log(artsList);
    const filteredList = artsList.filter(artItem => (artItem.artist.toLowerCase()).match(searchValue.toLowerCase()) || (artItem.title.toLowerCase()).match(searchValue.toLowerCase()));
    console.log('검색한 결과 : ' + searchValue);

    if(searchValue === null || searchValue === undefined || searchValue === ''){
      alert('검색어를 입력하지 않았습니다.\n검색어를 입력해주세요🔍');
      setNone(
        <div className={SearchStyle.nullResult}>
          <p>검색어를 입력해주세요. </p>
        </div>
      );
      setSearchedItem(''); // 검색어 미입력시 결과 초기화
      setCount(`0개의 작품이 검색되었습니다.`); // 검색 작품 갯수 표시
    } else {
      console.log('검색어 입력 완료');
      console.log(filteredList.length);
      if(filteredList.length === 0){ //검색어를 입력했으나 해당 검색 결과가 없는 경우
        console.log('검색 결과 : ' + filteredList.length);
        setNone(
          <div className={SearchStyle.nullResult}>
            <p>검색하신 '{searchValue}' 결과가 없습니다.</p>
          </div>
        );
        setSearchedItem(''); // 검색어 미입력시 결과 초기화
      }else{
        console.log('검색 결과 : ' + filteredList.length);
        setSearchedItem(filteredList.map(art => <ArtItem key={art.artCode} art={art}/>));
        setNone(''); // 검색내용 있을 시 검색결과 없음 내용 빈칸으로 초기화   
      }
      setCount(`${filteredList.length} 개의 작품이 검색되었습니다.`); // 검색 작품 갯수 표시  
    }                
    setSearchValue('') // 검색 후 검색 결과 초기화    
  }

  //<div className={`${SearchStyle.d_none}, ${SearchStyle.pagination}`}>
//   <span className={SearchStyle.prevBtn}></span>
//   <ul>
//     <li className={SearchStyle.active}><Link>1</Link></li>
//   </ul>
//   <span className={SearchStyle.nextBtn}></span>
// </div>

  return(    
    <>      
      <div className={SearchStyle.main_cont}>
        <div className={SearchStyle.search_cont}>
          <div className={SearchStyle.searchBar}>
            <input 
              type="search" 
              name="artName"
              placeholder="검색할 작품 및 작가명을 입력해주세요."
              onChange={e => setSearchValue(e.target.value)}
              value={searchValue || ''} 
            />
            <button onClick={onClickHandler}>검색</button>
          </div>
          <div className={SearchStyle.searchResult}>
            <p>SEARCH RESULT</p>
            <p>{count}</p>            
            {/*<p>😆😍개의 작품이 검색되었습니다.</p>*/}
            <div className={SearchStyle.searchResultList}>

              {none} {/* 검색결과 없을 시 */}

              <ul >                
                {searchedItem} 
              </ul>

              {/* pagination */}
              {/*<div className={`${SearchStyle.pagination}, ${SearchStyle.d_none}`}>*/}
              
            </div>
          </div>
        </div>
        {/* search_cont */}
      </div>
    </>
    
  );
}
