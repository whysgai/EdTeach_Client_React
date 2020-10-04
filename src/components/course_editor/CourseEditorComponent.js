import React from "react";
import CourseModuleComponent from "./CourseModuleComponent";

const CourseEditorComponent = ({editorShowHide, modules, lessons, topics}) =>
    <div>
        <h1>Course Editor - Course Name</h1>
        <button onClick={editorShowHide}>Close</button>
        <div >
            <CourseModuleComponent
                modules={modules}
                lessons={lessons}
                topics={topics}
                className="row col-12 border"
            />

        </div>
    </div>

export default CourseEditorComponent
