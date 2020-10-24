import React from "react";

const CourseEditorWidgetControlComponent = ({widget}) =>
    <div className="form-inline form-group">
        <h2><em>{widget.type}</em></h2>
        <select className="form-control col-6 col-sm-7 col-lg-8 col-xl-9">
            <option>Heading</option>
            <option>Paragraph</option>
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


export default CourseEditorWidgetControlComponent
