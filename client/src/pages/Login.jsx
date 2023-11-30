import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';



  


export default function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
          <Link to="/signup">← Go to Signup</Link>
            <h1 className="section-title position-relative text-center mb-5">Sign Up / Log In</h1>
          </div>
        </div>
        <div className="row justify-content-center">

          {/* Log In Card */}
          <div className="col-lg-4">
            <div className="bg-light rounded p-5">
              <h2 className="text-center mb-4">Shopped with us before?</h2>
              <h4 className="text-center mb-4">Log In Below</h4>
              <form name="sentMessage" id="contactForm" noValidate>
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
              </form>
            </div>
          </div>

          {/* Sign Up Card */}
          <div className="col-lg-4">
            <div className="bg-light rounded p-5">
              <h2 className="text-center mb-4">Don't Have an Account?</h2>
              <h4 className="text-center mb-4">Sign Up Below</h4>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="form-row">
                  <div className="col-sm-6 control-group">
                    <input type="text" className="form-control p-4" id="signup-name" placeholder="Name" required />
                  </div>
                  <div className="col-sm-6 control-group">
                    <input type="email" className="form-control p-4" id="signup-email" placeholder="Email" required />
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
