import React from 'react'
import './Style.css'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-light border-bottom text-dark">
  <div className="container-fluid">
   <a href="/"><img src="https://img.freepik.com/premium-vector/shopping-markets-logo_27153-46.jpg?w=740" alt="Logo"  className='images' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Categories">Categories</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Feature"> Featured Products</a>
        </li>

      
      

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/About">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
        </li>
      
      </ul>
     <div className="d-flex gap-3">
     <a href="/Cart" className='btn btn-dark'><i className="bi bi-bag"></i></a>
     <a href="/Login" className='btn btn-dark'>Login </a>
     </div>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header