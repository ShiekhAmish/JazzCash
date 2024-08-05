import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Home = () => {
    const navigate = useNavigate();

  const handleDropdownClick = (path) => {
    navigate(path);
  };
  return (
    <>
    <Header/>
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

<Footer/>

    </>
  )
}

export default Home