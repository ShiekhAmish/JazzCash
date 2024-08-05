import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Components/Home/Home';
import JazzCashShop from './Components/Utilities/JazzCashShop';
import MobileAccount from './Components/Utilities/MobileAccount';
import DigitalPayments from './Components/Utilities/DigitalPayments';
import Corporate from './Components/Utilities/Corporate';
import JazzcashBusiness from './Components/Utilities/JazzcashBusiness';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Header /> */}
              <Outlet />
              {/* <Footer /> */}
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/jazzcashshop" element={<JazzCashShop />} />
          <Route path="/mobileaccount" element={<MobileAccount />} />
          <Route path="/digitalpayments" element={<DigitalPayments />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/jazzcashbusiness" element={<JazzcashBusiness />} />



        </Route>
        {/* <Route path="/login" element={<Login setuserlogged={setuserlogged}/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
