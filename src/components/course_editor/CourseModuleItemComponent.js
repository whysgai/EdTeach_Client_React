import React from "react";

const CourseModuleItemComponent = ({module, deleteModule, updateModule, editModule, saveModule}) =>
    <div>
        <li className="btn btn-dark btn-block wbdv-module-item btn-align-veritcal">

            {
                !module.editing &&
                <span>
                    {module.modname}
                    <a href="#" className="float-right font-white wbdv-module-item-edit-btn"
                       onClick={() => editModule(module)}>
                        <i className="fa fa-pencil" aria-hidden="true"/>
                    </a>
                </span>
            }
            {
                module.editing &&
                    <span>
                        <input value={module.modname}
                               onChange={(event) => updateModule({
                                   ...module,
                                   modname: event.target.value
                               })}
                        />
                        <a href="#" className="float-right font-white wbdv-module-item-delete-btn"
                            onClick={() => deleteModule(module)}>
                            <i className="fa fa-times-circle" aria-hidden="true"/>
                        </a>
                        <a href="#" className="float-right font-white wbdv-module-item-save-btn"
                            onClick={() => saveModule(module)}>
                            <i className="fa fa-check" aria-hidden="true"/>
                        </a>
                    </span>
            }
        </li>
    </div>

export default CourseModuleItemComponent