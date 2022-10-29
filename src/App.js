import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPage from './components/SearchPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword'
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import SingleProduct from './components/SingleProduct';
import ProductCard from './components/ProductCard';
import Products from './components/Products';
import { useEffect, useState } from 'react';

import Profile from './components/Profile';
import { CircularProgress} from '@material-ui/core';

function App() {
  const [products, setProducts] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  //const token=localStorage.getItem("jwt")

  const [token, setToken] = useState("")
  useEffect((() => {
    setToken(localStorage.getItem("jwt"))
  }), [])

  useEffect((() => {
    fetch("http://localhost:3000/toptrends")
      .then(res => {
        if (res.ok) {
          res.json().then(setProducts)
        }
      })
  }), [])
  useEffect((() => {

   let t=localStorage.getItem("jwt")
   
    fetch("http://localhost:3000/me",{
      method:"GET",
      headers:{
        "Authorization":"Bearer "+t
      }   
    let t = localStorage.getItem("jwt")
    console.log(t)
    fetch("http://localhost:3000/me", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + t
      }
    })
      .then(res => {
        if (res.ok) {
          res.json().then(setUser)
        } else {
          res.json().then(console.log)
        }
      })
  }), [token])

  function onLogin(newUser) {
    navigate("/")

    localStorage.setItem("jwt", JSON.stringify(newUser.jwt))
    console.log(newUser)
    setUser(newUser)
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <>
            {loading ? <div className='overlay'>
                 <CircularProgress className='circular-progress'/>
              </div> : null}
            <div>
            </div>
            <Navbar user={user} />
            <SearchPage setProducts={setProducts} setLoading={setLoading} />
            {products ? <Products products={products} setProducts={setProducts} /> : null}
            <Footer />
          </>
        }></Route>
        <Route path="/login" element={<Login onLogin={onLogin}/>}/>
        <Route path='/signup' element={<SignUp onLogin={onLogin}/>}/>
        <Route path='/profile' element={<Profile user={user} />}/>

        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path='/signup' element={<SignUp onLogin={onLogin} />} />
        <Route path='/resetpassword' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
