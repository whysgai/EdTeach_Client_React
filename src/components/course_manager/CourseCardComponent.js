import React from "react";

const CourseCardComponent = ({course, deleteCourse, renameCourse, courseBeingRenamed, captureRenamedCourseTitle, saveRenamedCourseTitle}) =>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card">
            <div className="card-body">
                {
                    course !== courseBeingRenamed &&
                        <a className="font-black" href="#"><h5 className="card-title">{course.title}</h5></a>
                }
                {
                    course === courseBeingRenamed &&
                        <input type="text" className="form-control" defaultValue={course.title} onChange={captureRenamedCourseTitle}/>
                }

                <h6 className="card-subtitle mb-2 text-muted">{course.owner}</h6>
                <p className="card-text">{course.modified}</p>
                {
                    course !== courseBeingRenamed &&
                        <div>
                            <button className="btn btn-primary wbdv-button wbdv-rename" onClick={ () => renameCourse(course)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <button className="btn btn-danger wbdv-button wbdv-delete" onClick={ () => deleteCourse(course)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                }
                {
                    course === courseBeingRenamed &&
                        <div>
                            <button className="btn btn-success wbdv-button wbdv-save" onClick={ () => saveRenamedCourseTitle(course)}><i className="fa fa-check-circle" aria-hidden="true"></i></button>
                        </div>
                }

            </div>
        </div>
    </div>

export default CourseCardComponent