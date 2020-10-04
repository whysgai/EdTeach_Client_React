import React from "react";

const CourseTopicItemComponent = ({topic}) =>
    <li className="nav-item">
        <a className="nav-link active wbdv-topic-pill" href="#">{topic.topicname}</a>
    </li>


export default CourseTopicItemComponent