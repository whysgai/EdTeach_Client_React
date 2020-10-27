import React from "react";
import CourseEditorWidgetControlComponent from "./CourseEditorWidgetControlComponent";
import CourseEditorParagraphWidgetComponent from "./CourseEditorParagraphWidgetComponent";
import CourseEditorHeadingWidgetComponent from "./CourseEditorHeadingWidgetComponent";

const CourseEditorWidgetComponent = ({widget, topicId, createLocalWidget, updateLocalWidget, deleteLocalWidget, preview, sortWidgets, advanceWidget, regressWidget, lastWidget}) =>
        <form>
            <h3>{widget.title} - <em>{widget.type}</em></h3>
            <div className="border border-med pad-a-little">
                <CourseEditorWidgetControlComponent
                    widget={widget}
                    updateLocalWidget={updateLocalWidget}
                    deleteLocalWidget={deleteLocalWidget}
                    sortWidgets={sortWidgets}
                    advanceWidget={advanceWidget}
                    regressWidget={regressWidget}
                    lastWidget={lastWidget}
                />
                {
                    widget.type === 'HEADING' &&
                        <CourseEditorHeadingWidgetComponent
                            widget={widget}
                            updateLocalWidget={updateLocalWidget}
                            preview={preview}
                        />
                }
                {
                    widget.type === 'PARAGRAPH' &&
                        <CourseEditorParagraphWidgetComponent
                            widget={widget}
                            updateLocalWidget={updateLocalWidget}
                            preview={preview}
                        />
                }
            </div>
        </form>



export default CourseEditorWidgetComponent