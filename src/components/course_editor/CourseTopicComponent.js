import React from "react";
import CourseTopicItemComponent from "./CourseTopicItemComponent";
import CourseLessonItemComponent from "./CourseLessonItemComponent";

const CourseTopicComponent = ({topics}) =>
    <div>
        <ul className="marg-below nav nav-pills wbdv-topic-pill-list d-none d-sm-flex">
            {
                topics.map((topic, index) =>
                    <CourseTopicItemComponent
                        topic={topic}
                    />
                )
            }
            <li className="nav-item wbdv-topic-add-btn">
                <a className="nav-link" href="#">Add Topic</a>
            </li>
        </ul>
    </div>

export default CourseTopicComponent;