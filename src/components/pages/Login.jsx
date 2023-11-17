export default function Login() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="section-title position-relative text-center mb-5">Sign Up / Log In</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="bg-light rounded p-5">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" noValidate>

                {/* Log In Form */}
                <h2 className="text-center mb-4">Log In</h2>
                <div className="form-row">
                  <div className="col-sm-12 control-group">
                    <input type="email" className="form-control p-4" id="login-email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="control-group">
                  <input type="password" className="form-control p-4" id="login-password" placeholder="Password" required />
                </div>
                <div className="text-center mt-4">
                  <button className="btn btn-primary btn-block py-3 px-5" type="submit">Log In</button>
                </div>


                {/* Divider */}
                <hr className="my-5" />

                {/* Sign Up Form */}
                <h2 className="text-center mb-4">Don't Have an Account? Sign Up Below</h2>
                <div className="form-row">
                  <div className="col-sm-6 control-group">
                    <input type="text" className="form-control p-4" id="signup-name" placeholder="Your Name" required />
                  </div>
                  <div className="col-sm-6 control-group">
                    <input type="email" className="form-control p-4" id="signup-email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="control-group">
                  <input type="password" className="form-control p-4" id="signup-password" placeholder="Password" required />
                </div>
                <div className="text-center mt-4">
                  <button className="btn btn-primary btn-block py-3 px-5" type="submit">Sign Up</button>
                </div>




              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
