import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      {/* Footer Links */}
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3">
            <h5>Get to Know Us</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Careers</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Press Releases</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Amazon Cares</Link></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div className="col-md-3">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white text-decoration-none">Facebook</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Twitter</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Instagram</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">
            <h5>Make Money with Us</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white text-decoration-none">Sell on Amazon</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Affiliate Marketing</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Advertise Your Products</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Amazon Pay</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
            <h5>Let Us Help You</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white text-decoration-none">Your Account</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Returns Centre</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">100% Purchase Protection</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Help</Link></li>
            </ul>
          </div>
        </div>
        
        <hr className="bg-white mt-4" />
        
        {/* Footer Bottom */}
        <div className="text-center py-3">
          <p className="mb-1">Back to top</p>
          <p className="small mb-0">
            © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}



export default Footer
