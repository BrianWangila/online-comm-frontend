import '../style/search-page.css'

export default function SearchPage(){
    function handleClearSearch(){

    }
    return(
        <div className="search-page">
            <div className='search-div'>
                <div>
                    <div>Don't run around, make an informed decision</div>
                </div>
                <form className='search-page-form' type="submit">
                    <label><img src="/icons/search.svg"/></label>
                    <input type={"text"} placeholder="Search for anything"/>
                    <button onClick={handleClearSearch}><img id='search-cancel' src='/icons/cancel.svg'/></button>
                </form>
            </div>
        </div>
    )
}