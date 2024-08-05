import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

const Corporate = () => {
  return (
    <>
    <Header/>
    <div>
    
    <div >
      <img class="d-block w-100" src="./img/Corporate/Corporate.png" alt="First slide"/>
    </div>
    <h2 className='pt-3 pb-2 px-3'>CORPORATE</h2>
  <hr />

<nav aria-label="breadcrumb">
  <ol class="breadcrumb mx-2">
    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
    <li class="breadcrumb-item active text-danger" aria-current="page">Corporate</li>
  </ol>
</nav>
<div className="row overflow-hidden w-100">
<div className="col-md-3 mb-4">
  <div className="card">
    
      
      <img src="https://www.jazzcash.com.pk/assets/uploads/2018/10/JC-CorporateCollectionSolutions-Thumb.png" alt="" className="card-img-top " />
      <div className="card-body text-center">
      <h5 className="card-title text-danger fw-bold text-uppercase">Corporate Collection Solutions</h5>
      <p className="card-title my-0" >This solution enables collection of payment by corporate from their customer/user base using two channels primarily </p>
      
      <div className=" mt-3">
        <a href="" className="btn btn-warning btn-sm">Know More</a>
      </div>
    </div>
  </div>
</div>
<div className="col-md-3 mb-4">
  <div className="card">
    
      
      <img src="https://www.jazzcash.com.pk/assets/uploads/2018/10/JC-CorporateDisbursementSolutions-Thumb.png" alt="" className="card-img-top " />
      <div className="card-body text-center">
      <h5 className="card-title text-danger fw-bold text-uppercase">Corporate Disbursement Solutions</h5>
      <p className="card-title my-0" >JazzCash has a dedicated corporate solutions team that focuses on providing public and private sector organizations with customized solutions ..</p>
      
      <div className=" mt-3">
        <a href="" className="btn btn-warning btn-sm">Know More</a>
      </div>
    </div>
  </div>
</div>
<div className="col-md-3 mb-4">
  <div className="card">
    
      
      <img src="https://www.jazzcash.com.pk/assets/uploads/2020/03/Payment-Gateway-Thumbnail.png" alt="" className="card-img-top " />
      <div className="card-body text-center">
      <h5 className="card-title text-danger fw-bold text-uppercase">Online Payment Gateway</h5>
      <p className="card-title my-0" >JazzCash offers a secure, customizable and seamless payment solution for your website or mobile app. Hundreds of online businesses are using our state...</p>
      
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

export default Corporate