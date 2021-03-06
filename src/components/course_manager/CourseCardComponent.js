import React from "react";
import {Link} from "react-router-dom";

const CourseCardComponent = ({course, deleteCourse, renameCourse, courseBeingRenamed, captureRenamedCourseTitle, saveRenamedCourseTitle, editorShowHide}) =>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pad-a-little">
        <div className="card">
            <div className="card-body">
                {
                    course !== courseBeingRenamed &&
                        <Link className="font-black" to={`/course_editor/${course._id}`}><h5 className="card-title">{course.title}</h5></Link>
                }
                {
                    course === courseBeingRenamed &&
                        <input type="text" className="form-control" defaultValue={course.title} onChange={captureRenamedCourseTitle}/>
                }

                <h6 className="card-subtitle mb-2 text-muted">{course.owner}</h6>
                <p className="card-text">{course.modified}</p>
                <p className="card-text">Summary of course? List of modules?</p>
                {
                    course !== courseBeingRenamed &&
                        <div>
                            <button className="btn btn-primary btn-block wbdv-button wbdv-rename" onClick={ () => renameCourse(course)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <button className="btn btn-danger btn-block wbdv-button wbdv-delete" onClick={ () => deleteCourse(course)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                }
                {
                    course === courseBeingRenamed &&
                        <div>
                            <button className="btn btn-success btn-block wbdv-button wbdv-save" onClick={ () => saveRenamedCourseTitle(course)}><i className="fa fa-check-circle" aria-hidden="true"></i></button>
                        </div>
                }

            </div>
        </div>
    </div>

export default CourseCardComponent