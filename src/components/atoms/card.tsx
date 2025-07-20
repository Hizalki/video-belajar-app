
interface Products {
  id: string;
  photos: string;
  title: string;
  subtitle: string;
  price: number;
  mentor: string;
  rolmentor: string;
  avatar: string;
}

const Cardd = ({photos, title, subtitle,  price, mentor, rolmentor, avatar, id}: Products) => {

  return (
    <div>
      
        <div key={id} className="bg-white rounded-lg border overflow-hidden">
          <img
            src={photos}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
            <div className="flex items-center mb-4">
              <img
                src={avatar}
                alt={mentor}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-gray-900 font-medium">{mentor}</p>
                <p className="text-gray-600 text-sm">{rolmentor}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-yellow-500">
                <span className="text-xl">★★★★☆</span>
                <span className="text-gray-600 ml-1">{"3.5 (86)"}</span>
              </div>
              <div className="text-green-500 font-bold">Rp {price.toLocaleString()}</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Cardd;
