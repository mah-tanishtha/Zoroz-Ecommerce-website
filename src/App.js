import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './pages/Homepage';
import {ProductProvider} from '../src/context/ProductProvider'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import Checkout from './pages/CheckoutPage';

function App() {
  
  return (
    <div className="App">
      <ProductProvider>
        {/* <Layout /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/productlist/:category" element={<ProductListing/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </Router>
      </ProductProvider>

      {/* {
        getAllProducts
      } */}
    </div>
  );
}

export default App;
