import React from "react";

const profileComponent = () =>
    <div>
        <h1 className="title center-text">Profile</h1>
        <div className="wbdv-message">
            <div className="alert alert-success col-sm-12" role="alert">
                Profile saved
            </div>
            <div className="alert alert-danger col-sm-12" role="alert">
                Profile not saved
            </div>
        </div>
        <form>
            <div className="form-group row">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username" id="username" placeholder="username"
                           readOnly="readonly"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-phone" id="phone" placeholder="(123) 867-5309"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input className="form-control" id="email" placeholder="lane@dailyplanet.com"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="role" className="col-sm-2 col-form-label">Role</label>
                <div className="col-sm-10">
                    <select className="custom-select wbdv-field wbdv-role" id="role">
                        <option value="Faculty">Faculty</option>
                        <option value="Student">Student</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="birthdate" className="col-sm-2 col-form-label">Date of Birth</label>
                <div className="col-sm-10">
                    <input type="date" className="form-control wbdv-field wbdv-dob" id="birthdate"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <!--<button class="btn btn-primary btn-block wbdv-button wbdv-update">Update</button>-->
                    <a href="../profile/profile.template.client.html"
                       className="btn btn-outline-success btn-block wbdv-button wbdv-update">Update</a>
                    <!--<button class="btn btn-primary btn-block wbdv-button wbdv-logout">Logout</button>-->
                    <a href="../index.html"
                       className="btn btn-outline-danger btn-block wbdv-button wbdv-logout">Logout</a>
                    <div className="row">
                        <div className="alertFld wbdv-message"></div>
                    </div>
                </div>
            </div>
        </form>
    </div>

export default profileComponent