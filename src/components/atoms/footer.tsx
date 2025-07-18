
import Logo from '../../assets/images/logo.png';

// Import MUI Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

// Data untuk footer sections
const footerData = {
  company: {
    name: "hariesok.id",
    description: "Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id",
    address: "Jl. Usman Effendi No. 50 Lowokwaru, Malang",
    phone: "+62-877-7123-1234"
  },
  categories: [
    "Digital & Teknologi",
    "Pemasaran", 
    "Manajemen Bisnis",
    "Pengembangan Diri",
    "Desain"
  ],
  company_links: [
    "Tentang Kami",
    "FAQ",
    "Kebijakan Privasi", 
    "Ketentuan Layanan",
    "Bantuan"
  ],
  community: [
    "Tips Sukses",
    "Blog"
  ],
  social_media: [
    { name: "LinkedIn", icon: LinkedInIcon, url: "#" },
    { name: "Instagram", icon: InstagramIcon, url: "#" },
    { name: "Facebook", icon: FacebookIcon, url: "#" },
    { name: "Twitter", icon: TwitterIcon, url: "#" }
  ]
};

// Komponen untuk section links
const FooterSection = ({ title, links }: any) => (
  <div className="w-full sm:w-1/2 lg:w-1/3">
    <h4 className="font-bold text-gray-900 mb-4">{title}</h4>
    <ul className="text-gray-600 space-y-2">
      {links.map((link: any, index: any) => (
        <li key={index}>
          <a 
            href="#" 
            className="hover:underline hover:text-gray-900 transition-colors duration-200"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Komponen untuk social media icons dengan MUI Icons
const SocialMediaLinks = ({ socialLinks }: any) => (
  <div className="flex space-x-3 ">
    {socialLinks.map((social: any, index: any) => {
      const IconComponent = social.icon;
      return (
        <a
          key={index}
          href={social.url}
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 border-gray-300 border-2 "
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconComponent className="w-5 h-5" />
        </a>
      );
    })}
  </div>
);

const Footer = () => {
  const { company, categories, company_links, community, social_media } = footerData;

  return (
    <footer className="bg-white py-8 border-t border-gray-200 gap-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 gap-5">
        <div className="flex flex-wrap justify-between items-start space-y-8 lg:space-y-0">
          
          {/* Company Info Section */}
          <div className="w-full lg:w-1/3">
            <img 
              src={Logo} 
              alt={`${company.name} Logo`} 
              className="h-6 md:h-8 mb-5" 
            />
            <p className="font-bold mb-4">
              {company.description}
            </p>
            <address className="text-gray-600 not-italic">
              {company.address}
              <br />
              {company.phone}
            </address>
          </div>

          {/* Links Sections */}
          <div className="w-full lg:w-2/3 flex flex-wrap justify-between space-y-8 lg:space-y-0">
            
            {/* Categories */}
            <FooterSection title="Kategori" links={categories} />
            
            {/* Company Links */}
            <FooterSection title="Perusahaan" links={company_links} />
            
            {/* Community & Social Media */}
            <div className="w-full lg:w-1/3">
              <h4 className="font-bold text-gray-900 mb-4">Komunitas</h4>
              <ul className="text-gray-600 space-y-2">
                {community.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="hover:underline hover:text-gray-900 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
        <div className='pt-10'>
            <hr />
        </div>
        <div className='flex felx-col justify-between pt-5 items-center '>
            <p className='text-gray-600 space-y-2'>@2025 Hizalki Maulana Ladani.</p>
            <SocialMediaLinks socialLinks={social_media} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;