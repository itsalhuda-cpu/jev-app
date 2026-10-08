import React from 'react';
import '../styles/Header.css';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="topbar">
      <div className="topbar-content">
        <p className="eyebrow">لوحة إدارة المتجر</p>
        <h1>JEV App</h1>
      </div>

      <button
        type="button"
        className="theme-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="تبديل الوضع"
      >
        {darkMode ? '☀️ الوضع العادي' : '🌙 الوضع الليلي'}
      </button>
    </header>
  );
}

export default Header;
