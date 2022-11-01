import React, { useState  } from 'react'
import '../style/UserAvatar.css'

import { Avatar, Dialog } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'





export default function UserAvatar({ user }) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
 
  
  const handleLogout = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('oauth2')
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
      </div>
    </>
  )
}
