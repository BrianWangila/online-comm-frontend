import '../style/product-card.css'

export default function ProductCard() {
    const stars=[true,true,true,false,false]
    return (
        <div className='product-card'>
            <div className='product-card-image'>
                <img className='product-image' src='/images/test.jpg' />
                <div className='product-shop-image'>
                    <img src='/icons/jumia.png' />
                </div>
                <div className='product-discount'>
                    <p>{"16% off"}</p>
                </div>

            </div>
            <div className='product-card-details'>
                <p className='pro-p p-name'>{"airpods pro"}</p>
                <div className='product-prices'>
                    <p className='pro-p p-price'>{"Ksh 45,000"}</p>
                    <p className='pro-p p-price-cancelled'>{"Ksh 55000"}</p>
                </div>
                <div className='product-stars'>
                    {stars.map(star=><img className={`star ${star?"star-on":"star-off"}`} src='/icons/star.svg'/>)}
                <p className='pro-p product-ratings'>{"(20)"}</p> 
                </div>
            </div>
        </div>
    )
}