import { useEffect, useState } from 'react'
import '../style/products.css'
import ProductCard from './ProductCard'

export default function Products({ products, searchFor, setSearchFor, setProducts, token, user }) {
    const [trends, setTrends] = useState([])
    const [activeTrend, setActiveTrend] = useState("")
    const [history, setHistory] = useState([])
    
    console.log(history)

    useEffect((() => {
        fetch("https://murife-run.herokuapp.com/trends")
            .then(res => {
                if (res.ok) {
                    res.json().then(t => {
                        setTrends(t)
                        setActiveTrend(t[0].search_term)
                    })

                }
            })
    }), [])

    useEffect((() => {
        if (user) {
            fetch("https://murife-run.herokuapp.com/history", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(res => {
                if (res.ok) {
                    res.json().then(setHistory)
                } else {
                    res.json().then(console.log)
                }
            })
        }
    }), [user, searchFor])

    function handleTrendClick(trend) {
        setActiveTrend(trend.search_term)
        setSearchFor("")
        fetch(`https://murife-run.herokuapp.com/trends/${trend.id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(setProducts)
                }
            })
    }

    console.log(products)

    function Trends({ data }) {
        return (
            <div className='trend-buttons'>
                {data.map((trend, index) => {
                    return <button key={index} onClick={() => handleTrendClick(trend)} id={activeTrend === trend.search_term ? "active-trend" : ""}>{trend.search_term}</button>
                })}
            </div>
        )
    }
    useEffect((() => {
        if (searchFor) {
            setActiveTrend("")
        }
    }), [searchFor])

    return (
        <div className='products'>
            <div>
                {user ?
                    <div className='search-history'>
                        <div>
                            <img src='/icons/history.png' alt='history' />
                            <p>Search History</p>
                        </div>
                        <Trends data={history} />
                    </div> : null
                }
                {<div className='desktop-trends'>
                    <div className='products-trends'>
                        <p>Trends</p>
                        <img src='/icons/trends.png' />
                    </div>
                    <Trends data={trends} id2={trends.id}/>
                </div>
                }
            </div>
            <div>
                <div className='products-trends for-phone'>
                    <p>Trends</p>
                    <img src='/icons/trends.png' />
                </div>

                {<div className='phone-trends'>
                    <Trends data={trends} />
                </div>
                }
                {searchFor ? <div className='search-results-title'>
                    <img src='/icons/search.svg' alt='search' />
                    <p>results for {searchFor}</p>
                </div> : null}
                <div className='product-cards'>
                    {products.map((p, index) => <ProductCard key={index} id={p.id} product={p} />)}
                </div>
            </div>

        </div>
    )
}