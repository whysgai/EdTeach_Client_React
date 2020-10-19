import React from "react";
import CourseTopicItemComponent from "./CourseTopicItemComponent";

const CourseTopicListComponent = ({course, topics, activetopic, topicId, activelesson, lessonId, activemodule, moduleId, createTopic, deleteTopic, editTopic, updateTopic, saveTopic, selectTopic}) =>
    <div>
        {/*<h3>Selected Module: {activemodule.title}</h3>*/}
        {/*<h3>Selected Lesson: {activelesson.title}</h3>*/}
        {/*<h3>Selected Topic: {activetopic.title}</h3>*/}
        <h3>Selected Module: {moduleId}</h3>
        <h3>Selected Lesson: {lessonId}</h3>
        <h3>Selected Topic: {topicId}</h3>
        <ul className="marg-below nav nav-pills wbdv-topic-pill-list d-none d-md-flex">
            {
                topics.map((topic, index) =>
                    <CourseTopicItemComponent
                        course={course}
                        topic={topic}
                        activetopic={activetopic}
                        topicId={topicId}
                        activelesson={activelesson}
                        lessonId={lessonId}
                        activemodule={activemodule}
                        moduleId={moduleId}
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


