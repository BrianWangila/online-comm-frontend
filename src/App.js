import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';

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
        <Route path='/search-results' element={<SearchResults />}></Route>
        <Route exact path="/" element={
        <div style={{display:"flex",flexDirection:"column"}}>
          <button onClick={() => navigate("/mycomponent")}>Mycomponent</button>
          <button onClick={() => navigate("/navbar")}>Navbar</button>
          <button onClick={() => navigate("/search-results")}>Search Results</button>

        </div>
          }
          />
      </Routes>
    </div>
  );
}

export default App;
