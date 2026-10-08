import React, { useState, useEffect } from 'react';
import '../styles/AddProductForm.css';

function AddProductForm({ onAdd, editingProduct, setEditingProduct }) {
  const [form, setForm] = useState({
    name: '',
    category: 'مشروبات',
    price: '',
    stock: '',
    image: '📦'
  });

  const emojis = ['☕', '🍰', '👕', '🎧', '📱', '⌚', '🎮', '📚', '🎨', '🏃'];

  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    }
  }, [editingProduct]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, category, price, stock, image } = form;

    if (!name.trim() || !category || !price || !stock) {
      alert('يرجى ملء جميع الحقول');
      return;
    }

    onAdd(form);
    setForm({ name: '', category: 'مشروبات', price: '', stock: '', image: '📦' });
    setEditingProduct(null);
  };

  return (
    <div className="form-panel">
      <div className="panel-header">
        <h2>{editingProduct ? 'تحديث المنتج' : 'إضافة منتج جديد'}</h2>
      </div>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-section">
          <label htmlFor="name">اسم المنتج</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleInput}
            placeholder="مثال: قهوة عربي"
            required
          />
        </div>

        <div className="form-grid">
          <div className="form-section">
            <label htmlFor="category">الفئة</label>
            <select name="category" value={form.category} onChange={handleInput} required>
              <option value="مشروبات">مشروبات</option>
              <option value="حلويات">حلويات</option>
              <option value="ملابس">ملابس</option>
              <option value="إلكترونيات">إلكترونيات</option>
              <option value="مستلزمات">مستلزمات</option>
            </select>
          </div>

          <div className="form-section">
            <label htmlFor="price">السعر (ر.س)</label>
            <input
              id="price"
              name="price"
              type="number"
              min="1"
              value={form.price}
              onChange={handleInput}
              placeholder="25"
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="stock">الكمية</label>
            <input
              id="stock"
              name="stock"
              type="number"
              min="1"
              value={form.stock}
              onChange={handleInput}
              placeholder="10"
              required
            />
          </div>
        </div>

        <div className="form-section">
          <label>اختر رمز</label>
          <div className="emoji-picker">
            {emojis.map((emoji) => (
              <button
                key={emoji}
                type="button"
                className={`emoji-btn ${form.image === emoji ? 'active' : ''}`}
                onClick={() => setForm((prev) => ({ ...prev, image: emoji }))}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="primary-btn">
            {editingProduct ? '💾 تحديث' : '➕ إضافة المنتج'}
          </button>
          {editingProduct && (
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setEditingProduct(null);
                setForm({ name: '', category: 'مشروبات', price: '', stock: '', image: '📦' });
              }}
            >
              ✕ إلغاء
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
