import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand" to="/">AR VISION</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active me-4" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active me-4" to="/products">Productos</NavLink>
        </li>        
        <li className="nav-item">
          <NavLink className="nav-link active me-4" to="/contact">Contacto</NavLink>
        </li>        
        <li className="nav-item">
          <NavLink className="nav-link active me-4" to="/about">Nosotros</NavLink>
        </li>        
      </ul>
      <div className="buttons">
      <NavLink to="/login" className="btn btn-outline-dark">
      <i className="fa fa-sign-in me-1"></i>
                Login
        </NavLink>
        <NavLink to="/register" className="btn btn-outline-dark ms-2">
        <i className="fa fa-user-plus me-1"></i>
        Registro
        </NavLink>
        <NavLink to="/cart" className="btn btn-outline-dark ms-2">        
        <i className="fa fa-shopping-cart me-1"></i>
        Carrito
        </NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar