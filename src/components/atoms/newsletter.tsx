import  { useState } from 'react';
import backgroundImage from '../../assets/images/hero02.jpeg';

interface NewsletterProps {}

const Newsletter: React.FC<NewsletterProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Email harus diisi');
      return;
    }

    if (!isValidEmail(email)) {
      setMessage('Format email tidak valid');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Simulate API call nanti yaa 
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage('Terima kasih! Anda berhasil berlangganan newsletter.');
      setEmail('');
    } catch (error) {
      setMessage('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
    if (message) setMessage(''); // Clear message when typing
  };

  return (
    <div className='bg-[#FFFDF3]'>
       <section
      className="relative bg-cover bg-center py-16 rounded-xl overflow-hidden mx-4 sm:mx-8 md:mx-auto max-w-[1170px] mt-6 md:mt-10 lg:mt-16 mb-10 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
      aria-labelledby="newsletter-heading"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-70" />

      <div className="relative container mx-auto px-4 md:px-6 lg:px-10 pt-12 text-center text-white">
        {/* Newsletter label */}
        <p className="text-gray-200 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed tracking-wider font-medium">
          NEWSLETTER
        </p>

        {/* Main heading */}
        <h1 
          id="newsletter-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Mau Belajar Lebih Banyak?
        </h1>

        {/* Description */}
        <p className="text-gray-200 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan 
          penawaran spesial dari program-program terbaik hariesok.id
        </p>

        {/* Newsletter form */}
        <form onSubmit={handleSubmit} className="w-full max-w-[500px] mx-auto">
          <div className="relative flex gap-2 mt-8">
            <input
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Masukkan Emailmu"
              className="flex-1 py-2.5 px-4 border border-gray-300 rounded-md outline-none text-gray-200 placeholder-gray-500 focus:border-[#FFBD3A] focus:ring-2 focus:ring-[#FFBD3A] focus:ring-opacity-50 transition-all duration-200"
              disabled={isLoading}
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2.5 bg-[#FFBD3A] text-white rounded-md font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#FFBD3A] focus:ring-opacity-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'LOADING...' : 'SUBSCRIBE'}
            </button>
          </div>

          {/* Success/Error message */}
          {message && (
            <div className={`mt-4 p-3 rounded-md text-sm ${
              message.includes('berhasil') 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {message}
            </div>
          )}
        </form>

        {/* Privacy notice */}
        <p className="text-gray-400 text-xs mt-4 max-w-md mx-auto">
          Dengan berlangganan, Anda menyetujui{' '}
          <a href="#" className="text-[#FFBD3A] hover:underline">
            syarat dan ketentuan
          </a>{' '}
          serta{' '}
          <a href="#" className="text-[#FFBD3A] hover:underline">
            kebijakan privasi
          </a>{' '}
          kami.
        </p>
      </div>
    </section>
    </div>
    
  );
};

export default Newsletter;