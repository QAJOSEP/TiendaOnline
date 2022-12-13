import React from 'react'

const Carousel = () => {
    return (
        <div className="container mt-5">
            <div className="homepge-carousel-title">
                <h3>Encuentra lo que buscas!</h3>
            </div>
            <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5 d-none d-lg-block" data-bs-interval='false'>

                <div className="carousel-inner">
                    <div className="corousel-item active">
                        <div className="row dflex justify-content-center align-items-center">
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                                <div className="text-center">
                                    <img src={require('../../../public/Images/BooksImages/book-luv2code-1000.png')}
                                        width='151'
                                        height='233'
                                        alt="book" />
                                    <h6 className="mt-2">Producto</h6>
                                    <p>Nombre</p>
                                    <a href="#" className="btn main-color text-white"></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="corousel-item active">
                        <div className="row dflex justify-content-center align-items-center">
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                                <div className="text-center">
                                    <img src={require('../../../public/Images/BooksImages/book-luv2code-1000.png')}
                                        width='151'
                                        height='233'
                                        alt="book" />
                                    <h6 className="mt-2">Producto</h6>
                                    <p>Nombre</p>
                                    <a href="#" className="btn main-color text-white"></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" 
                    type='button'
                    data-bs-target='#carouselExampleControls'
                    data-bs-slide='prev'
                    >
                    <div className="carousel-control-prev-icon"
                    aria-hidden='true'>
                    <div className="span visually-hidden">Anterior</div>
                    </div>

                    </button>

                    <button className="carousel-control-next" 
                    type='button'
                    data-bs-target='#carouselExampleControls'
                    data-bs-slide='next'
                    >
                    <div className="carousel-control-next-icon"
                    aria-hidden='true'>
                    <div className="span visually-hidden">Siguiente</div>
                    </div>

                    </button>
                </div>

            </div>
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    
                </div>
            </div>
            <div className='homepage-carousel-title mt-3'>
            </div>
        </div>
    )
}

export default Carousel