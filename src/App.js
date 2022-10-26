import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
        <Route exact path="/signup" element={<button onClick={() => navigate("/mycomponent")}>SIGN UP</button>}/>
      </Routes>
    </div>
  );
}

export default App;
