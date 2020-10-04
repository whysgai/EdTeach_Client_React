import React from "react";

const CourseEditorWidget = () =>
    <div>
        <button className="col-sm-12 btn btn-primary">Add Widget</button>
        <form>
            <div className="border border-med pad-a-little">
                <div className="">
                    <h3>Widget 1</h3>
                    <div className="form-inline">
                        <select className="form-control col-sm-9">
                            <option>Widget Type 1</option>
                            <option>Widget Type 2</option>
                            <option>Widget Type 3</option>
                            <option>Widget Type 4</option>
                        </select>
                        <div className="col-sm-3 pull-right">
                            <button type="button" className="btn btn-warning">
                                <i className="fa fa-arrow-up" aria-hidden="true"/>
                            </button>
                            <button type="button" className="btn btn-warning">
                                <i className="fa fa-arrow-down" aria-hidden="true"/>
                            </button>
                            <button type="button" className="btn btn-danger">
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
            <div className="pull-right">
                <button className="btn btn-success">Save</button>
                <button className="btn btn-outline-info">Preview</button>
            </div>
        </form>
    </div>


export default CourseEditorWidget