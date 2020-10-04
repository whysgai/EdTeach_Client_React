import React from "react";
import CourseLessonItemComponent from "./CourseLessonItemComponent";

const CourseLessonComponent = ({lessons, topics}) =>
    <div>
        <ul className="marg-below nav nav-tabs wbdv-lesson-tabs d-none d-sm-flex">
            {
                lessons.map((lesson, index) =>
                    <CourseLessonItemComponent
                        lesson={lesson}
                    />
                )
            }
            <li className="nav-item">
                <a href="#" className="nav-link wbdv-lesson-add-btn">
                    <i className="fa fa-plus-circle" aria-hidden="true"/>
                </a>
            </li>
        </ul>
    </div>

export default CourseLessonComponent;