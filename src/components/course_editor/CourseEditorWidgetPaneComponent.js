import React from "react";
import CourseEditorWidgetComponent from "./CourseEditorWidgetComponent";

const CourseEditorWidgetPaneComponent = ({course, topicId, lessonId, moduleId, widgets, createWidget, createLocalWidget, editWidget, editLocalWidget, saveWidget, saveLocalWidget, updateLocalWidget, deleteWidget, deleteLocalWidget}) =>
    <div>
        <button className="btn btn-primary btn-block btn-align-veritcal"
                onClick={() => createLocalWidget(topicId,
                    {
                        title: "NewWidget",
                        type: "PARAGRAPH",
                        topicId: topicId,
                    })}>
            Add Widget</button>
        {
            widgets.map((widget, index) =>
                <CourseEditorWidgetComponent
                    widget={widget}
                    topicId={topicId}
                    createLocalWidget={createLocalWidget}
                    updateLocalWidget={updateLocalWidget}
                    deleteLocalWidget={deleteLocalWidget}
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