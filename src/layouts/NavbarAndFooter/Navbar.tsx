import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">

      <div className="container-fluid">
        <span className="navbar-brand">
          Kroger
        </span>
        <button className="navbar-toggler"
        type='button'
        data-bs-toggle='colapse'
        data-bs-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle Navigation' >

          <span className="navbar-toggler-icon"></span>

        </button>

        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="navbar-nav"><a href="" className="nav-link">Home</a></li>
            <li className="navbar-item"><a href="" className="nav-link">Buscar</a></li>
            
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item m-1"><a type='button' href="" className="btn btn-outline-light">Ingresar</a></li>
            
          </ul>


        </div>
      </div>

    </nav>
  )
}

export default Navbar