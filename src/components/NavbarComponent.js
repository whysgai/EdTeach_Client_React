import React from "react"

const NavbarComponent = () =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="col-sm-1">
            <button className="nav-elem btn btn-dark wbdv-field wbdv-hamburger">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <a href="../index.html" className="nav-elem navbar-brand col-sm-10 center-text logo">EdTeach Logo</a>
        <div className="nav-elem col sm-1"></div>
    </nav>

export default NavbarComponent;