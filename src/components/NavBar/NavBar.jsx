import React from 'react'
import CartWidget from './CartWidget'
import logoGordoRandom from "../../img/gordo.png"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Comidas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Quienes somos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hacé tu pedido</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Eventos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar