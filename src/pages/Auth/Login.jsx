import React, { useState } from "react";
import ImageWithBasePath from "../../components/ImageWithBasePath";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../Router/all_routes";
import { toast } from "react-toastify";

const Login = () => {
  const route = all_routes;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isSelected, setIsSelected] = useState({
    admin: false,
    user: true
  });
  const navigate = useNavigate();

  console.log(email, password)

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    const apiUrl = import.meta.env.VITE_API_URL;
    // console.log(apiUrl);

    try {

      let staffType = 0

      if (isSelected?.admin === true) {
        staffType = 1
      }

      const response = await fetch(`${apiUrl}/staff/staffLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, staffType }),
      });

      const responseData = await response.json();

      if (responseData.status === "success") {
        // console.log("Login successful");

        // toast.success("Login successful");
        localStorage.setItem("token", responseData.data.Token);
        localStorage.setItem("profilePic", responseData.data.profilePic);
        localStorage.setItem("name", responseData.data.name);
        localStorage.setItem("type", responseData.data.type);
        localStorage.setItem("staffId", responseData.data.staffId);

        // Navigate to the next page
        // setToken(responseData.data.Token);
        navigate(route.salesDashboard);
      } else {
        throw new Error(responseData.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="account-content">
      <div className="login-wrapper account-bg">
        <div className="login-content">
          <form onSubmit={handleLogin}>
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
              {error && <div className="text-danger">{error}</div>}

              <div className="login_admin " >
                <div className="login_admin_img " onClick={() => {
                  setIsSelected({
                    admin: true,
                    user: false
                  })
                }}>
                  <img src="assets/img/authentication/admin.png" className={`  ${isSelected.admin === true ? "select_type" : "btn btn-help"}`} />
                  <p style={{ textAlign: 'center', color:`${isSelected.admin === true ? 'red' : ""}` }}>Admin</p>
                </div>
                <div className="login_admin_img " onClick={() => {
                  setIsSelected({
                    admin: false,
                    user: true
                  })
                }} >
                  <img src="assets/img/authentication/user.png" className={`  ${isSelected.user === true ? "select_type" : "btn btn-help"}`} />
                  <p style={{ textAlign: 'center', color:`${isSelected.user === true ? 'red' : ""}` }}>User</p>
                </div>
              </div>

              <div className="form-wrap">
                {/* <label className="col-form-label">Email Address</label> */}
                <div className="form-wrap-icon">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <i className="ti ti-mail" />
                </div>
              </div>
              <div className="form-wrap">
                {/* <label className="col-form-label">Password</label> */}
                <div className="pass-group">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    className="pass-input form-control"
                    placeholder="Password"
                    required
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
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
                    Reset Password?
                  </Link>
                </div>
              </div>

              <div className="form-wrap">
                <button type="submit" className="btn btn-primary" >
                  Sign In
                </button>
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