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
          <div className='quick-links'>
            <h7>Quick links</h7>
            <h7>About us</h7>
          </div>
        </div>
        <div className='footer-details'>
          <div className='para'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
              <li>Categories</li>
              <li>Our brands</li>
              <li>Search history</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Contact us</li>
              <li>Billing policy</li>
              <li>Copyright policy</li>
              <li>Our partners</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <hr/>

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