import React from 'react';
import '../styles/FilterPanel.css';

function FilterPanel({ filter, setFilter, filteredCount, filteredStock }) {
  const categories = ['الكل', 'مشروبات', 'حلويات', 'ملابس', 'إلكترونيات', 'مستلزمات'];

  return (
    <div className="filter-panel">
      <div className="panel-header">
        <h2>تصفية المنتجات</h2>
      </div>

      <div className="filter-box">
        <label htmlFor="category-filter">اختر الفئة</label>
        <select
          id="category-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mini-summary">
        <div className="summary-item">
          <span>المنتجات المعروضة</span>
          <strong>{filteredCount}</strong>
        </div>
        <div className="summary-item">
          <span>المخزون الفعلي</span>
          <strong>{filteredStock}</strong>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
