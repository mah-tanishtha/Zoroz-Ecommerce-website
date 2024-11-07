// Checkout.js
import React, { useState } from 'react';
import { useProducts } from '../context/ProductProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => {
    const { cart, cartCount } = useProducts();  // Get cart data
    const [paymentSuccess, setPaymentSuccess] = useState(false);  // State for payment success message

    // Calculate total amount of the cart
    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
    };

    // Handle confirm payment (show success message)
    const handleConfirmPayment = () => {
        setPaymentSuccess(true);  // Set payment success
    };

    return (
        <div>
            <Header cartCount={cartCount} />
            <h1>Checkout</h1>
            <div className="container">
                <div className="row">
                    {/* If cart is empty */}
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            {/* Display cart items */}
                            <div className="col-12">
                                <h3>Items in your Cart</h3>
                                {cart.map((product) => (
                                    <div className="card" key={product.id} style={{ marginBottom: '10px' }}>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5 className="card-title">{product.title}</h5>
                                                    <p className="card-text">{product.description}</p>
                                                    <p><strong>Price:</strong> ${product.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Display total amount */}
                            <div className="col-12 mt-3">
                                <h4>Total Amount: ${calculateTotal()}</h4>
                            </div>

                            {/* Confirm payment button */}
                            <div className="col-12 mt-3">
                                <button className="btn btn-primary" onClick={handleConfirmPayment}>
                                    Confirm Payment
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Payment Success Message */}
                {paymentSuccess && (
                    <div className="alert alert-success mt-4">
                        <h4 className="alert-heading">Payment Successful!</h4>
                        <p>Your payment has been processed successfully. Thank you for your purchase!</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;
