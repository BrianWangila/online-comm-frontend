import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPage from './components/SearchPage';
import SignUp from './components/SignUp';
function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        {/* add your routes here */}
        <Route path="/signup" element={ <SignUp/> }>
          {/* mycomponent goes here */}
        </Route>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/search" element={<>
        <Navbar/>
        <SearchPage/>
        </>}/>
        <Route exact path="/" element={
        <div style={{display:"flex",flexDirection:"column"}}>
          <button onClick={() => navigate("/mycomponent")}>Mycomponent</button>
          <button onClick={() => navigate("/navbar")}>Navbar</button>
          <button onClick={() => navigate("/search")}>Search</button>
          </div>
          }
          />
      </Routes>
    </div>
  );
}

export default App;
