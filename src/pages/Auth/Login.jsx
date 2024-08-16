
import { Link } from "react-router-dom"

const LoginPage = () => {

    return <div className="main-wrapper">
        <div className="account-content">
            <div className="login-wrapper account-bg">
                <div className="login-content">
                    <form action="dashboard/sales-dashboard">
                        <div className="login-user-info">
                            <div className="login-logo">
                                <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
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
                                    <input type="password" className="pass-input form-control" />
                                    <span className="ti toggle-password ti-eye-off" />
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
                                    <Link to="forgot-password.html" className="forgot-link">Forgot Password?</Link>
                                </div>
                            </div>
                            <div className="form-wrap">
                                <button type="submit" className="btn btn-primary">Sign In</button>
                            </div>
                            <div className="login-form">
                                <h6>New on our platform?<Link to="/register" className="hover-a"> Create an account</Link></h6>
                            </div>
                            <div className="form-set-login or-text">
                                <h4>OR</h4>
                            </div>
                            <div className="login-social-link">
                                <ul className="nav">
                                    <li>
                                        <Link to="#" className="facebook-logo">
                                            <img src="assets/img/icons/facebook-logo.svg" alt="Facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img src="assets/img/icons/google-logo.svg" alt="Google" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="apple-logo">
                                            <img src="assets/img/icons/apple-logo.svg" alt="Apple" />
                                        </Link>
                                    </li>
                                </ul>
                                <div className="copyright-text">
                                    <p>Copyright ©2024 - CRMS</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

}



export default LoginPage