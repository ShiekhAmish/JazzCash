import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const JazzCashShop = () => {
  return (
    <>
    <Header/>
    <div>
    
    <div >
      <img class="d-block w-100" src="./img/JazzCashShop/JazzCash-Shop.png" alt="First slide"/>
    </div>
    <h2 className='pt-3 pb-2 px-3'>JAZZCASH SHOP</h2>
  <hr />

<nav aria-label="breadcrumb">
  <ol class="breadcrumb mx-2">
    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
    <li class="breadcrumb-item active text-danger" aria-current="page">JazzCash Shop</li>
  </ol>
</nav>
<div className="row overflow-hidden w-100">
<div className="col-md-3 mb-4">
  <div className="card">
    
      
      <img src="./img/JazzCashShop/Payment-Thumbnail.png" alt="" className="card-img-top " />
      <div className="card-body text-center">
      <h5 className="card-title text-danger fw-bold">PAYMENTS</h5>
      <p className="card-title my-0" >Whether you have to pay fees for a service, repaying your loans or sharing the gift of life with donations. We take care of all!..</p>
      
      <div className=" mt-3">
        <a href="" className="btn btn-warning btn-sm">Know More</a>
      </div>
    </div>
  </div>
</div>
<div className="col-md-3 mb-4">
  <div className="card">
    
      
      <img src="./img/JazzCashShop/Bill-Payment-Thumbnail.png" alt="" className="card-img-top " />
      <div className="card-body text-center">
      <h5 className="card-title text-danger fw-bold">BILL PAYMENT</h5>
      <p className="card-title my-0" >Whether you have to pay fees for a service, repaying your loans or sharing the gift of life with donations. We take care of all!..</p>
      
      <div className=" mt-3">
        <a href="" className="btn btn-warning btn-sm">Know More</a>
      </div>
    </div>
  </div>
</div>
<div className="col-md-3 mb-4">
  <div className="card">
    
      
      <img src="./img/JazzCashShop/Money-Transfer-Thumbnail.png" alt="" className="card-img-top " />
      <div className="card-body text-center">
      <h5 className="card-title text-danger fw-bold">MONEY TRANSFER</h5>
      <p className="card-title my-0" >Whether you have to pay fees for a service, repaying your loans or sharing the gift of life with donations. We take care of all!..</p>
      
      <div className=" mt-3">
        <a href="" className="btn btn-warning btn-sm">Know More</a>
      </div>
    </div>
  </div>
</div>
<div className="col-md-3 mb-4">
  <div className="card">
    
      
      <img src="./img/JazzCashShop/mobile-account-services.png" alt="" className="card-img-top " />
      <div className="card-body text-center">
      <h5 className="card-title text-danger fw-bold">MOBILE ACCOUNT SERVICES</h5>
      <p className="card-title my-0" >Whether you have to pay fees for a service, repaying your loans or sharing the gift of life with donations. We take care of all!..</p>
      
      <div className=" mt-3">
        <a href="" className="btn btn-warning btn-sm">Know More</a>
      </div>
    </div>
  </div>
</div>

</div>
    </div>
    <Footer/>
    </>
  )
}

export default JazzCashShop