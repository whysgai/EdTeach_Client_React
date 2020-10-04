import React from "react"
import CourseCardComponent from "./CourseCardComponent";

const CourseDeckComponent = ({courses, deleteCourse, renameCourse, courseBeingRenamed, captureRenamedCourseTitle, saveRenamedCourseTitle}) =>
    <div className="course-deck col-12">
        <div className="">
            <div className="btn-group" role="group" aria-label="Sort options">
                <button type="button" className="btn btn-light">Title <i className="fa fa-sort" aria-hidden="true"/></button>
                <button type="button" className="btn btn-light">Owner <i className="fa fa-sort" aria-hidden="true"/></button>
                <button type="button" className="btn btn-light">Modified <i className="fa fa-sort" aria-hidden="true"/></button>
            </div>
        </div>
        <div className="row">
            {
                courses.map((course, index) =>
                    <CourseCardComponent
                        course={course}
                        deleteCourse={deleteCourse}
                        renameCourse={renameCourse}
                        courseBeingRenamed={courseBeingRenamed}
                        captureRenamedCourseTitle={captureRenamedCourseTitle}
                        saveRenamedCourseTitle={saveRenamedCourseTitle}
                    />
                )
            }
        </div>

    </div>


export default CourseDeckComponent;