import logo from '../../assets/images/Logo.png'
import avatar from '../../assets/images/Avatar.png'

function Navbar() {


    return(
    <div>
        <header className='bg-white border-b border-b-[rgba(58,53,65,0.12)] shadow-xl '>
            <nav className="flex gap-9 py-3 px-[120px] items-center " >
                <div className="flex justify-between flex-1" >
                    <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <p>Kategori</p>
                </div >
                <div className='inline'>
                    <img src={avatar} alt="Profil" />
                </div>
            </nav>
        </header>
    </div>
    );
}

export default Navbar;