import React from "react";

const CourseTopicItemComponent = ({topic, deleteTopic, editTopic, updateTopic, saveTopic}) =>
    <li className="nav-item mr-1 nav-link active wbdv-topic-pill">
        {
            !topic.editing &&
            <span>
                <span className="text-white">{topic.topicname}</span>
                <a href="#" className="float-right text-white wbdv-lesson-item-edit-btn ml-2"
                   onClick={() => editTopic(topic)}>
                    <i className="fa fa-pencil" aria-hidden="true"/>
                </a>
            </span>
        }
        {/*<a className="nav-link active wbdv-topic-pill" href="#">{topic.topicname}</a>*/}
    </li>


export default CourseTopicItemComponent