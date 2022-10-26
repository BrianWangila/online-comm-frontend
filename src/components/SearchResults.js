import React from 'react'
import '../style/SearchResults.css'
import { TextField, Button, Card, CardContent, Typography } from '@material-ui/core'




function SearchResults() {


  return (
    <>
      <div className='search-page'>
        <div className='flex-search'>
          <form className='search-input'>
            <input type="search" value="Samsung A51" className='form-control'/>
          </form>

          <div className='orderby'>
            <select className="form-select">
              <option selected>Price</option>
              <option value="Products">Product</option>
              <option value="Ratings">Ratings</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <Card className='results-card' style={{borderRadius: 15+"px", background: "#D9D9D9", height: 51+"vh"}} >
            <div className='content'>
              <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
              <Typography gutterBottom variant="h6" component="div">
                Samsung Galaxy A51 | 128gb/4gb | Blue
              </Typography>
              <Typography variant="body2" style={{color: "red"}}>Ksh.28,999/-</Typography>
              <Typography variant="body2" color="text.secondary">Rating: <span>4.3 / 5.0</span></Typography>
              <Typography variant="body2" color="text.secondary">Delivery: <span>250/-</span></Typography>
              <h6 variant="body2" >JUMIA</h6>
            </div>
            <center className='visit-shop'>
              <Button style={{color: "whitesmoke"}} size="medium">VISIT SHOP</Button>
            </center>
          </Card>

          <Card className='results-card' style={{borderRadius: 15+"px", background: "#D9D9D9", height: 51+"vh"}}>
            <div className='content'>
            <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>

              <Typography gutterBottom variant="h6" component="div">
                Samsung Galaxy A51 | 128gb/4gb | Blue
              </Typography>
              <Typography variant="body2" style={{color: "red"}}>Ksh.28,999/-</Typography>
              <Typography variant="body2" color="text.secondary">Rating: <span>4.3 / 5.0</span></Typography>
              <Typography variant="body2" color="text.secondary">Delivery: <span>250/-</span></Typography>
              <h6 variant="body2" >JUMIA</h6>
            </div>
            <center className='visit-shop'>
              <Button style={{color: "whitesmoke"}} size="medium">VISIT SHOP</Button>
            </center>
          </Card>

          <Card className='results-card' style={{borderRadius: 15+"px", background: "#D9D9D9", height: 51+"vh"}}>
            <div className='content'>
            <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>

              <Typography gutterBottom variant="h6" component="div">
                Samsung Galaxy A51 | 128gb/4gb | Blue
              </Typography>
              <Typography variant="body2" style={{color: "red"}}>Ksh.28,999/-</Typography>
              <Typography variant="body2" color="text.secondary">Rating: <span>4.3 / 5.0</span></Typography>
              <Typography variant="body2" color="text.secondary">Delivery: <span>250/-</span></Typography>
              <h6 variant="body2" >JUMIA</h6>
            </div>
            <center className='visit-shop'>
              <Button style={{color: "whitesmoke"}} size="medium">VISIT SHOP</Button>
            </center>
          </Card>

          <Card className='results-card' style={{borderRadius: 15+"px", background: "#D9D9D9", height: 51+"vh"}}>
            <div className='content'>
            <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>

              <Typography gutterBottom variant="h6" component="div">
                Samsung Galaxy A51 | 128gb/4gb | Blue
              </Typography>
              <Typography variant="body2" style={{color: "red"}}>Ksh.28,999/-</Typography>
              <Typography variant="body2" color="text.secondary">Rating: <span>4.3 / 5.0</span></Typography>
              <Typography variant="body2" color="text.secondary">Delivery: <span>250/-</span></Typography>
              <h6 variant="body2" >JUMIA</h6>
            </div>
            <center className='visit-shop'>
              <Button style={{color: "whitesmoke"}} size="medium">VISIT SHOP</Button>
            </center>
          </Card>
        </div>

      </div>
    </>
  )
}

export default SearchResults