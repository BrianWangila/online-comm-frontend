import React from 'react'
import '../style/SearchResults.css'
import { Button, Card, Typography } from '@material-ui/core'
import Navbar from './Navbar'
import Footer from './Footer'




function SearchResults() {


  return (
    <>
    <Navbar />
      <div className='search-page'>
        <div className='flex-search'>
          <form className='search-input'>
            <input type="search" value="Samsung A51" className='form-control'/>
          </form>

          <div className='orderby'>
            <div className='order-hidden'>
              <p>Order by: </p>
            </div>
            <select className="form-select">
              <option selected>Price</option>
              <option value="Products">Product</option>
              <option value="Ratings">Ratings</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='results-card'>
            <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
            <div className='vertical-line'></div>
              <div className='super-content'>
              <div className='content'>
                <Typography gutterBottom variant="h6" component="div">
                  Samsung Galaxy A51 | 128gb/4gb | Blue
                </Typography>
                <Typography className='details'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation..."</Typography>
                <Typography variant="body2" >Price: <span>Ksh.28,999/-</span></Typography>
                <Typography variant="body2" color="text.secondary">Rating: <span>4.3 / 5.0</span></Typography>
                <Typography variant="body2" color="text.secondary">Delivery: <span>250/-</span></Typography>
                {/* <Typography variant="body2" color="text.secondary">Mode: <span>Pay after</span></Typography> */}
                <h6 variant="body2">JUMIA</h6>
              </div>
              <div className='visit-shop'>
                <Button style={{color: "whitesmoke"}} size="medium">VISIT SHOP</Button>
              </div>
            </div>
          </div>

          <div className='results-card'>
            <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
            <div className='vertical-line'></div>
              <div className='super-content'>
              <div className='content'>
                <Typography gutterBottom variant="h6" component="div">
                  Samsung Galaxy A51 | 128gb/4gb | Blue
                </Typography>
                <Typography className='details'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation..."</Typography>
                <Typography variant="body2" >Price: <span>Ksh.28,999/-</span></Typography>
                <Typography variant="body2" color="text.secondary">Rating: <span>4.3 / 5.0</span></Typography>
                <Typography variant="body2" color="text.secondary">Delivery: <span>250/-</span></Typography>
                {/* <Typography variant="body2" color="text.secondary">Mode: <span>Pay after</span></Typography> */}
                <h6 variant="body2">JUMIA</h6>
              </div>
              <div className='visit-shop'>
                <Button style={{color: "whitesmoke"}} size="medium">VISIT SHOP</Button>
              </div>
            </div>
          </div>

          <div className='results-card'>
            <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
            <div className='vertical-line'></div>
            <div className='super-content'>
              <div className='content'>
                <Typography gutterBottom variant="h6" component="div">
                  Samsung Galaxy A51 | 128gb/4gb | Blue
                </Typography>
                <Typography className='details'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation..."</Typography>
                <Typography variant="body2" >Price: <span>Ksh.28,999/-</span></Typography>
                <Typography variant="body2" color="text.secondary">Rating: <span>4.3 / 5.0</span></Typography>
                <Typography variant="body2" color="text.secondary">Delivery: <span>250/-</span></Typography>
                {/* <Typography variant="body2" color="text.secondary">Mode: <span>Pay after</span></Typography> */}
                <h6 variant="body2">JUMIA</h6>
              </div>
              <div className='visit-shop'>
                <Button style={{color: "whitesmoke" }} size="medium">VISIT SHOP</Button>
              </div>
            </div>
          </div>

          <div className='results-card'>
            <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
            <div className='vertical-line'></div>
            <div className='super-content'>
            <div className='content'>
              <Typography gutterBottom variant="h6" component="div">
                Samsung Galaxy A51 | 128gb/4gb | Blue
              </Typography>
              <Typography className='details'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation..."</Typography>
              <Typography variant="body2" >Price: <span>Ksh.28,999/-</span></Typography>
              <Typography variant="body2" color="text.secondary">Rating: <span>4.3 / 5.0</span></Typography>
              <Typography variant="body2" color="text.secondary">Delivery: <span>250/-</span></Typography>
              {/* <Typography variant="body2" color="text.secondary">Mode: <span>Pay after</span></Typography> */}
              <h6 variant="body2">JUMIA</h6>
            </div>
            <div className='visit-shop'>
              <Button style={{ color: "whitesmoke" }} size="medium">VISIT SHOP</Button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SearchResults