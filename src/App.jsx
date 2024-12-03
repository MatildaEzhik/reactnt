import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import SearchAndSort from './components/SearchAndSort';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'процессор', description: 'Intel i5', price: 15000, year: 2022, manufacturer: 'Intel' },
    { id: 2, name: 'видеокарта', description: 'RTX 3060', price: 45000, year: 2023, manufacturer: 'NVIDIA' },
    { id: 3, name: 'мат плата', description: 'ASUS PRIME', price: 10000, year: 2021, manufacturer: 'ASUS' },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleAddProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (order) => {
    const sorted = [...filteredProducts].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sorted);
  };

  return (
    <div>
      <Header />
      <SearchAndSort onSearch={handleSearch} onSort={handleSort} />
      <AddProductForm onAddProduct={handleAddProduct} />
      <ProductList products={filteredProducts} />
      <Footer />
    </div>
  );
}

export default App;

