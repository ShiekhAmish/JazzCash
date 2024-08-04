import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './home.css';
const Home = () => {
    const navigate = useNavigate();

  const handleDropdownClick = (path) => {
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
              <a
                className="nav-link dropdown-toggle text-danger"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                JAZZ SHOP
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action1')} href="#">Action</a></li>
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action2')} href="#">Another action</a></li>
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action3')} href="#">Something else here</a></li>
              </ul>
            </li>
              <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-danger"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MOBILE ACCOUNT
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action1')} href="#">Action</a></li>
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action2')} href="#">Another action</a></li>
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action3')} href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-danger"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                DIGITAL PAYMENTS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action1')} href="#">Action</a></li>
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action2')} href="#">Another action</a></li>
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action3')} href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-danger"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CORPORATE
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action1')} href="#">Action</a></li>
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action2')} href="#">Another action</a></li>
                <li><a className="dropdown-item" onClick={() => handleDropdownClick('/action3')} href="#">Something else here</a></li>
              </ul>
            </li>
             
              <li className="nav-item">
                <Link className="nav-link text-dark f-600" to="#">JAZZCASH FOR BUSINESS</Link>
              </li>
              <li className="nav-item">
  <form className="d-flex align-items-center">
    <i className="fa-solid fa-magnifying-glass" style={{ color: "#595959" }}></i>
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
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./img/Home/JC-Pinktober-1500x600-1.png" className="d-block w-100" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img src="./img/Home/1500x600.jpg" className="d-block w-100" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img src="./img/Home/Desktop-1500x600-1.png" className="d-block w-100" alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img src="./img/Home/Banner-Desktop-size-jazzcash.png" className="d-block w-100" alt="Fourth slide"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='overflow-hidden'>
    <div className="row">
        <div className="col-md-3 carousel-down-button btn rounded-0">
            <div className="d-flex justify-content-center pt-1">
            <i class="fa-solid fa-money-bill-transfer fa-xl pt-3 px-2"></i>
            <p>MONEY TRANSFER</p>
            </div>
        </div>
        <div className="col-md-3 carousel-down-button btn rounded-0">
        <div className="d-flex justify-content-center pt-1">
        <i class="fa-solid fa-building-columns fa-xl pt-3 px-2"></i>
            <p>BANK DEPOSIT</p>
            </div>
        </div>
        <div className="col-md-3 carousel-down-button btn rounded-0">
        <div className="d-flex justify-content-center pt-1">
        <i class="fa-solid fa-money-check-dollar fa-xl pt-3 px-2"></i>
            <p>BILL PAYMENT</p>
            </div>
        </div>
        <div className="col-md-3 carousel-down-button btn rounded-0">
        <div className="d-flex justify-content-center pt-1">
        <i class="fa-solid fa-mobile-screen-button fa-xl pt-3 px-2"></i>
            <p>Mobile Account</p>
            </div>
        </div>
        
    </div>
    <div className="row">
    
    <div className="col-md-4">
<h3 className='p-3 text-uppercase'>Mobile Account and Agent</h3>
    </div>
    <div className="col-md-8 pt-3">
    <div className="headline-banner">
      <div className="headline-text">
      Cash In Fee Structure: For cash-In between Rs. 50 to 20,000, fee of 0.5% + Tax . For Cash in above Rs. 20,000, fee of Rs. 100 + Tax
      </div>
    </div>
    </div>
</div>
<div className="row">
<div className="col-md-5">
<div className="position-relative">
      <img src="./img/Home/money-transfer.png" alt="Money Transfer" className="img-fluid w-100" />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          color: 'white',
          fontSize:'2rem',
          padding: '5px',
          borderRadius: '3px',
          fontWeight: 'bold',
        }}
      >
        Send Money to Friends and Family
      </div>
    </div>
    </div>
    <div className="col-md-3 mb-4">
  <div className="card">
    <div className="card-body">
      <p className="card-title my-0" style={{ fontSize: '20px' }}>Mobile Account And Agent</p>
      <h5 className="card-title text-danger fw-bold">Send Money to Friends and Family</h5>
      <img src="./img/Home/image1.png" alt="" className="card-img-top py-4" />
      <div className="d-flex justify-content-end mt-3">
        <a href="" className="btn btn-outline-danger btn-sm">Know More</a>
      </div>
    </div>
  </div>
</div>

<div className="col-md-3 mb-4">
  <div className="card">
    <div className="card-body">
      <p className="card-title my-0" style={{ fontSize: '20px' }}>Mobile Account And Agent</p>
      <h5 className="card-title text-danger fw-bold">Send Money to Friends and Family</h5>
      <img src="./img/Home/Ready-Cash-Eng.png" alt="" className="card-img-top py-4" />
      <div className="d-flex justify-content-end mt-3">
        <a href="" className="btn btn-outline-danger btn-sm">Know More</a>
      </div>
    </div>
  </div>
</div>
<hr />
<h3 className='fw-bold pt-2 pb-3 px-4'>CONTACT US</h3>
<hr />
</div>
<div className="row my-4">
    <div className="col-md-4">
        <div className="d-flex justify-content-start border mx-2 p-4">
            <img src="./img/Home/contact-ico-1.png" alt="" />
            <div className='mt-3 mx-2'>
            <p className='my-0'>Jazz Customer</p>
            <h3 className='my-0'>HELPLINE</h3>
            <h3 className='text-danger'>4444</h3>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="d-flex justify-content-start border mx-2 p-4">
            <img src="./img/Home/contact-ico-2.png" alt="" />
            <div className='mt-3 mx-2'>
            <p className='my-0'>Retailers</p>
            <h3 className='my-0'>HELPLINE</h3>
            <h3 className='text-danger'>1344</h3>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="d-flex justify-content-start border mx-2 p-4">
            <img src="./img/Home/contact-ico-3.png" alt="" />
            <div className='mt-3 mx-2'>
            <p className='my-0'>UAN Customer</p>
            <h3 className='my-0'>HELPLINE</h3>
            <h3 className='text-danger'>021 111-124-444</h3>
            </div>
        </div>
    </div>
</div>
</div>

<footer class="text-center text-lg-start bg-body-tertiary text-muted">

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>

  </section>

  <section class="text-dark">
  <div class="text-center text-md-start mt-5">
    <div class="row mt-3 overflow-hidden w-100">
      
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 class="fw-bold mb-4">JazzCash Shop</h6>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Money Transfer</a></p>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Bill Payment</a></p>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Payments</a></p>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Mobile Account Services</a></p>
      </div>

      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 class="fw-bold mb-4">Mobile Account</h6>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Money Transfer</a></p>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Bill Payment</a></p>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Mobile Load</a></p>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Account Closure Request Process</a></p>
      </div>

      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">Corporate</h6>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Corporate Disbursement Solutions</a></p>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Corporate Collection Solutions</a></p>
      </div>

      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">Digital Payments</h6>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Online Payments</a></p>
      </div>

      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">Other</h6>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Terms & Conditions</a></p>
        <p style={{ marginBottom: '0.5rem' }}><a href="#!" class="text-reset no-underline">Schedule of Charges</a></p>
      </div>

    </div>
  </div>
</section>

<div className="d-flex align-items-center justify-content-between p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
  <img src="./img/Home/mobilink_logo.png" alt="Mobilink Logo" />
  <span className="text-center mx-auto">
    © Copyrights 2024 JazzCash. All Rights Reserved
  </span>
</div>

</footer>

    </>
  )
}

export default Home