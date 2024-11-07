// ProductListing.js
import React, { useState } from 'react';
import { useProducts } from '../context/ProductProvider';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import '../pages/styles/ProductListing.css';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const ProductListing = () => {
  const { products,setProductID,cart, } = useProducts();
  const { category } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const filteredData = products.filter((product) => product.category === category);
  console.log("Filtered Data:", filteredData);

  const handleShowDetail = (id) => {
    setProductID(id)
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    
  };

  return (
    <div>
      <Header cartIcon={true} cartCount={cart.length}/>
      <h1>{category} </h1>
      <div className="container">
        <div className="row">
          {
            filteredData.map((product) => (
              <div className="col-6" key={product.id} style={{ margin: "10px 0px" }}>
                <div className="card" style={{ height: "100%", padding: '10px' }}>
                  <img src={product.image} height="100px" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button type="button" className="btn btn-primary" onClick={()=>handleShowDetail(product.id)}>
                      Show Detail
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />

      {/* Render Modal */}
      <Modal show={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default ProductListing;
