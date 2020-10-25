import React from "react";

const CourseEditorParagraphWidgetComponent = ({widget, updateLocalWidget}) =>

    <div className="">
        <div className="form-group">
            <input className="form-control wbdv-field" type="text"
                   placeholder="Widget name"/>
        </div>
        <div className="form-group">
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


export default CourseEditorParagraphWidgetComponent