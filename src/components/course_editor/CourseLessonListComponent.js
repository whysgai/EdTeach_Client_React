import React from "react";
import CourseLessonItemComponent from "./CourseLessonItemComponent";

const CourseLessonListComponent = ({course, courseId, moduleId, lessons, activelesson, activemodule, createLesson, deleteLesson, updateLesson, editLesson, saveLesson, selectLesson}) =>
    <div>
        <h3>Module: {activemodule.title}</h3>
        <h3>Lesson: {activelesson.title}</h3>
        <ul className="marg-below nav nav-tabs wbdv-lesson-tabs d-none d-md-flex">
            {
                lessons.map((lesson, index) =>
                    <CourseLessonItemComponent
                        course={course}
                        courseId={courseId}
                        moduleId={moduleId}
                        lesson={lesson}
                        activelesson={activelesson}
                        activemodule={activemodule}
                        deleteLesson={deleteLesson}
                        updateLesson={updateLesson}
                        editLesson={editLesson}
                        saveLesson={saveLesson}
                        selectLesson={selectLesson}
                    />
                )
            }
            <li className="nav-item">
                <a href="#" className="nav-link wbdv-lesson-add-btn"
                   onClick={() => createLesson(moduleId, {title: "New Lesson"})}>
                    <i className="fa fa-plus-circle" aria-hidden="true"/>
                </a>
            </li>
        </ul>
    </div>

export default CourseLessonListComponent;