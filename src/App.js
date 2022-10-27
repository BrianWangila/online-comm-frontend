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

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        {/* add your routes here */}
        <Route path="/signup" element={ <SignUp/> }> </Route>
        <Route path="/resetpassword" element={ <ForgotPassword/> }>
          
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
        <Route exact path="/" element={
        <div style={{display:"flex",flexDirection:"column"}}>
          <button onClick={() => navigate("/mycomponent")}>Mycomponent</button>
          <button onClick={() => navigate("/navbar")}>Navbar</button>
          <button onClick={() => navigate("/signup")}>SignUp</button>
          <button onClick={() => navigate("/search")}>Search</button>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/resetpassword")}>Forgot Password</button>
          <button onClick={() => navigate("/search-results")}>Search Results</button>
          <button onClick={() => navigate("/footer")}>Footer</button>
          <button onClick={() => navigate("/single-product")}>Single Product</button>
        </div>
          }
          />
      </Routes>
    </div>
  );
}

export default App;
