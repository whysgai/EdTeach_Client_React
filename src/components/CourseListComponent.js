import React from "react";
import CourseRowComponent from "./CourseRowComponent";


const courses = [
    {
        _id: "001",
        title: "CS5500",
        owner: "me",
        lastOpened: "yesterday"
    },
    {
        _id: "002",
        title: "CS5800",
        owner: "me",
        lastOpened: "yesterday"
    },
    {
        _id: "003",
        title: "CS5610",
        owner: "me",
        lastOpened: "yesterday"
    },
    {
        _id: "004",
        title: "CS4560",
        owner: "me",
        lastOpened: "yesterday"
    }
]

const CourseListComponent = ({instructor, term}) =>
    // Implicit Return Syntax
    <div>
        <h1>{instructor}'s Course List - {term}</h1>
        <table className='table'>
            <tr><td>Course 1</td></tr>
            <tr><td>Course 2</td></tr>
            <tr><td>Course 3</td></tr>
            {
                courses.map( (course, index) =>
                    <CourseRowComponent course={course}/>
                )
            }
        </table>
    </div>


export default CourseListComponent;