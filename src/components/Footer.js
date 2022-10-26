import React from 'react'
import '../style/Footer.css'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRoundedIcon'



function Footer() {

  return (
    <>
      <footer className='footer'>
        <div className='footer-murife'>
          <h6>MURIFE</h6>
        </div>
        <div className='footer-icons'>
          <ul>
            <li>Icon</li>
            <li>Icon</li>
            <li>Icon</li>
            <li>Icon</li>
          </ul>
          {/* <div>
            <TwitterIcon size="large"
            aria-label="add" 
            sx={{width:25, height:25, marginLeft:2}} />
            <LinkedInIcon size="large"
            aria-label="add" 
            sx={{width:25, height:25, marginLeft:2}} />
            <FacebookRoundedIcon size="large"
            aria-label="add" 
            sx={{width:25, height:25, fontsize: "40px", marginLeft: 2}} />
          </div> */}
          <p>All rights reserved @2022</p>
        </div>
      </footer>
    </>
  )
}

export default Footer