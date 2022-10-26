import '../style/navbar.css'

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar-logo">Murife</div>
            <div>
                <button className="navbar-login">Login</button>
            </div>
        </div>
    )
}