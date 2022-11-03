import React from 'react'
import '../style/Footer.css'
// import FontAwesomeIcon from '@fortawesome'



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
            <p> Murife is here to make your online shopping experience easy and flawless as we help you decide on the best product to purchase from the best online shops.</p>
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
              <li><a>Contact us</a></li>
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
            <li><a className="fa-brands fa-whatsapp" href='https://www.whatsapp.com/' target = "_blank"></a></li>
            <li><a className="fa-brands fa-twitter" href='https://twitter.com/' target = "_blank"></a></li>
            <li><a className="fa-brands fa-facebook" href='https://web.facebook.com/' target = "_blank"></a></li>
            <li><a className="fa-brands fa-instagram" href='https://www.instagram.com/' target = "_blank"></a></li>
          </ul>
          <p>All rights reserved @2022</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;