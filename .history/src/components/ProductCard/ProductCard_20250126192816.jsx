import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const products = [
    { id: 1, title: 'Product 1', price: 1000, logo: '/logo1.png', img: '/img1.png', seller: 'Seller 1' },
    { id: 2, title: 'Product 2', price: 2000, logo: '/logo2.png', img: '/img2.png', seller: 'Seller 2' },
    // Добавьте другие продукты...
  ];

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          logo={product.logo}
          img={product.img}
          seller={product.seller}
          isInCart={cartItems.some(item => item.id === product.id)}  // Проверка, есть ли товар в корзине
          quantity={cartItems.find(item => item.id === product.id)?.quantity || 1}  // Получаем количество товара из корзины
          onAddToCart={() => handleAddToCart(product)}  // Передаем обработчик
          onRemoveFromCart={() => handleRemoveFromCart(product.id)}  // Передаем обработчик для удаления
        />
      ))}
    </div>
  );
};

export default ProductList;
