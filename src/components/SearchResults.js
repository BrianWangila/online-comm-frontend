import React from 'react'
import '../style/SearchResults.css'
import { TextField, Button, Card, CardContent, Typography } from '@material-ui/core'




function SearchResults() {


  return (
    <>
      <div className='search-page'>
        <div className='flex-search'>
          <div className='search-input'>
            <TextField id="outlined-basic" label="Product searched" variant="outlined" />
          </div>

          <div className='orderby'>
            <select class="form-select" aria-label="Default select example">
              <option selected>Price</option>
              <option value="1">Product</option>
              <option value="2">Ratings</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <Card className='results-card' style={{borderRadius: 15+"px"}} >
            <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Samsung Galaxy A51 | 128gb/4gb | Blue
              </Typography>
              <Typography variant="body2" style={{color: "red"}}>Ksh.28,999/-</Typography>
              <Typography variant="body2" color="text.secondary">Rating: <span>4.3 / 5.0</span></Typography>
              <Typography variant="body2" color="text.secondary">Delivery: <span>250/-</span></Typography>
              <h6 variant="body2" color="text.secondary">JUMIA</h6>
            </CardContent>
            <center className='visit-shop'>
              <Button style={{color: "whitesmoke"}} size="small">VISIT SHOP</Button>
            </center>
          </Card>

          <Card className='results-card' style={{borderRadius: 15+"px"}}>
            <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Samsung Galaxy A51 | 128gb/4gb | Blue
              </Typography>
              <Typography variant="body2" style={{color: "red"}}>Ksh.28,999/-</Typography>
              <Typography variant="body2" color="text.secondary">Rating: <span>4.3 / 5.0</span></Typography>
              <Typography variant="body2" color="text.secondary">Delivery: <span>250/-</span></Typography>
              <h6 variant="body2" color="text.secondary">JUMIA</h6>
            </CardContent>
            <center className='visit-shop'>
              <Button size="small">VISIT SHOP</Button>
            </center>
          </Card>

          <Card className='results-card' style={{borderRadius: 15+"px"}}>
            <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Samsung Galaxy A51 | 128gb/4gb | Blue
              </Typography>
              <Typography variant="body2" style={{color: "red"}}>Ksh.28,999/-</Typography>
              <Typography variant="body2" color="text.secondary">Rating: <span>4.3 / 5.0</span></Typography>
              <Typography variant="body2" color="text.secondary">Delivery: <span>250/-</span></Typography>
              <h6 variant="body2" color="text.secondary">JUMIA</h6>
            </CardContent>
            <center className='visit-shop'>
              <Button size="small">VISIT SHOP</Button>
            </center>
          </Card>
        </div>

      </div>
    </>
  )
}

export default SearchResults