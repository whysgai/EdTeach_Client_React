import React from "react";
import CourseEditorWidgetComponent from "./CourseEditorWidgetComponent";

const CourseEditorWidgetPaneComponent = ({course, topicId, lessonId, moduleId, widgets, createWidget, editWidget, saveWidget, updateWidget, deleteWidget}) =>
    <div>
        <button className="btn btn-primary btn-block btn-align-veritcal">Add Widget</button>
        {
            widgets.map((widget, index) =>
                <CourseEditorWidgetComponent
                    widget={widget}
                    key={widget._id}
                />
            )
        }
        <div className="float-right">
            <button className="btn btn-success">Save</button>
            <button className="btn btn-outline-info ml-1">Preview</button>
        </div>
    </div>


export default CourseEditorWidgetPaneComponent;