import React from "react";
import CourseEditorWidgetComponent from "./CourseEditorWidgetComponent";

const CourseEditorWidgetPaneComponent = ({course, topicId, lessonId, moduleId, widgets, createWidget, createLocalWidget, editWidget, editLocalWidget, saveWidget, saveLocalWidget, updateLocalWidget, deleteWidget, deleteLocalWidget, saveAllWidgets, previewWidgets, preview, sortWidgets, advanceWidget, regressWidget}) =>
    <div>
        <button className="btn btn-primary btn-block btn-align-veritcal"
                onClick={() => createLocalWidget(topicId,
                    {
                        id: new Date().getMilliseconds(),
                        title: "NewWidget",
                        type: "HEADING",
                        heading: "h1",
                        topicId: topicId,
                        widgetOrder: (widgets.length === 0 ? 0 : widgets[widgets.length - 1].widgetOrder + 1)
                    })}>
            Add Widget
        </button>
        {
            widgets.map((widget, index) =>
                <CourseEditorWidgetComponent
                    widget={widget}
                    topicId={topicId}
                    createLocalWidget={createLocalWidget}
                    updateLocalWidget={updateLocalWidget}
                    deleteLocalWidget={deleteLocalWidget}
                    sortWidgets={sortWidgets}
                    advanceWidget={advanceWidget}
                    regressWidget={regressWidget}
                    preview={preview}
                    lastWidget={widgets.length - 1}
                    key={widget.id}
                />
            )
        }
        <div className="float-right">
            <button className="btn btn-success"
                    onClick={() => saveAllWidgets(topicId, widgets)}>Save</button>
            {
                preview &&
                    <button className="btn btn-outline-info ml-1"
                            onClick={() => previewWidgets(false)}>
                        Preview
                    </button>
            }
            {
                !preview &&
                    <button className="btn btn-info ml-1"
                            onClick={() => previewWidgets(true)}>
                        Preview
                    </button>
            }

        </div>
    </div>


export default CourseEditorWidgetPaneComponent;
