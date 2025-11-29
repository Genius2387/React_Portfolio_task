
import React from "react";

function Header({ title, subtitle, showButton }) {
  return (
    <header className="py-5 text-center">
      <div className="container">
        <h1>{title}</h1>
        <p className="lead">{subtitle}</p>
        {showButton && <a href="#contact" className="btn btn-primary">Contact Me</a>}
      </div>
    </header>
  );
}

export default Header;
