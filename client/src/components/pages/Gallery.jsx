export default function Gallery() {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative text-center mb-5">See the Magic for Yourself</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-4 pb-2" id="portfolio-filters">
                            <li className="btn btn-sm btn-outline-primary m-1 active" data-filter=".first">Facilities</li>
                            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Stimulate</li>
                            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Recover</li>
                            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".fourth">Vegan</li>
                        </ul>
                    </div>
                </div>
                <div className="row m-0 portfolio-container">
                    
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item first">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="/images/products/bakery.png" alt="Portfolio 1" />
                            <a className="portfolio-btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item first">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="/images/products/office.png" alt="Portfolio 1" />
                            <a className="portfolio-btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                            </a>
                        </div>
                    </div>
  
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item second">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="/images/products/Puff-Puff Pass Cream Puffs.png" alt="Portfolio 1" />
                            <a className="portfolio-btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                            </a>
                        </div>
                    </div>
  
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item second">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="/images/products/Gym-Rat Ganja Gummies.png" alt="Portfolio 1" />
                            <a className="portfolio-btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                            </a>
                        </div>
                    </div>
  
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item third">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="/images/products/Canna-Bulk Cookies 2 .png" alt="Portfolio 1" />
                            <a className="portfolio-btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                            </a>
                        </div>
                    </div>
  
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item third">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="/images/products/Lift3d Pre-Workout Lemon-Lime Lollipop.png" alt="Portfolio 1" />
                            <a className="portfolio-btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  