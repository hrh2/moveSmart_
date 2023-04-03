import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from 'react-icons/fa';
import './Shopping.css';

const products = [
     {
          id: 1,
          name: 'Product 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: '$10',
          image: 'https://via.placeholder.com/200x200'
     },
     {
          id: 2,
          name: 'Product 2',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          price: '$15',
          image: 'https://via.placeholder.com/200x200'
     },
     {
          id: 3,
          name: 'Product 3',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          price: '$20',
          image: 'https://via.placeholder.com/200x200'
     }
];

const Shopping = () => {
     const [index, setIndex] = useState(0);
     const [cart, setCart] = useState([]);

     const handleNext = () => {
          setIndex(index === products.length - 1 ? 0 : index + 1);
     };

     const handlePrevious = () => {
          setIndex(index === 0 ? products.length - 1 : index - 1);
     };

     const handleAddToCart = () => {
          setCart([...cart, products[index]]);
     };

     return (
          <div className="container">
               <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                         <div className="card">
                              <div className="card-header bg-primary text-white">
                                   {products[index].name}
                              </div>
                              <div className="card-body text-center">
                                   <div className="d-flex justify-content-center">
                                        <img src={products[index].image} alt={products[index].name} className="product-image" />
                                   </div>
                                   <div className="d-flex justify-content-center mt-3">
                                        <button className="btn btn-primary m-2" onClick={handlePrevious}>
                                             <FaArrowLeft />
                                        </button>
                                        <button className="btn btn-primary m-2" onClick={handleNext}>
                                             <FaArrowRight />
                                        </button>
                                   </div>
                                   <div className="mt-3">
                                        <p>{products[index].description}</p>
                                        <p>{products[index].price}</p>
                                   </div>
                                   <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
                                        Add to cart <FaShoppingCart className="ml-2" />
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div className="col-md-4">
                         <div className="card">
                              <div className="card-header bg-primary text-white">
                                   Cart
                              </div>
                              <div className="card-body">
                                   {cart.length === 0 ? (
                                        <p>Your cart is empty</p>
                                   ) : (
                                        <ul>
                                             {cart.map((product) => (
                                                  <li key={product.id}>{product.name}</li>
                                             ))}
                                        </ul>
                                   )}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Shopping;
