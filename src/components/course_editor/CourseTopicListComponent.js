import React from "react";
import CourseTopicItemComponent from "./CourseTopicItemComponent";

const CourseTopicListComponent = ({course, topics, activetopic, activelesson, activemodule, createTopic, deleteTopic, editTopic, updateTopic, saveTopic, selectTopic}) =>
    <div>
        <h3>Selected Module: {activemodule.title}</h3>
        <h3>Selected Lesson: {activelesson.title}</h3>
        <h3>Selected Topic: {activetopic.title}</h3>
        <ul className="marg-below nav nav-pills wbdv-topic-pill-list d-none d-md-flex">
            {
                topics.map((topic, index) =>
                    <CourseTopicItemComponent
                        course={course}
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
                onClick={() => createTopic(activelesson._id, {title: "New Topic"})}>
                <a className="nav-link" href="#">Add Topic</a>
            </li>
        </ul>
    </div>

export default CourseTopicListComponent;


