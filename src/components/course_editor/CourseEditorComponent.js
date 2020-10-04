import React from "react";
import CourseModuleComponent from "./CourseModuleComponent";

const CourseEditorComponent = ({editorShowHide, modules, lessons, topics}) =>
    <div>
        <div className="row">
            <h1 className="col-11">Course Editor - Course Name</h1>
            <button className="btn btn-outline-dark" onClick={editorShowHide}>
                <i className="fa fa-times-circle-o" aria-hidden="true"/>
            </button>
        </div>

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
