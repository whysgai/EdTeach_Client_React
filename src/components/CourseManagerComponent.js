import React from "react";
import CourseTableComponent from "./CourseTableComponent";
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

const CourseManagerComponent = ({instructor, term}) =>
    // Implicit Return Syntax
    <div className="CourseManager">
        <form>
            <div className="form-group row bg-light">
                <label htmlFor="newcourse" className="col-sm-6">
                    <h1 className="title center-text bg-light wbdv-label wbdv-course-manager">{instructor}'s Course List - {term}</h1>
                </label>
                <div className="col-sm-5 title-align">
                    <input className="form-control btn-align-veritcal wbdv-field wbdv-new-course" id="newcourse" placeholder="Add a course"></input>
                </div>
                <div className="col-sm-1 title-align">
                    <a href="#" className="btn btn-primary btn-block wbdv-button wbdv-add-course">
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </form>
        <CourseTableComponent courses={courses}/>
        {/*<table className='table'>*/}
        {/*    <tr><td>Course 1</td></tr>*/}
        {/*    <tr><td>Course 2</td></tr>*/}
        {/*    <tr><td>Course 3</td></tr>*/}
        {/*    {*/}
        {/*        courses.map( (course, index) =>*/}
        {/*            <CourseRowComponent course={course}/>*/}
        {/*        )*/}
        {/*    }*/}
        {/*</table>*/}
    </div>


export default CourseManagerComponent;