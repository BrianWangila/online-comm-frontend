import React from 'react'
import '../style/SingleProduct.css'
import { Button, Typography } from '@material-ui/core'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'




function SingleProduct() {


  return (
    <>
    <Navbar />
      <div className='search-page'>
        <div className='flex-search'>
          <div>
            <h6>JUMIA</h6>
          </div>
          <form className='search-input'>
          {/* <i class="fa-thin fa-magnifying-glass"></i> */}
            <input  type="search" className='form-control'></input>
          </form>
        </div>

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

            <div className=''>
              <h6>Samsung Galaxy A51</h6>
              <div className='product-details'>
                <Typography gutterBottom variant="h7">
                  Product: Samsung Galaxy A51 | 128gb/4gb | Blue
                </Typography>
                <Typography className='details'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation..."</Typography>
                <Typography variant="body2">Price: <span>Ksh.28,999/-</span></Typography>
                <Typography variant="body2">Rating: <span>4.3 / 5.0</span></Typography>
                <Typography variant="body2">Delivery: <span>250/-</span></Typography>
                <Typography variant="body2">Mode: <span>Pay after</span></Typography>

              </div>
              <div className='visit-shop'>
                <Button style={{color: "whitesmoke"}} size="medium">VISIT SHOP</Button>
              </div>
            </div>
      </div>
      <Footer />
    </>
  )
}

export default SingleProduct;