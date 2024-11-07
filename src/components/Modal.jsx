import React, { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductProvider';
import { getSingleProduct } from '../backend/controllers/ProductController';
import { useNavigate } from 'react-router-dom';

const Modal = ({ show, onClose }) => {
    const { productID, addToCart } = useProducts();
    const [singleProduct, setSingleProduct] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (productID) {
                    const productData = await getSingleProduct(productID); // Await the API call
                    setSingleProduct(productData);
                    console.log("Product data:", productID);
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        if (show) fetchProduct(); // Call fetchProduct only if modal is shown
    }, [show, productID]);

    const handleAddToCart = () => {
        addToCart(singleProduct);  
        onClose();  
    };

    const handleCheckoutPage = () => {
        navigate('/checkout')  
        onClose();  
    };

    if (!show) return null; 

    return (
        <div>
            <div className="modal show fade d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {singleProduct.title}
                            </h5>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={singleProduct.image} alt={singleProduct.title} height={'100px'} />
                            <p>Detail : {singleProduct.description}</p>
                            <p>Price : ${singleProduct.price}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleAddToCart}>Add To Cart</button>
                            <button type="button" className="btn btn-primary" onClick={handleCheckoutPage}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" onClick={onClose}></div>

            
           
        </div>
    );
};

export default Modal;
