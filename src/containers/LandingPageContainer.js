import React from "react";
import {Link} from "react-router-dom";

class LandingPageContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Welcome to EdTeach</h1>
                        {/*Copy from Canvas (https://www.instructure.com/)*/}
                        <p className="lead">EdTEach is an open, extensible learning ecosystem for schools of all sizes.
                            With EdTeach, admins and educators can easily integrate the systems and apps they need to
                            support every student, at every stage, in any learning environment.</p>
                        <p>Etymology: Blackboard (the software) <i className="fa fa-arrow-right"
                                                                   aria-hidden="true"></i> Blackbeard (the pirate) a.k.a
                            Edward Teach <i className="fa fa-arrow-right" aria-hidden="true"></i> EdTeach </p>
                    </div>
                </div>
                <div className="row marg-below">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Log In</h5>
                                <p className="card-text">Log in with an existing account--logging in takes users to the
                                    course manager page, also links to the register page</p>
                                <a href="#" className="btn btn-primary">Log in</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Register</h5>
                                <p className="card-text">Create a new account--registering directs users to the profile
                                    page, also links to the login page</p>
                                <a href="#"
                                   className="btn btn-primary">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row marg-below">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Profile</h5>
                                <p className="card-text">View and update your profile</p>
                                <a href="#" className="btn btn-primary">See
                                    profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">User Administration</h5>
                                <p className="card-text">View and update user profiles</p>
                                <a href="#" className="btn btn-primary">View
                                    profile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row marg-below">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Course Editor</h5>
                                <p className="card-text">Edit the modules, topics, and lessons of a course using various
                                    widgets</p>
                                <a href="#" className="btn btn-primary">Edit
                                    courses</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Course Manager</h5>
                                <p className="card-text">View a list of courses and add new ones</p>
                                <Link to={`/course_manager/table`} className="btn btn-primary">Manage
                                    Courses</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPageContainer;