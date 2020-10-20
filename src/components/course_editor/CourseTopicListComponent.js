import React from "react";
import CourseTopicItemComponent from "./CourseTopicItemComponent";

const CourseTopicListComponent = ({course, topics, activetopic, topicId, activelesson, lessonId, activemodule, moduleId, createTopic, deleteTopic, editTopic, updateTopic, saveTopic, selectTopic}) =>
    <div>
        <ul className="marg-below nav nav-pills wbdv-topic-pill-list d-none d-md-flex">
            {
                topics.map((topic, index) =>
                    <CourseTopicItemComponent
                        course={course}
                        topic={topic}
                        topicId={topicId}
                        lessonId={lessonId}
                        moduleId={moduleId}
                        deleteTopic={deleteTopic}
                        updateTopic={updateTopic}
                        editTopic={editTopic}
                        saveTopic={saveTopic}
                    />
                )
            }
            <li className="nav-item wbdv-topic-add-btn"
                onClick={() => createTopic(lessonId, {title: "New Topic"})}>
                <a className="nav-link" href="#">Add Topic</a>
            </li>
        </ul>
    </div>

export default CourseTopicListComponent;


