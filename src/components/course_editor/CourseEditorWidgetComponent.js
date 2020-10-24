import React from "react";
import CourseEditorWidgetControlComponent from "./CourseEditorWidgetControlComponent";
import CourseEditorParagraphWidgetComponent from "./CourseEditorParagraphWidgetComponent";
import CourseEditorHeadingWidgetComponent from "./CourseEditorHeadingWidgetComponent";

const CourseEditorWidgetComponent = ({widget}) =>
        <form>
            <h3>{widget.title} - <em>{widget.type}</em></h3>
            <div className="border border-med pad-a-little">
                <CourseEditorWidgetControlComponent widget={widget}/>
                {
                    widget.type === 'HEADING' &&
                        <CourseEditorHeadingWidgetComponent widget={widget}/>
                }
                {
                    widget.type === 'PARAGRAPH' &&
                        <CourseEditorParagraphWidgetComponent widget={widget}/>
                }


            </div>
        </form>



export default CourseEditorWidgetComponent