export default function Categories({ currentPage, handlePageChange }) {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative text-center mb-5">Categories</h1>
                    </div>
                </div>

                <div className="row m-0 portfolio-container">
                    <div className="col-lg-4 col-md-6 p-1 portfolio-item first">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="/images/category/elevate.png" alt="Portfolio 1" />
                            <a className="portfolio-btn" onClick={() => handlePageChange('Elevate')}>
                                <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-1 portfolio-item first">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="/images/category/recover.png" alt="Portfolio 2" />
                            <a className="portfolio-btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{ fontSize: '60px' }}></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-1 portfolio-item second">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="/images/category/vegan.png" alt="Portfolio 3" />
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
