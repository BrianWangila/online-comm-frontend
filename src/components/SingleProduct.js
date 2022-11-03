// import React from 'react'
// import '../style/SingleProduct.css'
// import { Button, Typography } from '@material-ui/core'
// import Navbar from './Navbar'
// import Footer from './Footer'
// // import { Link } from 'react-router-dom'




// function SingleProduct() {


//   return (
//     <>
//     <Navbar />
//       <div className='product-page'>
//         <div className='flex-search'>
//           <div>
//             <h6>JUMIA</h6>
//           </div>
//           <form className='search-input'>
//           {/* <i class="fa-thin fa-magnifying-glass"></i> */}
//             <input  type="search" className='form-control'></input>
//           </form>
//         </div>

//         <div className='product-flex'>
//           <div>
//           <div className='display-image'>
//             <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
//           </div>

//           <div className='similar-products'>
//             <div className='other-links'>
//               <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
//             </div>
//             <div className='other-links'>
//               <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
//             </div>
//             <div className='other-links'>
//               <img src='https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg' alt='phone'/>
//             </div> 
//           </div>
//           </div>

//           <div className='product-dets'>
//             <h6>Samsung Galaxy A51</h6>
//             <div className='product-details'>
//               <h7>Product: <span>Samsung Galaxy A51 | 128gb/4gb | Blue</span></h7> <br></br>
//               <Typography className='details'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation..."</Typography>
//               <Typography variant="body2">Price: <span>Ksh.28,999/-</span></Typography>
//               <Typography variant="body2">Rating: <span>4.3 / 5.0</span></Typography>
//               <Typography variant="body2">Delivery: <span>250/-</span></Typography>
//               <Typography variant="body2">Mode: <span>Pay after</span></Typography>
//             </div>
//           </div>
//         </div>

//           <div className='visit-shop visit-shop-b'>
//             <Button style={{color: "whitesmoke"}} size="medium">VISIT SHOP</Button>
//           </div>
        
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default SingleProduct;

import '../style/product-card.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function SingleProduct({product, products }) {
    // const [trends, setTrends] = useState([])
    // const [activeTrend, setActiveTrend] = useState("")
    // const [history, setHistory] = useState([])
    const [single, setSingle] = useState([])

    const navigate = useNavigate()

    let rating=parseInt(product.ratings)
    let shortName=product.name
    if(shortName.length>60){
        shortName=shortName.slice(0,60)+"..."
    }
    const stars=[false,false,false,false,false]
    for(let i=0;i<rating;i++){
        stars[i]=true
    }

    function handleTrendClick(product) {
        // setActiveTrend(trend.search_term)
        console.log("test")
        // setSearchFor("")
        fetch(`https://murife-run.herokuapp.com/products/${product.id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(setSingle)
                }
            })
    }
    console.log(product)


    return (
        <div className='product-card' >
            <div className='product-card-image'>
                <img className='product-image' src={product.image_url} alt={product.name.slice(0,15)}/>
                <div className='product-shop-image'>
                    <img src={`/icons/${product.shop}.png`}  alt={product.shop}/>
                </div>
                <div className='product-discount'>
                    <p>{product.discount}</p>
                </div>

            </div>
            <div className='product-card-details'>
                <p className='pro-p p-name'>{shortName}</p>
                <div className='product-prices'>
                    <p className='pro-p p-price'>{product.price}</p>
                    <p className='pro-p p-price-cancelled'>{product.price_before_discount}</p>
                </div>
                <div className='product-stars'>
                    {rating ? stars.map((star,index)=><img key={index} className={`star ${star?"star-on":"star-off"}`} src='/icons/star.svg' alt='s'/>):null}
                <p className='pro-p product-ratings'>{product.rated_products?"("+product.rated_products+")" :""}</p> 
                </div>
            </div>
        </div>
    )
}