import React from "react";
import CourseTopicItemComponent from "./CourseTopicItemComponent";

const CourseTopicListComponent = ({course, courseId, moduleId, lessonId, topics, activetopic, activelesson, activemodule, createTopic, deleteTopic, editTopic, updateTopic, saveTopic, selectTopic}) =>
    <div>
        <ul className="marg-below nav nav-pills wbdv-topic-pill-list d-none d-md-flex">
            {
                topics.map((topic, index) =>
                    <CourseTopicItemComponent
                        course={course}
                        courseId={courseId}
                        moduleId={moduleId}
                        lessonId={lessonId}
                        topic={topic}
                        activetopic={activetopic}
                        activelesson={activelesson}
                        activemodule={activemodule}
                        deleteTopic={deleteTopic}
                        updateTopic={updateTopic}
                        editTopic={editTopic}
                        saveTopic={saveTopic}
                        selectTopic={selectTopic}
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


