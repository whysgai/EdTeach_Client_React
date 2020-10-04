import React from "react";

const CourseModuleItemComponent = ({module, lessons, topics}) =>
    <div>
        <li className="btn btn-dark btn-block wbdv-module-item">{module.modname}
            <a href="#" className="pull-right font-white wbdv-module-item-delete-btn">
                <i className="fa fa-times-circle" aria-hidden="true"/>
            </a>
        </li>
    </div>

export default CourseModuleItemComponent