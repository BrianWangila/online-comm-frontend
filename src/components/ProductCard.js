import '../style/product-card.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SingleProduct from './SingleProduct'


export default function ProductCard({product, id}) {

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

    function handleTrendClick() {
        navigate(`/single-product/${id}`)
    }




    return (
        <div className='product-card' >
            <div className='product-card-image' onClick={handleTrendClick}>
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