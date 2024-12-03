import React, { useState } from 'react';

function AddProductForm({ onAddProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    year: '',
    manufacturer: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ ...newProduct, id: Date.now() });
    setNewProduct({
      name: '',
      description: '',
      price: '',
      year: '',
      manufacturer: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', marginBottom: '20px' }}>
      <h2>добавить новый товар</h2>
      <input
        name="name"
        placeholder="имя"
        value={newProduct.name}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="описание"
        value={newProduct.description}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="цена"
        type="number"
        value={newProduct.price}
        onChange={handleChange}
      />
      <input
        name="year"
        placeholder="год"
        type="number"
        value={newProduct.year}
        onChange={handleChange}
      />
      <input
        name="manufacturer"
        placeholder="производитель"
        value={newProduct.manufacturer}
        onChange={handleChange}
      />
      <button type="submit">добавить</button>
    </form>
  );
}

export default AddProductForm;
