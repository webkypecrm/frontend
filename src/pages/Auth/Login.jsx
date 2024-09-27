import React, { useState } from "react";
import ImageWithBasePath from "../../components/ImageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../Router/all_routes";

const Login = () => {
  const route = all_routes;
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  return (
    <div className="account-content">
      <div className="login-wrapper account-bg">
        <div className="login-content">
          <form>
            <div className="login-user-info">
              <div className="login-logo">
                <img                  
                  src="/assets/img/webkype_img.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="login-heading">
                <h4>Sign In</h4>
                <p>Access the CRMS panel using your email and passcode.</p>
              </div>
              <div className="form-wrap">
                <label className="col-form-label">Email Address</label>
                <div className="form-wrap-icon">
                  <input type="text" className="form-control" />
                  <i className="ti ti-mail" />
                </div>
              </div>
              <div className="form-wrap">
                <label className="col-form-label">Password</label>
                <div className="pass-group">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    className="pass-input form-control"
                  />
                  <span
                    className={`ti toggle-password ${isPasswordVisible ? "ti-eye" : "ti-eye-off"
                      }`}
                    onClick={togglePasswordVisibility}
                  ></span>
                </div>
              </div>
              <div className="form-wrap form-wrap-checkbox">
                <div className="custom-control custom-checkbox">
                  <label className="check">
                    <input type="checkbox" />
                    <span className="box" /> Remember Me
                  </label>
                </div>
                <div className="text-end">
                  <Link to={route.forgotPassword} className="forgot-link">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="form-wrap">
                <Link to={route.salesDashboard} className="btn btn-primary">
                  Sign In
                </Link>
              </div>
              <div className="login-form">
                <h6>
                  New on our platform?
                  <Link to={route.register} className="hover-a">
                    {" "}
                    Create an account
                  </Link>
                </h6>
              </div>
              {/* <div className="form-set-login or-text">
                <h4>OR</h4>
              </div> */}
              <div className="login-social-link">
                <ul className="nav" style={{ visibility: "hidden" }}>
                  <li>
                    <Link to="#" className="facebook-logo">
                      <ImageWithBasePath
                        src="assets/img/icons/facebook-logo.svg"
                        alt="Facebook"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/icons/google-logo.svg"
                        alt="Google"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="apple-logo">
                      <ImageWithBasePath
                        src="assets/img/icons/apple-logo.svg"
                        alt="Apple"
                      />
                    </Link>
                  </li>
                </ul>
                <div className="copyright-text">
                  <p>Copyright ©2024 - WEBKYPE</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
