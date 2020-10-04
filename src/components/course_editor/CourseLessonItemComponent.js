import React from "react";

const CourseLessonItemComponent = ({lesson}) =>
    <li className="nav-item">
        <a className="nav-link" href="#">{lesson.lessonname}</a>
    </li>

export default CourseLessonItemComponent