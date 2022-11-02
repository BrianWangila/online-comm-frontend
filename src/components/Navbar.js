import { useNavigate } from 'react-router-dom'
import '../style/navbar.css'
import UserAvatar from './UserAvatar'



export default function Navbar({ user,search,handleSearch,setSearch,searchFor }) {


    const navigate = useNavigate()
    function handleLoginOnclick() {
        navigate("/login")
    }

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img id='logo' src='../images/logo22.png' alt='logo' />
            </div>
            {search ||searchFor?<form onSubmit={handleSearch} className='search-page-form' type="submit">
                <button><img src="/icons/search.svg" /></button>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type={"text"} placeholder="Search for anything" autoFocus />
                {search === "" ? null : <label onClick={() => setSearch("")}><img id='search-cancel' src='/icons/cancel.svg' /></label>}
            </form>:null}
            {user ?
                <div className='user-avatar' >
                    <UserAvatar user={user} />
                </div>

                : <div>
                    <button onClick={handleLoginOnclick} className="navbar-login">Login</button>
                </div>}

        </div>
    )
}