import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        {/* add your routes here */}
        <Route path="/mycomponent">
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
