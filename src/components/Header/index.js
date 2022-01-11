import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { FaCalendarCheck } from 'react-icons/fa'

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/"><FaCalendarCheck /> Inicio</Link>
      <Link to="/add">Cadastro</Link>
    </nav>
  );
}
export default Header;