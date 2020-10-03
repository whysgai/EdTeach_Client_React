import React from "react"
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = ({courses, deleteCourse, renameCourse, courseBeingRenamed}) =>
            <div className="form-group row">
                <table className="table border border-dark">
                    <thead className="border-bottom border-secondary">
                    <tr className="border border-secondary">
                        <th>&nbsp;</th>
                        <th className="wbdv-header wbdv-title col-sm-4" scope="col">Title</th>
                        <th className="wbdv-header wbdv-owner d-none d-sm-table-cell col-sm-3" scope="col">Owned by</th>
                        <th className="wbdv-header wbdv-last-modified d-none d-md-table-cell col-sm-3" scope="col">Last
                            modified
                        </th>
                        <th className="wbdv-button wbdv-grid-layout d-none d-sm-table-cell" scope="col">
                            <i className="fa fa-th d-inline" aria-hidden="true"></i>
                            <span>&nbsp;</span>
                            <i className="fa fa-sort-alpha-asc d-inline" aria-hidden="true"></i>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="table-hover">
                    {
                        courses.map((course, index) =>
                            <CourseRowComponent
                                course={course}
                                deleteCourse={deleteCourse}
                                renameCourse={renameCourse}
                                courseBeingRenamed={courseBeingRenamed}
                            />
                        )
                    }
                    </tbody>
                </table>
            </div>



export default CourseTableComponent;