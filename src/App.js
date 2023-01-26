import './App.css';

import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendor from './components/Vendor';
import CartPage from './components/CartPage';
import Verification from './components/Verification';
import OrderSuccessful from './components/OrderSuccessful';
import OrderUnsuccessful from './components/OrderUnsuccessful';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Auth0Provider
        domain="your-domain.auth0.com"
        clientId="your-client-id"
        redirectUri={window.location.origin}
      >
        <BrowserRouter basename="foodbag">
          <Routes>
            <Route path="/foodbag" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/vendor" element={<Vendor />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cart/verification" element={<Verification />} />
            <Route path="/success" element={<OrderSuccessful />} />
            <Route path="/unsuccess" element={<OrderUnsuccessful />} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider>
    </div>
  );
}

export default App;
