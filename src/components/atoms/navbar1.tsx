import logo from '../../assets/images/Logo.png';
import profil from '../../assets/images/Avatar.png';
import logoKecil from '../../assets/icons/Logokecil.svg';
import MenuIcon from '@mui/icons-material/Menu';


const NavBar1 = () => {
    return(
        <div>
            <header className='bg-white border-b border-b-[rgba(58,53,65,0.12)] shadow-xl'>
                <nav className='flex gap-9 py-3 px-6 items-center sm:py-3 sm:px-[120px]'>
                    <div className='flex justify-between flex-1 items-center'> 
                        <a href="#" className='flex-shrink-0'>
                            <img 
                              src={logo}
                              alt="Logo"
                              className='hidden sm:block'
                            />

                            <img 
                              src={logoKecil}
                              alt="Logo kecil"
                              className='block sm:hidden'
                            />
                        </a>
                        <p className='hidden sm:block text-gray-700 font-medium cursor-pointer hover:text-green-600 transition-colors'>
                            Kategori
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <img 
                          src={profil} 
                          alt="profil" 
                          className='hidden sm:block cursor-pointer transition-all'
                        />
                        <button
                          className='block sm:hidden cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors'
                          aria-label='Menu'
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
};


export default NavBar1;