
import './Header.css'

export default function Header(){
    return (
        <nav>
            <ul className="Navbar" id="otis">
                <li id="logo">Logo Homify</li>
                <li><button className="button"><a href="#" className="internal-text">For Tenants</a></button></li>
                <li><button className="button"><a href="#" className="internal-text">List Property +</a></button></li>
                <li><button className="button"><a href="#" className="internal-text">Profile</a></button></li>
            </ul>
        </nav>
    )
}