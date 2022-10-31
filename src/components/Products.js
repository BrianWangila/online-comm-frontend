import { useEffect, useState } from 'react'
import '../style/products.css'
import ProductCard from './ProductCard'

export default function Products({products,setProducts}) {
    const [trends,setTrends]=useState([])
    const[activeTrend,setActiveTrend]=useState("")
   console.log(products)
    useEffect((()=>{
        fetch("http://localhost:3000/trends")
        .then(res=>{
            if(res.ok){
                res.json().then(setTrends)
                setActiveTrend(trends[0].search_term)
            }
        })
    }),[])
    
    function handleTrendClick(trend){
        setActiveTrend(trend.search_term)
        fetch(`http://localhost:3000/trends/${trend.id}`)
        .then(res=>{
            if(res.ok){
                res.json().then(setProducts)
            }
        })
    }

    function Trends() {
        return (
            <div className='trend-buttons'>
                {trends.map((trend, index) => {
                    return <button onClick={()=>handleTrendClick(trend)} id={activeTrend===trend.search_term?"active-trend":""}>{trend.search_term}</button>
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
                    {products.map((p,index)=><ProductCard key={index} product={p}/>)}
                </div>
            </div>

        </div>
    )
}