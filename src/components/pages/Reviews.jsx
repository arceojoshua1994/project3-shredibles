export default function Reviews() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="section-title position-relative text-center mb-5">High-Quality Products for Highly-Driven Customers</h1>
          </div>
        </div>
        <div className="row">
          {/* Review 1 */}
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="card text-center shadow mb-4">
              <div className="card-body">
                <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                <h4 className="font-weight-light mb-4">Shredibles is great for recovery following brutal workouts or losses.</h4>
                <img className="img-fluid rounded-circle mx-auto mb-3" src="/images/mike-mcdaniel.jpeg" alt="Mike Mcdaniel" style={{ width: '50%', height: 'auto' }} />
                <h5 className="font-weight-bold m-0">Mike Mcdaniel</h5>
                <span>Head Coach of the Miami Dolphins</span>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="card text-center shadow mb-4">
              <div className="card-body">
                <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                <h4 className="font-weight-light mb-4">I don't work out, but I still love Shredibles lol</h4>
                <img className="img-fluid rounded-circle mx-auto mb-3" src="/images/seth.jpeg" alt="Seth Rogen" style={{ width: '50%', height: 'auto' }} />
                <h5 className="font-weight-bold m-0">Seth Rogen</h5>
                <span>Entrepreneur</span>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="card text-center shadow mb-4">
              <div className="card-body">
                <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                <h4 className="font-weight-light mb-4">The "Blaze and Glaze" Protein Donuts are straight fire, son.</h4>
                <img className="img-fluid rounded-circle mx-auto mb-3" src="/images/tucker.jpeg" alt="T Swizzle" style={{ width: '50%', height: 'auto' }} />
                <h5 className="font-weight-bold m-0">T Swizzle</h5>
                <span>Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

