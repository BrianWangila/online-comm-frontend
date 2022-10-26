import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        {/* add your routes here */}
        <Route path="/mycomponent">
          {/* mycomponent goes here */}
        </Route>
        <Route exact path="/" element={<button onClick={() => navigate("/mycomponent")}>Mycomponent</button>}/>
      </Routes>
    </div>
  );
}

export default App;
