import React from 'react';

function ProductList({ products }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>список товаров</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px',
              width: '200px',
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>цена: {product.price} ₽</p>
            <p>год: {product.year}</p>
            <p>производитель: {product.manufacturer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
