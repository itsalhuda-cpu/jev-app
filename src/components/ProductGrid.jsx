import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductGrid.css';

function ProductGrid({ products, onSell, onDelete, onRestock, onEdit }) {
  return (
    <section className="inventory-panel">
      <div className="panel-header">
        <h2>📦 منتجات المتجر ({products.length})</h2>
      </div>

      <div className="product-grid">
        {products.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🔍</span>
            <p>لا توجد منتجات في هذه الفئة</p>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSell={onSell}
              onDelete={onDelete}
              onRestock={onRestock}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ProductGrid;
