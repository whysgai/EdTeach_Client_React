import React from "react";

const CourseRowComponent = ({course}) =>
    // <tr>
    //     <td>{course.title}</td>
    //     <td>{course.owner}</td>
    //     <td>{course.lastOpened}</td>
    //     <td>
    //         <button className="btn btn-danger">Delete</button>
    //         <button className="btn btn-outline-primary">Edit</button>
    //     </td>
    // </tr>
    <tr className="course wbdv-row wbdv-course">
        <td className="wbdv-row wbdv-icon">
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
        </td>
        <td className="wbdv-row wbdv-title">
            <a href="../course_editor/editor.template.client.html" className="font-black">{course.title}</a>
        </td>
        <td className="wbdv-row wbdv-owner"><span className="d-none d-sm-table-cell">{course.owner}</span></td>
        <td className="wbdv-row wbdv-modified-date d-none d-md-table-cell">
            <time className="d-none d-sm-table-cell" dateTime="2008-02-14 20:00">{course.modified}</time>
        </td>
        {/*<td>&nbsp;</td>*/}
        {/*<td>&nbsp;</td>*/}
        {/*<td>&nbsp;</td>*/}
        <td className="">
            <a className="wbdv-button wbdv-edit" href=""><i className="font-black fa fa-pencil" aria-hidden="true"></i></a>
            <a className="wbdv-button wbdv-delete" href=""><i className="font-black fa fa-trash" aria-hidden="true"></i></a>
            <a className="wbdv-button wbdv-save hide" href=""><i className="font-black fa fa-check-circle" aria-hidden="true"></i></a>
        </td>
        {/*<td className="wbdv-row wbdv-button wbdv-delete">*/}
        {/*    <a href=""><i className="font-black fa fa-trash" aria-hidden="true"></i></a>*/}
        {/*</td>*/}
        {/*<td className="wbdv-row wbdv-button wbdv-save hide">*/}
        {/*    <a href=""><i className="font-black fa fa-check-circle" aria-hidden="true"></i></a>*/}
        {/*</td>*/}
    </tr>

export default CourseRowComponent;

