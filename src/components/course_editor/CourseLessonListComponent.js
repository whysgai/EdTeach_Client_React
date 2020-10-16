import React from "react";
import CourseLessonItemComponent from "./CourseLessonItemComponent";

const CourseLessonListComponent = ({course, courseId, moduleId, lessons, createLesson, deleteLesson, updateLesson, editLesson, saveLesson}) =>
    <div>
        <ul className="marg-below nav nav-tabs wbdv-lesson-tabs d-none d-md-flex">
        <h3>{course.title}</h3>
        <h3>{courseId}</h3>
            {
                lessons.map((lesson, index) =>
                    <CourseLessonItemComponent
                        course={course}
                        courseId={courseId}
                        moduleId={moduleId}
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
                   onClick={() => createLesson(moduleId, {title: "New Lesson"})}>
                    <i className="fa fa-plus-circle" aria-hidden="true"/>
                </a>
            </li>
        </ul>
    </div>

export default CourseLessonListComponent;