import React from "react";

const CourseEditorWidgetComponent = ({widget}) =>
        <form>
            <h3>{widget.title} - <em>{widget.type}</em></h3>
            <div className="border border-med pad-a-little">
                <div className="">
                    <div className="form-inline form-group">
                        <select className="form-control col-6 col-sm-7 col-lg-8 col-xl-9">
                            <option>Widget Type 1</option>
                            <option>Widget Type 2</option>
                            <option>Widget Type 3</option>
                            <option>Widget Type 4</option>
                        </select>
                        <div className="col-6 col-sm-5 col-lg-4 col-xl-3">
                            <button type="button" className="btn btn-outline-dark">
                                <i className="fa fa-arrow-up" aria-hidden="true"/>
                            </button>
                            <button type="button" className="btn btn-outline-dark ml-2">
                                <i className="fa fa-arrow-down" aria-hidden="true"/>
                            </button>
                            <button type="button" className="btn btn-outline-danger ml-2">
                                <i className="fa fa-trash" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="form-group">
                        <input className="form-control wbdv-field wbdv-username" id="username"
                               placeholder="Heading test"/>
                    </div>
                    <div className="form-group">
                        <select className="form-control">
                            <option>Heading 1</option>
                            <option>Heading 2</option>
                            <option>Heading 3</option>
                            <option>Heading 4</option>
                            <option>Heading 5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input className="form-control wbdv-field wbdv-username" id="username"
                               placeholder="Widget name"/>
                    </div>
                    <div className="form-group">
                        <h4>Preview</h4>
                    </div>
                    <div className="form-group">
                        <h2>Heading Text</h2>
                    </div>

                </div>
            </div>
        </form>



export default CourseEditorWidgetComponent