import React from 'react'
import '../style/ContactUs.css'
import Navbar from '../components/Navbar'
import Footer from './Footer'



function ContactUs({user}) {


  return (

    <>
    <Navbar user={user}/>
    <div className='contact-us'>
        <div className='header-title'>
          <img src='../images/logo192.png' alt='logo'/>
          <h4>Contact Us</h4>
          <img src='../images/logo192.png' alt='logo' />
        </div>
        <div className='security'>
          <p>For your payment security, DO NOT share your card details with anyone. For confirmation purposes, only the first 6 numbers and last 4 numbers of the card can be shared. NEVER share your expiry or CVV number as per the picture below.</p>
        </div>
        <div className="security-images">
          <img src='https://ke.jumia.is/cms/2021/W14/JumiaPay/Wrong-Card.png' alt='card' />
          <img src='https://ke.jumia.is/cms/2021/W14/JumiaPay/Checked-Card.png' alt='card' />
        </div>
        <h4>
          Reach out to us through any of <br/> our social media platforms
        </h4>
        <div className='social-media'>
          <a className="fa-brands fa-whatsapp" href='https://www.whatsapp.com/' target = "_blank"></a>
          <a className="fa-brands fa-twitter" href='https://twitter.com/' target = "_blank"></a>
          <a className="fa-brands fa-facebook" href='https://web.facebook.com/' target = "_blank"></a>
          <a className="fa-brands fa-instagram" href='https://www.instagram.com/' target = "_blank"></a>
        </div>

        <h4><span style={{color:"orangered"}}>OR</span> Give any one of us a call...</h4>
        <div className='contact'>
          <h5>Customer Care <br/> <span>0701 xxx xxx</span></h5>
          <h5>Sale's Team <br/> <span>0701 xxx xxx</span></h5>
          <h5>Product Manager <br/> <span>0701 xxx xxx</span></h5>
        </div>

        <div className='message'>
          <p>
          Murife customer support team is always ready to answer your questions and provide all the necessary assistance. <br/>
          <span style={{color: "orangered"}}> Murife Shopping </span>customer care department - you can email your questions, suggestions, and comments at support@murife.co.ke. <br/>
          If you found any bugs or have security-related questions, please get in touch with our team at security@murife.com <br/>
          <span style={{fontWeight: 600}}>Check our Frequently Asked Questions</span>
          </p>
        </div>
    </div>
    <Footer /> 
    </>
  )
}

export default ContactUs