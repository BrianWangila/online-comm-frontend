import React, { useState  } from 'react'
import '../style/UserAvatar.css'

import { Avatar, Dialog } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login';





export default function UserAvatar({ user }) {
  const navigate = useNavigate()
  const [ profile, setProfile ] = useState([]);
  const [open, setOpen] = useState(false)
  const clientId = '402509286566-rc7onvlh0f5n89779pb34hhhkerqv9j6.apps.googleusercontent.com';
  
  const handleLogout = () => {
    localStorage.removeItem('jwt')
    window. location. reload() 
    
  }

  

  const handleProfile = () => {
    navigate('/profile')
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
 
  const logOut = () => {
    setProfile(null);
    navigate('/login')
  };


  return (
    <>
      <div>
        <div className="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <Avatar />
        </div>
      </div>
      <div className="collapse avatar-card" id="collapseExample">
        <ul className="card card-body text-li">
          <li style={{color: "orangered"}}>{user.user.username}</li>
          <li type="button" onClick={handleProfile}>Profile</li>
          <button onClick={handleLogout}>Logout</button> 
        </ul>
        <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={logOut} />
      </div>
    </>
  )
}
