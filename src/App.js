import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPage from './components/SearchPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import SingleProduct from './components/SingleProduct';
import ProductCard from './components/ProductCard';
import Products from './components/Products';
import { useEffect, useState } from 'react';

function App() {
  const[products,setProducts]=useState(null)

  useEffect((()=>{
    fetch("http://localhost:3000/toptrends")
    .then(res=>{
      if(res.ok){
        res.json().then(setProducts)
      }
    })


  }),[])

  const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        {/* add your routes here */}
        <Route path="/signup" element={ <SignUp/> }>
          
          {/* mycomponent goes here */}
        </Route>
        <Route path="/login" element={ <Login/> }>
        </Route>
        
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/search" element={<>
        <Navbar/>
        <SearchPage/>
        </>}/>
        <Route path='/search-results' element={<SearchResults />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path='/single-product' element={<SingleProduct />}></Route>
        <Route path='/products' element={
        <>
        <Navbar/>
        <SearchPage setProducts={setProducts}/>
        {products?<Products products={products} setProducts={setProducts}/>:null}
        <Footer/>
        </>
      }></Route>
        <Route exact path="/" element={
        <div style={{display:"flex",flexDirection:"column"}}>
          <button onClick={() => navigate("/mycomponent")}>Mycomponent</button>
          <button onClick={() => navigate("/navbar")}>Navbar</button>
          <button onClick={() => navigate("/signup")}>SignUp</button>
          <button onClick={() => navigate("/search")}>Search</button>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/search-results")}>Search Results</button>
          <button onClick={() => navigate("/footer")}>Footer</button>
          <button onClick={() => navigate("/single-product")}>Single Product</button>
          <button onClick={() => navigate("/products")}>Products</button>
        </div>
          }
          />
      </Routes>
    </div>
  );
}

export default App;
