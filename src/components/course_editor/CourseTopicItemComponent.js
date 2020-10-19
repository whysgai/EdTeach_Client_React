import React from "react";
import {Link} from "react-router-dom";

const CourseTopicItemComponent = ({course, topic, activetopic, activelesson, activemodule, deleteTopic, editTopic, updateTopic, saveTopic, selectTopic}) =>
    <li key={topic._id} className={`nav-item mr-1 nav-link wbdv-topic-pill ${activetopic._id === topic._id? "active" : ""}`}>
        {
            !topic.editing &&
                <span>
                    <Link to={`/course_editor/${course._id}/modules/${activemodule._id}/lessons/${activelesson._id}/topics/${topic._id}`}
                        onClick={() => selectTopic(topic)}>
                        <span className={`${activetopic._id === topic._id? "text-white" : "text-primary"}`}>{topic.title}</span>
                    </Link>
                    <a href="#" className={`float-right wbdv-lesson-item-edit-btn ml-2 ${activetopic._id === topic._id? "text-white" : "text-primary"}`}
                       onClick={() => editTopic(topic)}>
                        <i className="fa fa-pencil" aria-hidden="true"/>
                    </a>
                </span>
        }
        {
            topic.editing &&
                <div className="input-group">
                    <input
                        className="form-control"
                        type="text"
                        value={topic.title}
                        onChange={(event) => updateTopic({
                            ...topic,
                            title: event.target.value
                        })}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-light wbdv-topic-item-delete-btn"
                                type="button"
                                onClick={() => deleteTopic(topic)}>
                            <i className="text-white fa fa-times-circle" aria-hidden="true"/>
                        </button>
                        <button className="btn btn-outline-light wbdv-topic-item-save-btn"
                                type="button"
                                onClick={() => saveTopic(topic)}>
                            <i className="text-white fa fa-check" aria-hidden="true"/>
                        </button>
                    </div>
                </div>
        }
    </li>


export default CourseTopicItemComponent