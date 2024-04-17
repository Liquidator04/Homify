
import './Header.css'

export default function Header(){
    return (
        <nav>
            <ul className="Navbar" id="otis">
                <li id="logo"><img src="/Logo.jpg" height={30} width={30} className="image-container"></img> Homify</li>
                <li><button className="button"><a href="#" className="internal-text">For Tenants</a></button></li>
                <li><button className="button"><a href="#" className="internal-text">List Property +</a></button></li>
                <li><button className="button"><a href="#" className="internal-text">Profile</a></button></li>
            </ul>
        </nav>
    )
}