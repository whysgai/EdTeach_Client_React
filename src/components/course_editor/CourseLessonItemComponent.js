import React from "react";

const CourseLessonItemComponent = ({lesson, deleteLesson, updateLesson, editLesson, saveLesson}) =>
    <li className="nav-item nav-link">
        {
            !lesson.editing &&
            <span>
            <span className="text-primary">{lesson.lessonname}</span>
            <a href="#" className="float-right text-primary wbdv-lesson-item-edit-btn ml-2"
               onClick={() => editLesson(lesson)}>
                    <i className="fa fa-pencil" aria-hidden="true"/>
                </a>
            </span>
        }
        {
            lesson.editing &&
            <span>
                <input value={lesson.lessonname}
                       onChange={(event) => updateLesson({
                           ...lesson,
                           lessonname: event.target.value
                       })}
                />
                <a href="#" className="float-right text-primary wbdv-lesson-item-delete-btn"
                   onClick={() => deleteLesson(lesson)}>
                    <i className="fa fa-times-circle" aria-hidden="true"/>
                </a>
                <a href="#" className="float-right text-primary wbdv-lesson-item-save-btn"
                   onClick={() => saveLesson(lesson)}>
                    <i className="fa fa-check" aria-hidden="true"/>
                </a>
            </span>
        }
    </li>

export default CourseLessonItemComponent