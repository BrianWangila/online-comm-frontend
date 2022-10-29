import { useState } from 'react'
import '../style/search-page.css'

export default function SearchPage({setProducts,setLoading}) {
    const [search, setSearch] = useState("")
    function handleSearch(e) {
        e.preventDefault()
        console.log("here",search);
        setLoading(true)
        fetch("http://localhost:3000/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "search_term": search
            })
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(products=>{
                        setProducts(products)
                        setLoading(false)
                    })
                } else {
                    console.log(res)
                }
            })
    }
    return (
        <div className="search-page">
            <div className='search-div'>
                <div>
                    <div>Don't run around, make an informed decision</div>
                </div>
                <form onSubmit={handleSearch} className='search-page-form' type="submit">
                    <button><img src="/icons/search.svg" /></button>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type={"text"} placeholder="Search for anything" />
                    {search === "" ? null : <label onClick={() => setSearch("")}><img id='search-cancel' src='/icons/cancel.svg' /></label>}
                </form>
            </div>
        </div>
    )
}