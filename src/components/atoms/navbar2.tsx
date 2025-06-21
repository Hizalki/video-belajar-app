import logo from '../../assets/images/Logo.png'
import avatar from '../../assets/images/Avatar.png'
import MenuIcon from '@mui/icons-material/Menu';
import logokecil from '../../assets/icons/Logokecil.svg'

function Navbar2() {


    return(
    <div >
        <header className='bg-white border-b border-b-[rgba(58,53,65,0.12)] shadow-xl '>
            <nav className="flex gap-9 py-3 px-[24px] items-center  sm:py-3 sm:px-[120px] " >
                <div className="flex justify-between flex-1" >
                    <a href="#">
                    <img src={logo} alt="logo" className='hidden sm:block'/>
                    <img src={logokecil} alt="logo kcil" className='block sm:hidden' />
                </a>
                <p className='hidden sm:block'>Kategori</p>
                </div >
                <div className='inline'>
                    <img src={avatar} alt="Profil" className='hidden sm:block' />
                    <i className='block sm:hidden cursor-pointer'><MenuIcon/></i>
                </div>
            </nav>
        </header>
    </div>
    );
}

export default Navbar2;