import React from "react";

const CourseModuleItemComponent = ({module, deleteModule, updateModule}) =>
    <div>
        <li className="btn btn-dark btn-block wbdv-module-item">
            {module.modname}
            <a href="#" className="float-right font-white wbdv-module-item-delete-btn"
               onClick={() => deleteModule(module)}>
                <i className="fa fa-times-circle" aria-hidden="true"/>
            </a>
        </li>
    </div>

export default CourseModuleItemComponent