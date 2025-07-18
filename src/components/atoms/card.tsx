import { useEffect, useState } from 'react';
import { getProducts } from '../../api/productsAPI';

interface Products {
  id: string;
  photos: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  mentor: string;
  rolmentor: string;
  avatar: string;
}

const Card = () => {
  const [products, setProducts] = useState<Products[]>([]);

  const fetchData = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg border overflow-hidden">
          <img
            src={product.photos}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.subtitle}</p>
            <div className="flex items-center mb-4">
              <img
                src={product.avatar}
                alt={product.mentor}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-gray-900 font-medium">{product.mentor}</p>
                <p className="text-gray-600 text-sm">{product.rolmentor}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-yellow-500">
                <span className="text-xl">★★★★☆</span>
                <span className="text-gray-600 ml-1">{"3.5 (86)"}</span>
              </div>
              <div className="text-green-500 font-bold">Rp {product.price.toLocaleString()}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
