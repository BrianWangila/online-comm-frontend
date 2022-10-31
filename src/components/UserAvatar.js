import React, { useState  } from 'react'
import '../style/UserAvatar.css'

import { Avatar, Dialog } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
import { GoogleLogout } from 'react-google-login';
function UserAvatar({ user }) {
  const navigate = useNavigate()
  const [ profile, setProfile ] = useState([]);
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

  const userName = user.user.username ? (user.user.username):(user.user.name)

  return (
    <>
      <div>
        <div type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <Avatar />
        </div>
      </div>
      <div className="collapse avatar-card" id="collapseExample">
        <ul className="card card-body text-li">
          <li style={{ color: "orangered" }}>{userName}</li>
          <li type="button" onClick={handleOpen}>Profile</li>
          <button onClick={handleLogout}>Logout</button> 
        </ul>
        <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <Profile handleClose={handleClose}/>
      </Dialog>
    </>
  )
}
export default UserAvatar;