import React from "react";

const CourseEditorWidgetControlComponent = ({widget, deleteLocalWidget, updateLocalWidget}) =>
    <div className="form-inline form-group">
        <select className="form-control col-6 col-sm-7 col-lg-8 col-xl-9" defaultValue={widget.type}>
            <option value="HEADING">Heading</option>
            <option value="PARAGRAPH">Paragraph</option>
            <option value="LIST">List</option>
            <option value="IMAGE">Image</option>
            <option value="HYPERLINK">Hyperlink</option>
            <option value="VIDEO">Video</option>
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
