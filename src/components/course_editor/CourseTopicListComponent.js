import React from "react";
import CourseTopicItemComponent from "./CourseTopicItemComponent";

const CourseTopicListComponent = ({topics}) =>
    <div>
        <ul className="marg-below nav nav-pills wbdv-topic-pill-list d-none d-md-flex">
            {
                this.state.topics.map((topic, index) =>
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

export default CourseTopicListComponent;


