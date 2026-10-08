import React, { useState } from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product, onSell, onDelete, onRestock, onEdit }) {
  const [showRestock, setShowRestock] = useState(false);
  const [restockAmount, setRestockAmount] = useState('');

  const handleRestock = () => {
    if (restockAmount && Number(restockAmount) > 0) {
      onRestock(product.id, Number(restockAmount));
      setRestockAmount('');
      setShowRestock(false);
    }
  };

  const stockStatus = product.stock === 0 ? 'out-of-stock' : product.stock < 5 ? 'low-stock' : 'in-stock';

  return (
    <article className={`product-card ${stockStatus}`}>
      <div className="product-header">
        <span className="product-emoji">{product.image}</span>
        <div className="product-info">
          <h3>{product.name}</h3>
          <span className="category-badge">{product.category}</span>
        </div>
      </div>

      <div className="product-details">
        <div className="detail-row">
          <span>السعر</span>
          <strong className="price">{product.price.toLocaleString('en-US')} ر.س</strong>
        </div>
        <div className="detail-row">
          <span>الكمية</span>
          <strong className="stock-value">{product.stock}</strong>
        </div>
        <div className="detail-row">
          <span>إجمالي القيمة</span>
          <strong className="total-value">{(product.price * product.stock).toLocaleString('en-US')} ر.س</strong>
        </div>
      </div>

      {product.stock === 0 && <div className="out-of-stock-badge">نفدت الكمية</div>}
      {product.stock < 5 && product.stock > 0 && <div className="low-stock-badge">كمية منخفضة</div>}

      <div className="product-actions">
        <button
          className="sell-btn"
          onClick={() => onSell(product.id)}
          disabled={product.stock === 0}
        >
          💵 بيع
        </button>
        <button className="edit-btn" onClick={() => onEdit(product)}>
          ✏️ تعديل
        </button>
        <button className="restock-btn" onClick={() => setShowRestock(!showRestock)}>
          📥 إعادة تخزين
        </button>
        <button className="delete-btn" onClick={() => onDelete(product.id)}>
          🗑️
        </button>
      </div>

      {showRestock && (
        <div className="restock-form">
          <input
            type="number"
            min="1"
            value={restockAmount}
            onChange={(e) => setRestockAmount(e.target.value)}
            placeholder="أدخل الكمية"
          />
          <button onClick={handleRestock}>تأكيد</button>
          <button onClick={() => setShowRestock(false)}>إلغاء</button>
        </div>
      )}
    </article>
  );
}

export default ProductCard;
