export default function Reviews() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
          <div className="row justify-content-center">
              <div className="col-lg-6">
                  <h1 className="section-title position-relative text-center mb-5">High-Quality Products for Highly-Driven Customers</h1>
              </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-lg-8">
                  <div className="owl-carousel testimonial-carousel">
                      <div className="text-center">
                          <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                          <h4 className="font-weight-light mb-4">Shredibles is great for recovery following brutal workouts or losses. </h4>
                          <img className="img-fluid rounded-circle w-50 h-50 mx-auto mb-3" src="/images/mike-mcdaniel.jpeg" alt="Client Testimonial" />
                          <h5 className="font-weight-bold m-0">Mike Mcdaniel</h5>
                          <span>Head Coach of the Miami Dolphins</span>
                      </div>
                      <div className="text-center">
                          <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                          <h4 className="font-weight-light mb-4">I don't work out, but I still love Shredibles lol </h4>
                          <img className="img-fluid rounded-circle w-50 h-50 mx-auto mb-3" src="/images/seth.jpeg" alt="Client Testimonial" />
                          <h5 className="font-weight-bold m-0">Seth Rogen</h5>
                          <span>Entrepreneur</span>
                      </div>
                      <div className="text-center">
                          <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                          <h4 className="font-weight-light mb-4">"I recently tried the 'Blaze and Glazed Protein Donuts' from the unique range of THC-infused edibles, and let me tell you, it was an experience that 'baked' my day! Not only did I get my protein fix, but I also felt more relaxed than a cat in a sunbeam.</h4>
                          <img className="img-fluid rounded-circle w-50 h-50 mx-auto mb-3" src="/images/tucker.jpeg" alt="Client Testimonial" />
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
