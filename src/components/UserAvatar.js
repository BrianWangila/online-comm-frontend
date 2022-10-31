import React, { useState,  } from 'react'
import '../style/UserAvatar.css'
import { Avatar, Dialog } from '@material-ui/core'
import Profile from './Profile'



function UserAvatar({ user }) {
  const {open, setOpen} = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    window. location. reload() 
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

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
      </div>
      <Dialog open={open} onClose={handleClose}>
        <Profile handleClose={handleClose}/>
      </Dialog>
    </>
  )
}
export default UserAvatar;