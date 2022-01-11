import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/add">Cadastro</Link>
    </nav>
  );
}
export default Header;