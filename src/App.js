import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Components/Home/Home';
import JazzCashShop from './Components/Utilities/JazzCashShop';

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

        </Route>
        {/* <Route path="/login" element={<Login setuserlogged={setuserlogged}/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
