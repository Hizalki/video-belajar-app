import backgroundImage from '../../assets/images/hero01.jpeg';
import LabelHeroSection from '../atoms/labelHeroSection';

const Hero = () => {
    return(
        <div className='bg-[#FFFDF3]'>
            {/* Hero Section */}
            <section 
            // image background 
              className="relative bg-cover bg-center py-16 rounded-xl overflow-hidden mx-4 sm:mx-8 md:mx-auto max-w-[1170px] mt-6 md:mt-10 lg:mt-16 mb-10 "
              style={{
                backgroundImage: ` url(${backgroundImage}
                )`}}
            >
                <div className="absolute inset-0 bg-black opacity-70" />
                {/* Titel and subtitel */}
                <LabelHeroSection 
                  title='Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!'
                  subtitle='Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.'
                  button='Temukan Video Course untuk Dipelajari!'
                />

            </section>
        </div>
    )
}

export default Hero;