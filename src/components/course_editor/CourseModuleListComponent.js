import React from "react";
import CourseModuleItemComponent from "./CourseModuleItemComponent";

const CourseModuleListComponent = ({modules}) =>
    <div className="border col-sm-4 wbdv-module-list d-none d-md-block">
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

export default CourseModuleListComponent