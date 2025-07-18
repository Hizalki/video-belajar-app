
import Card from "./card";

const Collection = () => {


    return(
        <div>
            <section className="pt-16 bg-[#FFFDF3]">
                {/* navigation collection*/}
                <div className="container max-w-[1200px] mx-auto px-4 text-start">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Koleksi Video Pembelajaran Unggulan
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl mb-10">
                        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                    </p>
                    
                    <div className="flex justify-start space-x-7 mb-12 overflow-x-auto whitespace-nowrap">
                        <a 
                          href="#"
                          className="text-red-500 font-semibold border-b-4 border-red-500 pb-2"
                        >
                            Semua Kelas
                        </a>
                        <a 
                          href="#"
                          className="text-gray-500 hover:text-gray-900 duration-200"
                        >
                            Pemasaran
                        </a>
                        <a 
                          href="#"
                          className="text-gray-500 hover:text-gray-900 duration-200"
                        >
                            Desain
                        </a>
                        <a 
                          href="#"
                          className="text-gray-500 hover:text-gray-900 duration-200"
                        >
                            Pengembangan Diri
                        </a>
                        <a 
                          href="#"
                          className="text-gray-500 hover:text-gray-900 duration-200"
                        >
                            Bisnis
                        </a>
                    </div>
                     {/* Card Collection grid */}
                     <div className="grid grid-cols-1  gap-8">
                        <Card/>
                     </div>
                
                    
                </div>
               
                
                
            </section>
        </div>
    )
};
export default Collection;