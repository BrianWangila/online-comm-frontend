import { useState } from 'react'
import '../style/products.css'
import ProductCard from './ProductCard'

export default function Products() {
    const[activeTrend,setActiveTrend]=useState("all")
    const trends = ["all","Samsung A51", "Airpods Pro", "suba chelsea", "baseball caps", "addidas ice dive"]
    function Trends() {
        return (
            <div className='trend-buttons'>
                {trends.map((trend, index) => {
                    return <button onClick={()=>setActiveTrend(trend)} id={activeTrend===trend?"active-trend":""}>{trend}</button>
                })}
            </div>
        )
    }
    return (
        <div className='products'>
            {<div className='desktop-trends'>
                <Trends />
            </div>
            }
            <div>
                <div className='products-trends'>
                    <p>Trends</p>
                    <img src='/icons/trends.png' />
                </div>
                {<div className='phone-trends'>
                    <Trends />
                </div>
                }
                <div className='product-cards'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

        </div>
    )
}