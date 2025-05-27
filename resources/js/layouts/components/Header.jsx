import React from 'react';
import './header.css';

export default function PijiHeader() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <header className="app-header">
      {/* Left: Search box */}
      <div className="header-left">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      {/* Middle: Date */}
      <div className="header-middle">
        <p className="date-text" class="text-xl font-semibold">{today}</p>
      </div>

      {/* Right: Notification and Profile */}
      <div className="header-right">
        <div className="notification">⩍</div>
        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="profile-pic"
          />
          <span className="profile-name">John Doe</span>
        </div>
      </div>
    </header>
  );
}
