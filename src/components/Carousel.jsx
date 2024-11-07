import React from 'react'


const Carousel = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon text-bg-secondary rounded" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon text-bg-secondary rounded" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

           

        </div>
    )
}

export default Carousel
