import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/navbar.css'
import UserAvatar from './UserAvatar'



export default function Navbar({user}){
    

    const navigate=useNavigate()
    function handleLoginOnclick(){
        navigate("/login")
    }

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img id='logo' src='../images/logo.png' alt='logo' />
            </div>
            {user?
            <div className='user-avatar' >
                <UserAvatar user={user}/>
            </div>
            :<div>
                <button onClick={handleLoginOnclick} className="navbar-login">Login</button>
            </div>}
            
        </div>
    )
}