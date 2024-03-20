import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Product from "./pages/Product";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="product" element={<Product/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
