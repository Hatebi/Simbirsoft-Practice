import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <div className="header_logo">
            <Link to="/" className="header_logo_link">
              SimbirSoft
            </Link>
          </div>
          <nav className="nav">
            <Link to="/leagues" className="nav_link">
              Список лиг
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
