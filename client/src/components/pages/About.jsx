export default function About() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 ">
            <h1 className="section-title position-relative text-center mb-5 ">Meet the "High and Mighty" Team</h1>
          </div>
        </div>
        <div className="row">

              {/* Team Member 1 */}
              <div className="service-item col-lg-3 col-md-6 mb-4">
                <div className="service-img mx-auto">
                  <img className="rounded-circle w-100 h-100 bg-light p-3" src="/images/team/IMG_1973.jpg" alt="Joshua Arceo" style={{ objectFit: 'cover' }} />
                </div>
                <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                  <h3 className="font-weight-bold mt-5 mb-3 pt-5">Joshua Arceo</h3>
                  <h6 className="text-uppercase text-muted mb-4">Front-End, Branding</h6>
                  <div className="d-flex justify-content-center pt-1">
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-github"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="service-item col-lg-3 col-md-6 mb-4">
                <div className="service-img mx-auto">
                  <img className="rounded-circle w-100 h-100 bg-light p-3" src="/images/team/christian.png" alt="Christian Flores" style={{ objectFit: 'cover' }} />
                </div>
                <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                  <h3 className="font-weight-bold mt-5 mb-3 pt-5">Christian Flores</h3>
                  <h6 className="text-uppercase text-muted mb-4">Back-End</h6>
                  <div className="d-flex justify-content-center pt-1">
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-github"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="service-item col-lg-3 col-md-6 mb-4">
                <div className="service-img mx-auto">
                  <img className="rounded-circle w-100 h-100 bg-light p-3" src="/images/team/lina.png" alt="Lina Quintana" style={{ objectFit: 'cover' }} />
                </div>
                <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                  <h3 className="font-weight-bold mt-5 mb-3 pt-5">Lina Quintana</h3>
                  <h6 className="text-uppercase text-muted mb-4">Back-End</h6>
                  <div className="d-flex justify-content-center pt-1">
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-github"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="service-item col-lg-3 col-md-6 mb-4">
                <div className="service-img mx-auto">
                  <img className="rounded-circle w-100 h-100 bg-light p-3" src="/images/team/jusu.png" alt="Jusu Karneh" style={{ objectFit: 'cover' }} />
                </div>
                <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                  <h3 className="font-weight-bold mt-5 mb-3 pt-5">Jusu Karneh</h3>
                  <h6 className="text-uppercase text-muted mb-4">Front-End, Recruiting</h6>
                  <div className="d-flex justify-content-center pt-1">
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-github"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>

            
        </div>
      </div>
    </div>
  );
}