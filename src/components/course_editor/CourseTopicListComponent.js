import React from "react";
import CourseTopicItemComponent from "./CourseTopicItemComponent";
import CourseLessonItemComponent from "./CourseLessonItemComponent";

const CourseTopicListComponent = ({topics=[], createTopic, deleteTopic, editTopic, updateTopic, saveTopic}) =>
    <div>
        <ul className="marg-below nav nav-pills wbdv-topic-pill-list d-none d-md-flex">
            {
                topics.map((topic, index) =>
                    <CourseTopicItemComponent
                        lesson={lesson}
                        topic={topic}
                        deleteTopic={deleteTopic}
                        updateTopic={updateTopic}
                        editTopic={editTopic}
                        saveTopic={saveTopic}
                    />
                )
            }
            <li className="nav-item wbdv-topic-add-btn"
                onClick={createTopic}>
                <a className="nav-link" href="#">Add Topic</a>
            </li>
        </ul>
    </div>

export default CourseTopicListComponent;


