import React from "react";
import CourseEditorWidgetControlComponent from "./CourseEditorWidgetControlComponent";
import CourseEditorParagraphWidgetComponent from "./CourseEditorParagraphWidgetComponent";
import CourseEditorHeadingWidgetComponent from "./CourseEditorHeadingWidgetComponent";
import CourseEditorListWidgetComponent from "./CourseEditorListWidgetComponent";
import CourseEditorImageWidgetComponent from "./CourseEditorImageWidgetComponent";

const CourseEditorWidgetComponent = ({widget, topicId, createLocalWidget, updateLocalWidget, deleteLocalWidget, preview, sortWidgets, advanceWidget, regressWidget, lastWidget}) =>
        <form>
            {/*<h3>{widget.title} - <em>{widget.type}</em> - {widget.widgetOrder}</h3>*/}
            <div className="card bg-light mb-2">
                <div className="card-body pad-a-little">
                    <CourseEditorWidgetControlComponent
                        widget={widget}
                        preview={preview}
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
                    {
                        widget.type === 'LIST' &&
                        <CourseEditorListWidgetComponent
                            widget={widget}
                            updateLocalWidget={updateLocalWidget}
                            preview={preview}
                        />
                    }
                    {
                        widget.type === 'IMAGE' &&
                        <CourseEditorImageWidgetComponent
                            widget={widget}
                            updateLocalWidget={updateLocalWidget}
                            preview={preview}
                        />
                    }
                </div>
            </div>
        </form>



export default CourseEditorWidgetComponent
