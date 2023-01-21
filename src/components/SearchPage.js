import '../style/search-page.css'

export default function SearchPage({handleSearch,search,setSearch}) {
    
    return (
        <div className="search-page">
            <div className='search-div'>
                <div>
                    <div>Don't run around, make an informed decision</div>
                </div>
                <form onSubmit={handleSearch} className='search-page-form' type="submit">
                    <button><img src="/icons/search.svg" alt="icons"/></button>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type={"text"} placeholder="Search for anything" />
                    {search === "" ? null : <label onClick={() => setSearch("")}><img id='search-cancel' src='/icons/cancel.svg' alt="search"/></label>}
                </form>
            </div>
        </div>
    )
}
