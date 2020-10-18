import React from "react";
import {Link} from "react-router-dom";

const CourseModuleItemComponent = ({course, module, activemodule, deleteModule, updateModule, editModule, saveModule, selectModule}) =>
    <div>
        <li key={module._id} className={`btn btn-block wbdv-module-item btn-align-veritcal ${activemodule._id === module._id? "active btn-secondary" : "btn-outline-dark"}`}>
            {
                !module.editing &&
                    <span>
                        <Link to={`/course_editor/${course._id}/modules/${module._id}`}
                            onClick={()=> selectModule(module)}
                            className={`text-reset ${activemodule._id === module._id? "font-white" : "font-black"}`}>
                            {module.title}
                        </Link>
                        <a href="#" className="float-right font-white text-reset wbdv-module-item-edit-btn"
                           onClick={() => editModule(module)}>
                            <i className="fa fa-pencil" aria-hidden="true"/>
                        </a>
                    </span>
            }
            {
                module.editing &&
                    <span>
                        <input value={module.title}
                               onChange={(event) => updateModule({
                                   ...module,
                                   title: event.target.value
                               })}
                        />
                        <a href="#" className="float-right text-success wbdv-module-item-save-btn ml-2"
                           onClick={() => saveModule(module)}>
                            <i className="fa fa-check" aria-hidden="true"/>
                        </a>
                        <a href="#" className="float-right text-danger font-white wbdv-module-item-delete-btn ml-2"
                            onClick={() => deleteModule(module)}>
                            <i className="fa fa-times-circle" aria-hidden="true"/>
                        </a>
                    </span>
            }
        </li>
    </div>

export default CourseModuleItemComponent