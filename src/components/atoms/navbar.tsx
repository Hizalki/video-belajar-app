import logo from '../../assets/images/Logo.png'
import avatar from '../../assets/images/Avatar.png'

function Navbar() {


    return(
    <div>
        <header>
        <nav className="star-navbar">
            <a href="">
                <img src={logo} alt="logo" className="logo"/>
            </a>
            <ul>
            <li className="kategori">
                <a href="link" className="Ktg" >Kategori</a>
                <img src={avatar} alt="avatar"/>
            </li>
           </ul>
           
        </nav>
     </header>
    </div>
    );
}

export default Navbar;