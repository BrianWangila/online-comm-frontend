import React from 'react'
import '../style/Footer.css'
// import FontAwesomeIcon from ''



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
          {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> */}
            <li><i class="fa-brands fa-whatsapp"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
          </ul>
          <p>All rights reserved @2022</p>
        </div>
      </footer>
    </>
  )
}

export default Footer