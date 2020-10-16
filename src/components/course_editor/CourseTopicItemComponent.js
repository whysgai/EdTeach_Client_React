import React from "react";
import {Link} from "react-router-dom";

const CourseTopicItemComponent = ({course, moduleId, lessonId, topic, deleteTopic, editTopic, updateTopic, saveTopic}) =>
    <li className="nav-item mr-1 nav-link active wbdv-topic-pill">
        {
            !topic.editing &&
                <span>
                    <Link to={`/course_editor/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}>
                        <span className="text-white">{topic.title}</span>
                    </Link>
                    <a href="#" className="float-right text-white wbdv-lesson-item-edit-btn ml-2"
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
        {/*<a className="nav-link active wbdv-topic-pill" href="#">{topic.topicname}</a>*/}
    </li>


export default CourseTopicItemComponent