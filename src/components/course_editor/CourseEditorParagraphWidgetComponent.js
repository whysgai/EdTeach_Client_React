import React from "react";

const CourseEditorParagraphWidgetComponent = ({widget}) =>
    <div className="border border-med pad-a-little">

        <div className="form-inline form-group">
            <h2><em>Paragraph Widget</em></h2>
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
        <div className="">
            <div className="form-group">
                <input className="form-control wbdv-field" type="text"
                       placeholder="Widget name"/>
            </div>
            <div className="form-group col-12">
                <textarea className="form-control wbdv-field"
                       placeholder="Text"/>
            </div>
            <div className="form-group">
                <h4>Preview</h4>
            </div>
            <div className="form-group">
                <h2>Heading Text</h2>
            </div>

        </div>
    </div>

export default CourseEditorParagraphWidgetComponent