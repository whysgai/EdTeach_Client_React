import React from "react";
import CourseModuleItemComponent from "./CourseModuleItemComponent";
import CourseLessonComponent from "./CourseLessonComponent";
import CourseTopicComponent from "./CourseTopicComponent";
import CourseEditorWidgetComponent from "./CourseEditorWidgetComponent";

const CourseModuleComponent = ({modules, lessons, topics}) =>
    <div className="border row">
        <div className="border col-sm-4">
            <div className="wbdv-module-list d-none d-sm-block ">
                <ul className="list-of-btns ">
                    {
                        modules.map((module, index) =>
                            <CourseModuleItemComponent
                                module={module}
                            />
                        )
                    }
                </ul>
                <button className="btn btn-primary btn-block wbdv-module-item-add-btn">Add Module</button>
            </div>
        </div>
        <div className="col-sm-8 border">
            <div className="border">
                {
                    <CourseLessonComponent
                        lessons={lessons}
                        topics={topics}
                    />
                }
                {
                    <CourseTopicComponent
                        topics={topics}
                    />
                }
                {
                    <CourseEditorWidgetComponent/>
                }

            </div>
        </div>


    </div>

export default CourseModuleComponent