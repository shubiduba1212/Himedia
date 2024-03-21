import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Search from './pages/Search';
import Layout from './layouts/Layout';
import Main from './pages/Main';

function App() {

  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout logined={true}/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="search" element={<Search/>}/>
          </Route>
        </Routes>
      </BrowserRouter>   
    </>    
  );
}

export default App;
