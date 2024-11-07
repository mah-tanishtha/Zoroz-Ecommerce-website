import React from 'react';
import { useProducts } from '../context/ProductProvider';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const HomeCard = () => {
    const { products, loading,setCartIcon } = useProducts();


    if (loading) return <p>Loading...</p>; 

    
    const uniqueCategories = [
        ...new Set(products.map((product) => product.category)), 
    ];
    

    return (
        <div>
            <h1 > List of available Products</h1>
            <div className='container  mb-3'>
                <div className="row justify-content-center">
                    {uniqueCategories.map((category) => {
                        const product = products.find((prod) => prod.category === category);

                        return (

                            <div className='col ' key={category}><>
                            </>
                                <Link style={{textDecoration:'none'}} to={`/productlist/${category}`} onClick={setCartIcon(true)}>
                                     <Card   id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        category={product.category}
                                        title={product.title}
                                        image={product.image}
                                    />
                                </Link>

                            </div>

                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
