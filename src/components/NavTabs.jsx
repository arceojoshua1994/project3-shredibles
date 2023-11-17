
function NavTabs({ currentPage, handlePageChange }) {
  return (

    <header>
  
    <div className="top-links container-fluid py-3 d-none d-md-block">
        <div className="top-links container">
            <div className="row">
                <div className="top-links col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                    <a className="text-white px-3" href="">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                        <span className="text-white">|</span>
                        <a className="text-white px-3" href="#Help">Login</a>
                       
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-white px-3" href="">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-white px-3" href="">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-white px-3" href="">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="text-white px-3" href="">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="text-white pl-3" href="">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


   
    <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: '9' }}>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                <a href="index.html" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 display-4 text-primary"><span className="text-secondary">SHRED</span>ibles</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <a href="#Home" onClick={() => handlePageChange('Home')} className="nav-item nav-link active">Home</a>
                        <a href="#Categories" onClick={() => handlePageChange('Categories')} className="nav-item nav-link">Categories</a>
                      
                        <a href="#Products" onClick={() => handlePageChange('Products')} className="nav-item nav-link">Products</a>
                    </div>
                    <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
                        <h1 className="m-0 display-4 title-color"><span className="title-secondary-color">SHRED</span>ibles</h1>
                    </a>
                    <div className="navbar-nav mr-auto py-0">
                        <a href="#Reviews" onClick={() => handlePageChange('Reviews')} className="nav-item nav-link">Reviews</a>
                        
                        <a href="#Login" onClick={() => handlePageChange('Login')} className="nav-item nav-link">Login</a>
                        <a href="#About" onClick={() => handlePageChange('About')} className="nav-item nav-link">About</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    
    </header>
   
  );
}

export default NavTabs;
