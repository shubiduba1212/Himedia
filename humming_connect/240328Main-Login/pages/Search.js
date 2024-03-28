import { useEffect, useState } from 'react';
import SearchStyle from '../styles/Search.module.css'
import ArtItem from '../components/ArtItem';

export default function Search(artWorkList){

  const [artsList, setArtsList] = useState([]); // 작품리스트
  const [searchValue, setSearchValue] = useState(''); // 검색어
  const [searchedItem, setSearchedItem] = useState(''); // 검색된 작품
  const [count, setCount] = useState(''); // 검색된 작품 갯수
  const [none, setNone] = useState(    
    <div className={SearchStyle.nullResult}>
      <p>검색어를 입력해주세요. </p>
    </div>
  ) // 검색결과 없을 시 표시 영역
  const [searchTitle, setSearchTitle] = useState('SEARCH RESULT'); // 검색 결과 title

  useEffect(
    () => {
      setArtsList(JSON.parse(artWorkList.artList));     
    },
    [searchValue]
  );

  // 검색버튼 클릭시, 검색 결과 표시
  const onClickHandler = () => {  
    const filteredList = artsList.filter(artItem => (artItem.artist.toLowerCase()).match(searchValue.toLowerCase()) || (artItem.title.toLowerCase()).match(searchValue.toLowerCase()));

    if(searchValue === null || searchValue === undefined || searchValue === ''){
      alert('검색어를 입력하지 않았습니다.\n검색어를 입력해주세요🔍');
      setNone(
        <div className={SearchStyle.nullResult}>
          <p>검색어를 입력해주세요. </p>
        </div>
      );
      setSearchTitle('SEARCH RESULT'); // 검색 결과 타이틀 변경
      setSearchedItem(''); // 검색어 미입력시 결과 초기화
      setCount(`0개의 작품이 검색되었습니다.`); // 검색 작품 갯수 표시
    } else {
      setSearchTitle(`'${searchValue}' 검색 결과`); // 검색 결과 타이틀 변경
      if(filteredList.length === 0){ //검색어를 입력했으나 해당 검색 결과가 없는 경우
        setNone(
          <div className={SearchStyle.nullResult}>
            <p>검색하신 '{searchValue}' 결과가 없습니다.</p>
          </div>
        );
        setSearchedItem(''); // 검색어 미입력시 결과 초기화
      }else{
        setSearchedItem(filteredList.map(art => <ArtItem key={art.artCode} art={art}/>));
        setNone(''); // 검색내용 있을 시 검색결과 없음 내용 빈칸으로 초기화   
      }
      setCount(`${filteredList.length} 개의 작품이 검색되었습니다.`); // 검색 작품 갯수 표시  
    }                
    setSearchValue('') // 검색 후 검색 결과 초기화    
  }

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
              onKeyDown={e => e.key == "Enter" ? onClickHandler() : null }
              value={searchValue || ''} 
            />
            <button onClick={onClickHandler}>검색</button>
          </div>
          <div className={SearchStyle.searchResult}>
            <p>{searchTitle}</p>
            <p>{count}</p>            
            {/*<p>😆😍개의 작품이 검색되었습니다.</p>*/}
            <div className={SearchStyle.searchResultList}>

              {none} {/* 검색결과 없을 시 */}

              <ul >                
                {searchedItem} 
              </ul>

            </div>
          </div>
        </div>
        {/* search_cont */}
      </div>
    </>
    
  );
}