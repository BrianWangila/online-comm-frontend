import React from 'react'
import '../style/Profile.css'


function Profile({ user, handleClose }) {


  return (
    <>
      <div className='profile-card' onMouseOut={handleClose}>
        <ul>
          TEST
          {/* <li>Username: {user.user.username}</li>
          <li>Email address: {user.user.email}</li>
          <li>Location: {user.user.location}</li> */}
        </ul>
      </div>
    </>
  )
}

export default Profile