import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button">☰</button>
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="header-right">
        <button className="icon-button">🔔</button>
        <button className="icon-button">💬</button>
        <button className="icon-button">👤</button>
      </div>
    </header>
  );
}

export default Header;