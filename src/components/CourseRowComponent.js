import React from "react";

const CourseRowComponent = ({course, deleteCourse, renameCourse, courseBeingRenamed}) =>
    <tr className="course wbdv-row wbdv-course">
        <td className="wbdv-row wbdv-icon">
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
        </td>
        <td className="wbdv-row wbdv-title">
            <!--If not being renamed, display course title-->
            {
                course !== courseBeingRenamed &&
                    <a href="../course_editor/editor.template.client.html" className="font-black">{course.title}</a>}
            }
            <!--If being renamed, display input field-->
            {
                course === courseBeingRenamed &&
                    <input className="form-control" value={course.title}/>
            }
        </td>
        <td className="wbdv-row wbdv-owner"><span className="d-none d-sm-table-cell">{course.owner}</span></td>
        <td className="wbdv-row wbdv-modified-date d-none d-md-table-cell">
            <time className="d-none d-sm-table-cell" dateTime="2008-02-14 20:00">{course.modified}</time>
        </td>
        <td className="">
            <!--If not being renamed, display delete and rename buttons-->
            {
                course !== courseBeingRenamed &&
                    <div>
                        <a className="wbdv-button wbdv-rename" href="#"><i className="font-black fa fa-pencil" aria-hidden="true"></i></a>
                        <a className="wbdv-button wbdv-delete" onClick={ () => deleteCourse(course)} href="#"><i className="font-black fa fa-trash" aria-hidden="true"></i></a>
                    </div>
            }
            <!--If being renamed, display save button-->
            {
                course === courseBeingRenamed &&
                    <div>
                        <a className="wbdv-button wbdv-save hide" href="#"><i className="font-black fa fa-check-circle" aria-hidden="true"></i></a>
                    </div>
            }

        </td>
    </tr>

export default CourseRowComponent;

