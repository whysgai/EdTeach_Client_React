import React from "react";
import CourseLessonItemComponent from "./CourseLessonItemComponent";

const CourseLessonListComponent = ({module, lessons=[], createLesson, deleteLesson, updateLesson, editLesson, saveLesson}) =>
    <div>
        <ul className="marg-below nav nav-tabs wbdv-lesson-tabs d-none d-md-flex">
            {
                lessons.map((lesson, index) =>
                    <CourseLessonItemComponent
                        module={module}
                        lesson={lesson}
                        deleteLesson={deleteLesson}
                        updateLesson={updateLesson}
                        editLesson={editLesson}
                        saveLesson={saveLesson}
                    />
                )
            }
            <li className="nav-item">
                <a href="#" className="nav-link wbdv-lesson-add-btn"
                   onClick={createLesson}>
                    <i className="fa fa-plus-circle" aria-hidden="true"/>
                </a>
            </li>
        </ul>
    </div>

export default CourseLessonListComponent;