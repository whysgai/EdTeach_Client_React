import React from "react";
import {Link} from "react-router-dom";

const CourseTopicItemComponent = ({course, topic, topicId, lessonId, moduleId, deleteTopic, editTopic, updateTopic, saveTopic,}) =>
    <li key={topic._id} className={`nav-item mr-1 nav-link wbdv-topic-pill ${topicId === topic._id? "active" : ""}`}>
        {
            !topic.editing &&
                <span>
                    <Link to={`/course_editor/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                        onClick={() => console.log(topicId, topic._id)}
                        >
                        <span className={`${topicId === topic._id? "text-white" : "text-primary"}`}>{topic.title}</span>
                    </Link>
                    <a href="#" className={`float-right wbdv-lesson-item-edit-btn ml-2 ${topicId === topic._id? "text-white" : "text-primary"}`}
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
                        <button className={`btn ${topicId === topic._id? "btn-outline-light" : "btn-outline-primary"}  wbdv-topic-item-delete-btn`}
                                type="button"
                                onClick={() => deleteTopic(topic)}>
                            <i className={`${topicId === topic._id? "text-white" : "text-primary"} fa fa-times-circle`} aria-hidden="true"/>
                        </button>
                        <button className={`btn ${topicId === topic._id? "btn-outline-light" : "btn-outline-primary"}  wbdv-topic-item-save-btn`}
                                type="button"
                                onClick={() => saveTopic(topic)}>
                            <i className={`${topicId === topic._id? "text-white" : "text-primary"} fa fa-check`} aria-hidden="true"/>
                        </button>
                    </div>
                </div>
        }
    </li>


export default CourseTopicItemComponent
