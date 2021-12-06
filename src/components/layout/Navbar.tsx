import React, { FC } from 'react'
import { Link } from "react-router-dom"

const Navbar: FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    <Link className="btn btn-outline-light" to="/Add">Add user</Link>
  </div>
</nav>
    )
}

export default Navbar
