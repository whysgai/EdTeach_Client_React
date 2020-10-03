import React from "react"
import CourseCardComponent from "./CourseCardComponent";

const CourseDeckComponent = () =>
    <div className="course-deck col-12">
        <h1>COURSE GRID HERE</h1>
        <div className="">
            <div className="btn-group" role="group" aria-label="Sort options">
                <button type="button" className="btn btn-light">Title <i className="fa fa-sort" aria-hidden="true"/></button>
                <button type="button" className="btn btn-light">Owner <i className="fa fa-sort" aria-hidden="true"/></button>
                <button type="button" className="btn btn-light">Modified <i className="fa fa-sort" aria-hidden="true"/></button>
            </div>
        </div>
        <div className="row">
            <CourseCardComponent/>
            <CourseCardComponent/>
        </div>

    </div>


export default CourseDeckComponent;