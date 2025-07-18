
import NavBar1 from "../components/atoms/navbar1"
import Footer from "../components/atoms/footer"

const HomeLayout = ({children}: any) => {
    return(
        <div>
            <NavBar1/>
            {children}
            <Footer/>
        </div>
    )
}

export default HomeLayout;