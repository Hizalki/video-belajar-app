import logo from '../../assets/images/Logo.png'
import avatar from '../../assets/images/Avatar.png'

function Navbar() {


    return(
    <div>
        <header className='bg-white'>
            <nav className="pb-20 ...">
                <div className="flex items-center justify-between" >
                    <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <p>Kategori</p>
                </div>
                <div>
                    <img src={avatar} alt="Profil" />
                </div>
            </nav>
        </header>
    </div>
    );
}

export default Navbar;