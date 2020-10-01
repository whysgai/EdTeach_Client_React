import React from "react";

const CourseRowComponent = ({course}) =>
    <tr>
        <td>{course.title}</td>
        <td>{course.owner}</td>
        <td>{course.lastOpened}</td>
        <td>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-outline-primary">Edit</button>
        </td>
    </tr>

export default CourseRowComponent;

