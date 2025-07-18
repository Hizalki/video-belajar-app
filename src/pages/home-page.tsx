
import Collection from "../components/atoms/collection";
import Newsletter from "../components/atoms/newsletter";
import Hero from "../components/organisem/hero";
import HomeLayout from "../Layouts/home-layout";


const HomePage = () => {
    return(
        <div className="bg-[#FFFDF3]">
            <HomeLayout>
                <Hero/>
                <Collection/>
                <Newsletter/>
            </HomeLayout>
        </div>
    );
};

export default HomePage;