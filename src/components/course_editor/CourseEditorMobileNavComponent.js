import React from "react";

const CourseEditorMobileNavComponent = () =>
    <form className="d-block d-sm-none pad-clear col-sm-8">
        <div className="form-group row">
            <label htmlFor="module" className="col-sm-2 col-form-label">Module</label>
            <div className="col-12">
                <select className="custom-select wbdv-field wbdv-role col-9" id="module">
                    <option value="Mod 1">Mod 1</option>
                    <option value="Mod 2">Mod 2</option>
                    <option value="Mod 3">Mod 3</option>
                </select>
                <button className="btn btn-primary col-2">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="module" className="col-sm-2 col-form-label">Lesson</label>
            <div className="col-12">
                <select className="custom-select wbdv-field wbdv-role col-9" id="module">
                    <option value="Lesson 1">Lesson 1</option>
                    <option value="Lesson 2">Lesson 2</option>
                    <option value="Lesson 3">Lesson 3</option>
                </select>
                <button className="btn btn-primary col-2">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="module" className="col-sm-2 col-form-label">Module</label>
            <div className="col-12">
                <select className="custom-select wbdv-field wbdv-role col-9" id="module">
                    <option value="Topic 1">Topic 1</option>
                    <option value="Topic 2">Topic 2</option>
                    <option value="Topic 3">Topic 3</option>
                </select>
                <button className="btn btn-primary col-2">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div className="form-group row">
            <!--                    <label class="col-sm-2 col-form-label"></label>-->
            <div className="col-sm-12">
                <!--<button class="btn btn-primary btn-block wbdv-login">Sign in</button>-->
                <a href="" className="btn btn-primary btn-block wbdv-login">Apply</a>
            </div>
        </div>
    </form>

export default CourseEditorMobileNavComponent;