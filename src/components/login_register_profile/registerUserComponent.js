import React from "react";
import {Link} from "react-router-dom";

const registerUserComponent = () =>
    <div>
        <h1 className="title center-text">Register</h1>
        <form>
            <div className="form-group row">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username" id="username" placeholder="username"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input className="form-control" id="email" placeholder="lane@dailyplanet.com"/>
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
                <label htmlFor="password-conf" className="col-sm-2 col-form-label">Confirm Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control wbdv-field wbdv-password-verify" id="password-conf"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <Link to="/profile"
                       className="btn btn-primary btn-block wbdv-register">Register</Link>
                    <div className="row">
                        <div className="col-6">
                            <Link to="/" className="wbdv-button wbdv-register">Cancel</Link>
                        </div>
                        <div className="col-6">
                            <Link to="/login" className="float-right wbdv-link wbdv-login">Log
                                in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

export default registerUserComponent