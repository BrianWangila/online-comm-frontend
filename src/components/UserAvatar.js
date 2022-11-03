import React from 'react'
import '../style/UserAvatar.css'
import { Avatar } from '@material-ui/core'





export default function UserAvatar({ user }) {

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('oauth2')
    window.location.reload()  
  }

 
  return (
    <>
      <div>
        <div className="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
          <Avatar />
        </div>
      </div>

      <div className="collapse avatar-card" id="collapseExample">
        <ul className="card card-body text-li">
          <li style={{color: "orangered", fontWeight: 700}}>{user.user.username}</li>
          <li>
            <img alt='avatar' src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?b=1&k=20&m=1214428300&s=170667a&w=0&h=CK3qVSUhgSH1otzazdvV9K2e_mP5BZC8ks0UeACQk5Y=' />
          </li> 
          <li style={{fontWeight: 400}}>{user.user.name}</li>
          <li style={{fontWeight: 200, fontSize: 12+"px"}}>{user.user.email}</li>
          <li style={{fontWeight: 200, fontSize: 12+"px"}}>{user.user.location}</li>
          <div className='image-prof'>
            <button onClick={handleLogout}>Logout</button> 
          </div>
        </ul>
      </div>
    </>
  )
}
