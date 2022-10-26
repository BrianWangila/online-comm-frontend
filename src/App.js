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
        <Route exact path="/">
          <button onClick={() => navigate("/mycomponent")}>Mycomponent</button>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
