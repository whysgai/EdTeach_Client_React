import React from "react"
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = ({courses, deleteCourse, renameCourse, courseBeingRenamed, captureRenamedCourseTitle, saveRenamedCourseTitle, editorShowHide}) =>
            <div className="form-group row">
                <table className="table border border-dark">
                    <thead className="border-bottom border-secondary">
                    <tr className="border border-secondary">
                        <th className="d-table-cell" scope="col">&nbsp;</th>
                        <th className="wbdv-header wbdv-title d-table-cell" scope="col">Title <i className="fa fa-sort" aria-hidden="true"/></th>
                        <th className="wbdv-header wbdv-owner d-none d-sm-table-cell " scope="col">Owned by <i className="fa fa-sort" aria-hidden="true"/></th>
                        <th className="wbdv-header wbdv-last-modified d-none d-md-table-cell " scope="col">Last
                            modified <i className="fa fa-sort" aria-hidden="true"/>
                        </th>
                        <th className="d-table-cell" scope="col">&nbsp;</th>
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
                                captureRenamedCourseTitle={captureRenamedCourseTitle}
                                saveRenamedCourseTitle={saveRenamedCourseTitle}
                                editorShowHide={editorShowHide}
                            />
                        )
                    }
                    </tbody>
                </table>
            </div>



export default CourseTableComponent;