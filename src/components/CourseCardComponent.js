import React from "react";

const CourseCardComponent = ({course, deleteCourse, renameCourse, courseBeingRenamed, captureRenamedCourseTitle, saveRenamedCourseTitle}) =>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{course.owner}</h6>
                <p className="card-text">Last modified: {course.modified}</p>
                <button className="btn btn-primary wbdv-button wbdv-rename" onClick={ () => renameCourse(course)} href="#"><i className="fa fa-pencil" aria-hidden="true"></i></button>

            </div>
        </div>
    </div>

export default CourseCardComponent