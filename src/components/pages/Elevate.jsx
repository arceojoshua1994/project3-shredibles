export default function Elevate() {
    return (
        <div className="container-fluid my-5 py-5 px-0">
            <div className="row bg-primary m-0">
                <div className="col-md-6 px-0" style={{ minHeight: '500px' }}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="/images/category/elevate.png" alt="Elevate" style={{ objectFit: 'cover' }} />
                    </div>
                </div>

                <div className="col-md-6 py-5 py-md-0 px-0">
                    <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                        <div className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                            style={{ width: '100px', height: '100px' }}>
                            <h3 className="font-weight-bold text-secondary mb-0">$199</h3>
                        </div>
                        <h3 className="font-weight-bold text-white mt-3 mb-4">Chocolate Ice Cream</h3>
                        <p className="text-white mb-4">Lorem justo clita dolor ipsum ut sed eos, ipsum et dolor kasd sit ea
                            justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                        <a href="#" className="btn btn-secondary py-3 px-5 mt-2">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
