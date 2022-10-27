import '../style/product-card.css'

export default function ProductCard({product}) {
    const stars=[false,false,false,false,false]
    for(let i=0;i<product.rating;i++){
        stars[i]=true
    }
    return (
        <div className='product-card'>
            <div className='product-card-image'>
                <img className='product-image' src={product.image_url} />
                <div className='product-shop-image'>
                    <img src={`/icons/${product.shop}.png`} />
                </div>
                <div className='product-discount'>
                    <p>{product.discount}</p>
                </div>

            </div>
            <div className='product-card-details'>
                <p className='pro-p p-name'>{product.name}</p>
                <div className='product-prices'>
                    <p className='pro-p p-price'>{product.price}</p>
                    <p className='pro-p p-price-cancelled'>{product.price_before_discount}</p>
                </div>
                <div className='product-stars'>
                    {stars.map(star=><img className={`star ${star?"star-on":"star-off"}`} src='/icons/star.svg'/>)}
                <p className='pro-p product-ratings'>{"(20)"}</p> 
                </div>
            </div>
        </div>
    )
}