import axios from 'axios';

const API = axios.create({
  baseURL: 'https://6879541f63f24f1fdca1b47c.mockapi.io/',
});

export const getProducts = () => API.get('/products');
export const createProduct = (
    data: { 
        id: string; 
        photos: string; 
        title: string; 
        subtitle: string;
        price: number;
        mentor: string;
        rolmentor: string;
        avatar: string;
     }) => API.post('/products', data);
// export const updateProduct = (id: string, data: { name: string; price: number }) => API.put(`/products/${id}`, data);
// export const deleteProduct = (id: string) => API.delete(`/products/${id}`);
