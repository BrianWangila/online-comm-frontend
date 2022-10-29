import React, { useState,  } from 'react'
import '../style/UserAvatar.css'
import { Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'



function UserAvatar({ user }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    window. location. reload() 
    
  }

  const handleProfile = () => {
    navigate('/profile')
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

export default UserAvatar