import React from "react";

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
                <!--                    <label class="col-sm-2 col-form-label"></label>-->
                <div className="col-sm-12">
                    <!--<button class="btn btn-primary btn-block wbdv-login">Sign in</button>-->
                    <a href="../course_manager/coursemanager.template.client.html"
                       className="btn btn-primary btn-block wbdv-login">Log In</a>
                    <div className="row">
                        <div className="col-6">
                            <a href="#" className="wbdv-link wbdv-forgot-password">Forgot Password?</a>
                        </div>
                        <div className="col-6">
                            <a href="../register/register.template.client.html"
                               className="float-right wbdv-link wbdv-register">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

export default loginComponent