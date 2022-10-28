import { useNavigate } from 'react-router-dom'
import '../style/navbar.css'

export default function Navbar({user}){
    const navigate=useNavigate()
    function handleLoginOnclick(){
        navigate("/login")
    }
    return (
        <div className="navbar">
            <div className="navbar-logo">Murife</div>
            {user?
            <div>
                <img/>
                <p>{user.username}</p>
            </div>
            :<div>
                <button onClick={handleLoginOnclick} className="navbar-login">Login</button>
            </div>}
        </div>
    )
}