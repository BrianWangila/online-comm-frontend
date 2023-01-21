import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Footer.css'



function Footer() {

  const navigate = useNavigate()

  function handleContact(){
    navigate('/contact-us')
  }

  return (
    <>
      <footer className='footer'>
        <div className='footer-murife'>
          <h6>MURIFE</h6>
          <div className='quick-links'>
            <h6>Quick links</h6>
            <h6>About us</h6>
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
              <li onClick={handleContact}>Contact us</li>
              <li>Contact us</li>
              <li>Billing policy</li>
              <li>Copyright policy</li>
              <li>Our partners</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <hr/>
        with
//         <div className='footer-icons'>
//           <ul>
//           {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> */}
//             <li><a className="fa-brands fa-whatsapp" href='https://www.whatsapp.com/' target = "_blank" rel="noopener noreferrer"></a></li>
//             <li><a className="fa-brands fa-twitter" href='https://twitter.com/' target = "_blank" rel="noopener noreferrer"></a></li>
//             <li><a className="fa-brands fa-facebook" href='https://web.facebook.com/' target = "_blank" rel="noopener noreferrer"></a></li>
//             <li><a className="fa-brands fa-instagram" href='https://www.instagram.com/' target = "_blank" rel="noopener noreferrer"></a></li>
//           </ul>
//           <p>All rights reserved @2022</p>
//         </div>
      </footer>
    </>
  )
}

export default Footer;
