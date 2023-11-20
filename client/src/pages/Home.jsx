export default function Home() {
  return (
    <div className="container-fluid p-0 mb-5 pb-5">
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

        <div className="carousel-item active">
            <img className="w-100" src="/images/Welcome to.png" alt="Carousel 1" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase mb-md-3"></h4>
                <h1 className="display-3 text-white mb-md-4"></h1>
                <a href="#learn-more" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img className="w-100" src="/images/products/Blaze and Glazed Protein Donuts.png" alt="Carousel 2" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase mb-md-3">Our World Famous</h4>
                <h1 className="display-3 text-white mb-md-4">Blazed and Glazed Donuts</h1>
                <a href="#learn-more" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img className="w-100" src="/images/products/whey-out.png" alt="Carousel 3" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase mb-md-3">Try Our Brand New</h4>
                <h1 className="display-3 text-white mb-md-4">Whey-Out Protein Powder</h1>
                <a href="#learn-more" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
          <div className="btn btn-secondary px-0" style={{ width: '45px', height: '45px' }}>
            <span className="carousel-control-prev-icon mb-n1"></span>
          </div>
        </a>
        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
          <div className="btn btn-secondary px-0" style={{ width: '45px', height: '45px' }}>
            <span className="carousel-control-next-icon mb-n1"></span>
          </div>
        </a>
      </div>
    </div>
  );
}