import React from 'react'
import '../style/SingleProduct.css'
import { Button, Typography } from '@material-ui/core'
import Navbar from './Navbar'
import Footer from './Footer'
// import { Link } from 'react-router-dom'




function SingleProduct() {


  return (
    <>
    <Navbar />
      <div className='product-page'>
        <div className='flex-search'>
          <div>
            <h6>JUMIA</h6>
          </div>
          <form className='search-input'>
          {/* <i class="fa-thin fa-magnifying-glass"></i> */}
            <input  type="search" className='form-control'></input>
          </form>
        </div>

        <div className='product-flex'>
          <div>
          <div className='display-image'>
            <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
          </div>

          <div className='similar-products'>
            <div className='other-links'>
              <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
            </div>
            <div className='other-links'>
              <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
            </div>
            <div className='other-links'>
              <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
            </div> 
          </div>
          </div>

          <div className='product-dets'>
            <h6>Samsung Galaxy A51</h6>
            <div className='product-details'>
              <h7>Product: <span>Samsung Galaxy A51 | 128gb/4gb | Blue</span></h7> <br></br>
              <Typography className='details'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation..."</Typography>
              <Typography variant="body2">Price: <span>Ksh.28,999/-</span></Typography>
              <Typography variant="body2">Rating: <span>4.3 / 5.0</span></Typography>
              <Typography variant="body2">Delivery: <span>250/-</span></Typography>
              <Typography variant="body2">Mode: <span>Pay after</span></Typography>
            </div>
          </div>
        </div>

          <div className='visit-shop visit-shop-b'>
            <Button style={{color: "whitesmoke"}} size="medium">VISIT SHOP</Button>
          </div>
        
      </div>
      <Footer />
    </>
  )
}

export default SingleProduct;