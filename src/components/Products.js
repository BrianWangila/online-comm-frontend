import { useEffect, useState } from 'react'
import '../style/products.css'
import ProductCard from './ProductCard'

export default function Products({ products, searchFor, setSearchFor, setProducts, token, user }) {
    const [trends, setTrends] = useState([])
    const [activeTrend, setActiveTrend] = useState("")
    const [history, setHistory] = useState([])
    const [sortBy, setSortBy] = useState("featured")




    useEffect((()=>{
        switch (sortBy) {
            case "featured":
                setProducts(p => [...p.sort((a, b) => a.price_index - b.price_index)])
                break
            case "price lh":
                setProducts(p => [...p.sort((a, b) => a.price_normal - b.price_normal)])
                break
            case "price hl":
                setProducts(p => [...p.sort((a, b) => b.price_normal - a.price_normal)])
                break
            case "ratings":
                setProducts(p => [...p.sort((a) =>parseInt(a.ratings)|| 0 ).reverse()])
                break
            default: 
        }
    }))


    useEffect((() => {

        fetch("https://hidden-depths-73217.herokuapp.com/trends")
            .then(res => {
                if (res.ok) {
                    res.json().then(t => {
                        setTrends(t)
                        setActiveTrend(t[0].search_term)
                    })

                }
            })
    }), [])

    function handleSortBy(e) {
        setSortBy(e.target.value)
    }

    useEffect((() => {
        if (user) {
            fetch("https://hidden-depths-73217.herokuapp.com/history", {
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
    }), [user, searchFor,token])

    function handleTrendClick(trend) {
        setActiveTrend(trend.search_term)
        setSearchFor("")

        fetch(`https://hidden-depths-73217.herokuapp.com/trends/${trend.id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(setProducts)
                }
            })
    }

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
                {user && history.length !==0 ?
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
                        <img alt='' src='/icons/trends.png' />
                    </div>
                    <Trends data={trends} />
                </div>
                }
            </div>
            <div>
                <div className='products-trends for-phone'>
                    <p>Trends</p>
                    <img alt='' src='/icons/trends.png' />
                </div>

                {<div className='phone-trends'>
                    <Trends data={trends} />
                </div>
                }
                {searchFor ? <div className='search-results-title'>
                    <img src='/icons/search.svg' alt='search' />
                    <p>results for {searchFor}</p>
                </div> : null}
                <div >
                    <div className='sort-by'>
                        <label>Sort by: </label>
                        <select onChange={handleSortBy}>
                            <option value="featured">Featured</option>
                            <option value="price lh">Price: Low to high</option>
                            <option value="price hl">Price: High to low</option>
                            <option value="ratings">Ratings</option>
                        </select>
                    </div>
                    <div className='product-cards'>
                        {products.map((p, index) => <ProductCard key={index} product={p} />)}
                    </div>
                </div>

            </div>

        </div>
    )
}
