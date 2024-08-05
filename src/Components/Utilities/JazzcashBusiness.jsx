import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './jazzcashbusiness.css';
import { useInView } from 'react-intersection-observer';

const JazzcashBusiness = () => {
    const { ref: leftRef1, inView: leftInView1 } = useInView({ triggerOnce: true });
    const { ref: rightRef1, inView: rightInView1 } = useInView({ triggerOnce: true });
    
    const { ref: leftRef2, inView: leftInView2 } = useInView({ triggerOnce: true });
    const { ref: rightRef2, inView: rightInView2 } = useInView({ triggerOnce: true });
    
    const { ref: leftRef3, inView: leftInView3 } = useInView({ triggerOnce: true });
    const { ref: rightRef3, inView: rightInView3 } = useInView({ triggerOnce: true });
    
    const { ref: leftRef4, inView: leftInView4 } = useInView({ triggerOnce: true });
    const { ref: rightRef4, inView: rightInView4 } = useInView({ triggerOnce: true });

  return (
    <>
      <Header />
      <div className="container overflow-hidden">
        <div className="headline-business-banner">
          <div className="headline-business-text">
            To Update Your CNIC, please <a style={{color:'red'}} href=''>click here</a>
          </div>
        </div>

        <div className="row mt-5 align">
          <div
            className={`col-sm-12 col-md-6 col-lg-6 ${leftInView1 ? 'fade-in-left' : ''}`}
            ref={leftRef1}
          >
            <div className="main-content">
              <h1 style={{ fontSize: '4rem' }}>
                Business Karo <br />
                <i> Baithay Baithay </i>
              </h1>
              <h1 style={{ fontSize: '4rem' }}>With the all new</h1>
              <h2 style={{ fontSize: '5rem', fontWeight: 'lighter' }} className="text-danger">
                JazzCash
              </h2>
              <h1 style={{ fontSize: '5rem', fontWeight: 'lighter' }} className="text-danger">
                Business App
              </h1>
              <p style={{ fontSize: '1.4rem', fontWeight: 'lighter' }}>
                Whether you are a small business owner or a corporation manager, the JazzCash Business App
                provides you with state-of-the-art tools for efficient financial and business management.
              </p>
              <div className="buttons mt-5">
                <a className="mx-2 my-1" href="https://play.google.com/store/apps/details?id=com.ibm.jazzcashmerchant" target="_blank" rel="noopener noreferrer">
                  <img className="img-responsive" src="https://www.jazzcash.com.pk/assets/uploads/2021/04/google-1-1.png" alt="Google Play" />
                </a>
                <a className="mx-2 my-1" href="https://apps.apple.com/pk/app/jazzcash-business/id1526246458" target="_blank" rel="noopener noreferrer">
                  <img className="img-responsive" src="https://www.jazzcash.com.pk/assets/uploads/2021/04/apple-1-1.png" alt="Apple Store" />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`col-sm-12 col-md-6 col-lg-6 ${rightInView1 ? 'fade-in-right' : ''}`}
            ref={rightRef1}
          >
            <img src="https://www.jazzcash.com.pk/assets/uploads/2021/04/business-app-1.png" className="img-fluid" alt="JazzCash Business App" />
          </div>
        </div>

        <h1 style={{ fontSize: '6rem', fontWeight: 'lighter' }} className='text-center text-uppercase text-danger my-5'>Account Features</h1>
      </div>

      <div className='bg-light overflow-hidden'>
        <div className='container my-3 py-4'>
          <div className="row mt-5 align-items-center">
            <div
              className={`col-sm-12 col-md-6 col-lg-6 ${leftInView2 ? 'fade-in-right' : ''}`}
              ref={leftRef2}
            >
              <img src="./img/JazzCashBusiness/jazzaccount.PNG" className="img-fluid" alt="JazzCash Business App" />
            </div>
            <div
              className={`col-sm-12 col-md-6 col-lg-6 ${rightInView2 ? 'fade-in-left' : ''}`}
              ref={rightRef2}
            >
              <div className="main-content">
                <h1 style={{ fontSize: '3rem', fontWeight: 'lighter' }} className="text-danger">
                  SIMPLE AND SWIFT ACCOUNT REGISTRATION
                </h1>
                <p style={{ fontSize: '1.2rem', fontWeight: 'lighter' }}>
                  Financial Management is now at your fingertips. Provide some basic personal and business information to register for your Basic Business Account today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='container overflow-hidden my-3 py-4'>
          <div className="row mt-5 align-items-center">
            <div
              className={`col-sm-12 col-md-6 col-lg-6 ${leftInView3 ? 'fade-in-left' : ''}`}
              ref={leftRef3}
            >
              <div className="main-content">
                <h1 style={{ fontSize: '3rem', fontWeight: 'lighter' }} className="text-danger">
                  Send promotional SMS campaigns to your customers
                </h1>
                <p style={{ fontSize: '1.2rem', fontWeight: 'lighter' }}>
                  Keep your customers updated with your discounts, new products and offers through our SMS Marketing Feature on the JazzCash Business App
                </p>
              </div>
            </div>
            <div
              className={`col-sm-12 col-md-6 col-lg-6 ${rightInView3 ? 'fade-in-right' : ''}`}
              ref={rightRef3}
            >
              <img src="./img/JazzCashBusiness/jazzpromotional.PNG" className="img-fluid" alt="JazzCash Business App" />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-light overflow-hidden'>
        <div className='container my-3 py-4'>
          <div className="row mt-5 align-items-center">
            <div
              className={`col-sm-12 col-md-6 col-lg-6 ${leftInView4 ? 'fade-in-right' : ''}`}
              ref={leftRef4}
            >
              <img src="./img/JazzCashBusiness/GetInTouch.PNG" className="img-fluid" alt="JazzCash Business App" />
            </div>
            <div
              className={`col-sm-12 col-md-6 col-lg-6 ${rightInView4 ? 'fade-in-left' : ''}`}
              ref={rightRef4}
            >
              <div className="main-content">
                <h1 style={{ fontSize: '3rem', fontWeight: 'lighter' }} className="text-danger">
                  ACCEPT QR PAYMENTS QUICKLY AND EASILY
                </h1>
                <p style={{ fontSize: '1.2rem', fontWeight: 'lighter' }}>
                  A standard QR Code and Till number can be used to receive payments from your customers. Moreover, you can generate a QR Code for any amount in real time and share it with customers to receive payments conveniently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='container overflow-hidden my-3 py-4'>
          <div className="row mt-5 align-items-center">
            <div
              className={`col-sm-12 col-md-6 col-lg-6 ${leftInView4 ? 'fade-in-left' : ''}`}
              ref={leftRef4}
            >
              <div className="main-content">
                <h1 style={{ fontSize: '3rem', fontWeight: 'lighter' }} className="text-danger">
                  Avail Instant Loans
                </h1>
                <p style={{ fontSize: '1.2rem', fontWeight: 'lighter' }}>
                  Enjoy real-time loan up to Rs. 50,000, track loan history and manage repayments effortlessly. Increase your loan limit by accepting more QR payments from customers.
                </p>
                <p style={{ fontSize: '1.2rem', fontWeight: 'lighter' }}>
                  *This service is currently available to select merchants only.
                </p>
              </div>
            </div>
            <div
              className={`col-sm-12 col-md-6 col-lg-6 ${rightInView4 ? 'fade-in-right' : ''}`}
              ref={rightRef4}
            >
              <img src="./img/JazzCashBusiness/InstatntLoans.PNG" className="img-fluid" alt="JazzCash Business App" />
            </div>
          </div>
        </div>
      </div>
      <div className="container overflow-hidden mt-5">
      <h1 className="text-center text-danger" style={{ fontSize: '5rem', fontWeight: 'lighter' }}>GET IN TOUCH</h1>
      <form className="mt-4">
  <div className="row">
    <div className="col-md-6 mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control w-100" id="name" placeholder="Enter your name" />
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control w-100" id="email" placeholder="Enter your email" />
    </div>
  </div>
  <div className="row">
    <div className="col-12 mb-3">
      <label htmlFor="company" className="form-label">Company</label>
      <input type="text" className="form-control w-100" id="company" placeholder="Enter your company name" />
    </div>
  </div>
  <div className="row">
    <div className="col-12 mb-3">
      <label htmlFor="message" className="form-label">Message</label>
      <textarea className="form-control w-100" id="message" rows="5" placeholder="Enter your message"></textarea>
    </div>
  </div>
  <div className="row">
    <div className="col-12 text-center">
      <button type="button" className="btn btn-outline-danger btn-lg">SUBMIT</button>
    </div>
  </div>
</form>

    </div>
      <Footer />
    </>
  );
}

export default JazzcashBusiness;
