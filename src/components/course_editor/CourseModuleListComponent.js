import React from "react";
import CourseModuleItemComponent from "./CourseModuleItemComponent";

const CourseModuleListComponent = ({course, modules, activemodule, moduleId, createModule, deleteModule, updateModule, editModule, saveModule, selectModule, selectLesson, selectTopic}) =>
    <div className="border col-sm-4 wbdv-module-list d-none d-md-block">
        <ul className="list-of-btns ">
            {
                modules.map((module, index) =>
                    <CourseModuleItemComponent
                        course={course}
                        activemodule={activemodule}
                        moduleId={moduleId}
                        module={module}
                        deleteModule={deleteModule}
                        updateModule={updateModule}
                        editModule={editModule}
                        saveModule={saveModule}
                        selectModule={selectModule}
                        selectLesson={selectLesson}
                        selectTopic={selectTopic}
                    />
                )
            }
        </ul>
        <button className="btn btn-primary btn-block wbdv-module-item-add-btn"
                onClick={() => createModule(course._id, {title: "New Module"})}>
            Add Module
        </button>
    </div>

export default CourseModuleListComponent