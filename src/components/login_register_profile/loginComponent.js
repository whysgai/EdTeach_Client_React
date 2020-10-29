import React from "react";
import {Link} from "react-router-dom";

const loginComponent = () =>
    <div>
        <h1 className="title center-text">Sign In</h1>
        <form>
            <div className="form-group row">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username" id="username" placeholder="username/email"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control wbdv-field wbdv-password" id="password"
                           placeholder="123abc#$%XYZ"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <Link to="/course_manager"
                       className="btn btn-primary btn-block wbdv-login">Log In</Link>
                    <div className="row">
                        <div className="col-6">
                            <Link to="#" className="wbdv-link wbdv-forgot-password">Forgot Password?</Link>
                        </div>
                        <div className="col-6">
                            <Link to="/register"
                               className="float-right wbdv-link wbdv-register">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

export default loginComponent