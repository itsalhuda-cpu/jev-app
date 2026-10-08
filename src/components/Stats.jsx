import React from 'react';
import '../styles/Stats.css';

function Stats({ stats }) {
  const { totalProducts, totalStock, totalRevenue, averagePrice, bestCategory } = stats;

  return (
    <section className="stats-grid">
      <article className="stat-card accent">
        <div className="stat-icon">📦</div>
        <span>إجمالي المنتجات</span>
        <strong>{totalProducts}</strong>
      </article>

      <article className="stat-card success">
        <div className="stat-icon">📊</div>
        <span>إجمالي المخزون</span>
        <strong>{totalStock}</strong>
      </article>

      <article className="stat-card info">
        <div className="stat-icon">💰</div>
        <span>قيمة المخزون</span>
        <strong>{totalRevenue.toLocaleString('en-US')} ر.س</strong>
      </article>

      <article className="stat-card warning">
        <div className="stat-icon">⭐</div>
        <span>أفضل فئة</span>
        <strong>{bestCategory}</strong>
      </article>
    </section>
  );
}

export default Stats;
