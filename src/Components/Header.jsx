import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1 className="navbar-title p-3 px-5">CATLOGO DE PRODUCTOS</h1>
        <a className="navbar-text text-decoration-none px-5" href="#form">
          Agregar producto
        </a>
      </div>
    </nav>
  )
}

export default Header
