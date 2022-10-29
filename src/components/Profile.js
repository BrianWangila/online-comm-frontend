import React from 'react'
import '../style/Profile.css'
import { Button } from '@material-ui/core'


function Profile({user}) {
  return (
    <>
      <div className='profile-card'>
        <ul>
          <li>Name: {user.user.name}</li>
          <li>Username: {user.user.username}</li>
          <li>Email address: {user.user.email}</li>
          <li>Location: {user.user.location}</li>
        </ul>
      </div>
      <div className='profile-button'>
        <Button> Edit details </Button>
      </div>
    </>
  )
}

export default Profile