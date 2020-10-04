import React from "react";

const CourseEditorComponent = ({editorShowHide}) =>
    <div>
        <h1>Course Editor</h1>
        <button onClick={editorShowHide}>Close</button>
        <div className="row col-12 border">
            <div className="col-sm-4 border">
                <p>Course Name</p>
                <div className="border">
                    <p>List of modules goes here</p>
                </div>
            </div>
            <div className="col-sm-8 border">

                <div className="border">
                    <p>List of lessons</p>
                    <div className="border">
                        <p>List of topics</p>
                        <div className="border">
                            <p>Widget stuff</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default CourseEditorComponent
