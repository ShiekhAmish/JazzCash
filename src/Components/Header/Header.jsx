import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const handleDropdonwNavigate = (path) => {
        navigate(path);
      };
  return (
    <>
    <div className="top-header text-white d-none d-sm-block" style={{backgroundColor:'#535353'}}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        <div className="user-options">
          <a href="#" className="text-light mx-3">Jazz</a>
          <a href="#" className="text-light mx-3 ">JazzCash</a>
          <a href="#" className="text-light mx-3 ">xlr8</a>
          <a href="#" className="text-light mx-3 ">Business</a>
          <a href="#" className="text-light mx-3 ">Foundation</a>
          <a href="#" className="text-light mx-3 ">Compliance</a>

        </div>
        <div className="social-icons">
          <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <header>
      <nav className="navbar navbar-expand-lg navbar-white bg-white shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="./img/Home/mobilink_logo.png" // Add your logo path here
              alt="JazzCash Logo"
              className="d-inline-block align-top"
              
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle text-danger"
                onClick={()=> handleDropdonwNavigate('/jazzcashshop')}
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                JAZZ SHOP
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link to=''className="dropdown-item"  href="#">Money Transfer</Link></li>
                <li><Link to=''className="dropdown-item"  href="#">Bill Payment</Link></li>
                <li><Link to=''className="dropdown-item" >Payments</Link></li>
                <li><Link to=''className="dropdown-item" >Mobile Account Services</Link></li>

              </ul>
            </li>
              <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle text-danger"
                onClick={()=> handleDropdonwNavigate('/mobileaccount')}
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MOBILE ACCOUNT
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link to=''className="dropdown-item" >Overview</Link></li>
                <li><Link to=''className="dropdown-item" >QR Payment Discounts</Link></li>
                <li><Link to=''className="dropdown-item" >Mobile Load</Link></li>
                <li><Link to=''className="dropdown-item" >Terms & Conditions</Link></li>
                <li><Link to=''className="dropdown-item" >Ready Cash</Link></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle text-danger"
                onClick={()=> handleDropdonwNavigate('/digitalpayments')}
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                DIGITAL PAYMENTS
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link to=''className="dropdown-item" >Online Payments</Link></li>
                <li><Link to=''className="dropdown-item" >Ticket Payments</Link></li>
                <li><Link to=''className="dropdown-item" >Government Payments</Link></li>
                <li><Link to=''className="dropdown-item" >Utility Bill Payments</Link></li>
                <li><Link to=''className="dropdown-item" >Tap Pay</Link></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle text-danger"
                onClick={()=> handleDropdonwNavigate('/corporate')}
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CORPORATE
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link to=''className="dropdown-item" >Corporate Disbursement Solutions</Link></li>
                <li><Link to=''className="dropdown-item" >Corporate Collection Solutions</Link></li>
                <li><Link to=''className="dropdown-item" >Online Payment Gateway</Link></li>
              </ul>
            </li>
             
              <li className="nav-item">
                <Link className="nav-link text-dark f-600" to="/jazzcashbusiness">JAZZCASH FOR BUSINESS</Link>
              </li>
              <li className="nav-item">
  <form className="d-flex align-items-center">
    <i className="fa-solid fa-magnifying-glass mx-2" style={{ color: "#595959" }}></i>
    <input
      className="form-control search-input border-0"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
  </form>
</li>


            </ul>
            
            
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header