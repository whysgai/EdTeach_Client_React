import React from "react";
import CourseEditorWidgetComponent from "./CourseEditorWidgetComponent";

const CourseEditorWidgetPaneComponent = ({widgets}) =>
    <div>
        <button className="btn btn-primary btn-block btn-align-veritcal">Add Widget</button>
        {
            widgets.map((widget, index) =>
                <CourseEditorWidgetComponent
                    widget={{widget}}
                />
            )
        }
        <div className="float-right">
            <button className="btn btn-success">Save</button>
            <button className="btn btn-outline-info ml-1">Preview</button>
        </div>
    </div>


export default CourseEditorWidgetPaneComponent;