import { useEffect, useState } from 'react'
import '../style/products.css'
import ProductCard from './ProductCard'

export default function Products({ products, setProducts, user}) {
    const [trends, setTrends] = useState([])
    const [activeTrend, setActiveTrend] = useState("")
    const [history, setHistory] = useState([])
    console.log(products)
    useEffect((() => {
        fetch("http://localhost:3000/trends")
            .then(res => {
                if (res.ok) {
                    res.json().then(setTrends)
                    setActiveTrend(trends[0].search_term)
                }
            })
    }), [])

    useEffect((() => {
        if (user) {
            fetch("http://localhost:3000", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${user.jwt}`
                }
            }).then(res => {
                if (res.ok) {
                    res.json().then(setHistory)
                }
            })
        }
    }), [user])

    function handleTrendClick(trend) {
        setActiveTrend(trend.search_term)
        fetch(`http://localhost:3000/trends/${trend.id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(setProducts)
                }
            })
    }

    function Trends({data}) {
        return (
            <div className='trend-buttons'>
                {data.map((trend, index) => {
                    return <button onClick={() => handleTrendClick(trend)} id={activeTrend === trend.search_term ? "active-trend" : ""}>{trend.search_term}</button>
                })}
            </div>
        )
    }
    return (
        <div className='products'>
            {<div className='desktop-trends'>
                <Trends data={trends}/>
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
                    {products.map((p, index) => <ProductCard key={index} product={p} />)}
                </div>
            </div>

        </div>
    )
}