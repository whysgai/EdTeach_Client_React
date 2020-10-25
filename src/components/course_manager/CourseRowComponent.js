import React from "react";
import {Link} from "react-router-dom";

// className = {`$courseBeingEditied === course? "table-active" : ""}`}
const CourseRowComponent = ({course, deleteCourse, renameCourse, courseBeingRenamed, captureRenamedCourseTitle, saveRenamedCourseTitle}) =>
    <tr className={`course wbdv-row wbdv-course d-table-row ${courseBeingRenamed === course? "bg-primary" : ""}`}>
        <td className="wbdv-row wbdv-icon d-table-cell">
            <i className={`fa fa-lg fa-file-text-o ${courseBeingRenamed === course? "text-white" : "text-info"}`} aria-hidden="true"></i>
        </td>
        <td className="wbdv-row wbdv-title d-table-cell">
            {
                course !== courseBeingRenamed &&
                    <Link className="font-black" to={`/course_editor/${course._id}`} >{course.title}</Link>
            }
            {
                course === courseBeingRenamed &&
                    <input type="text" className="form-control" defaultValue={course.title} onChange={captureRenamedCourseTitle}/>
            }
        </td>
        <td className="wbdv-row wbdv-owner d-none d-sm-table-cell"><span className="">{course.owner}</span></td>
        <td className="wbdv-row wbdv-modified-date d-none d-md-table-cell">
            <time className="" dateTime="2008-02-14 20:00">{course.modified}</time>
        </td>
        <td className="d-table-cell">
            {
                course !== courseBeingRenamed &&
                    <div className="float-right">
                        <a className="wbdv-button wbdv-rename pad-a-little" onClick={ () => renameCourse(course)} href="#"><i className="font-black fa fa-lg fa-pencil" aria-hidden="true"/></a>
                        <a className="wbdv-button wbdv-delete pad-a-little" onClick={ () => deleteCourse(course)} href="#"><i className="font-black fa fa-lg fa-trash" aria-hidden="true"/></a>
                    </div>
            }
            {
                course === courseBeingRenamed &&
                    <div className="float-right">
                        <a className="wbdv-button wbdv-save" onClick={ () => saveRenamedCourseTitle(course)} href="#"><i className="font-white fa fa-lg fa-check-circle" aria-hidden="true"></i></a>
                    </div>
            }
        </td>
    </tr>

export default CourseRowComponent;

