import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
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
        <Route exact path="/" element={
        <div style={{display:"flex",flexDirection:"column"}}>
          <button onClick={() => navigate("/mycomponent")}>Mycomponent</button>
          <button onClick={() => navigate("/navbar")}>Navbar</button>
          </div>
          }
          />
      </Routes>
    </div>
  );
}

export default App;
