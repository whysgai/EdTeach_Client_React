import React from "react";

const CourseRowComponent = ({course, deleteCourse, renameCourse, courseBeingRenamed, captureRenamedCourseTitle, saveRenamedCourseTitle}) =>
    <tr className="course wbdv-row wbdv-course d-table-row">
        <td className="wbdv-row wbdv-icon d-table-cell">
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
        </td>
        <td className="wbdv-row wbdv-title d-table-cell">
            {
                course !== courseBeingRenamed &&
                    <a className="font-black" href="#">{course.title}</a>
            }
            {
                course === courseBeingRenamed &&
                    <input type="text" className="form-control" defaultValue={course.title} onChange={captureRenamedCourseTitle}/>
            }
        </td>
        <td className="wbdv-row wbdv-owner"><span className="d-none d-sm-table-cell">{course.owner}</span></td>
        <td className="wbdv-row wbdv-modified-date d-none d-md-table-cell">
            <time className="" dateTime="2008-02-14 20:00">{course.modified}</time>
        </td>
        <td className="d-table-cell">
            {
                course !== courseBeingRenamed &&
                    <div>
                        <a className="wbdv-button wbdv-rename" onClick={ () => renameCourse(course)} href="#"><i className="font-black fa fa-pencil" aria-hidden="true"/></a>
                        <a className="wbdv-button wbdv-delete" onClick={ () => deleteCourse(course)} href="#"><i className="font-black fa fa-trash" aria-hidden="true"/></a>
                    </div>
            }
            {
                course === courseBeingRenamed &&
                    <div>
                        <a className="wbdv-button wbdv-save" onClick={ () => saveRenamedCourseTitle(course)} href="#"><i className="font-black fa fa-check-circle" aria-hidden="true"></i></a>
                    </div>
            }

        </td>
    </tr>

export default CourseRowComponent;

