import React from "react";
import {connect} from "react-redux";
import CourseModuleListComponent from "../components/course_editor/CourseModuleListComponent";
import {createModule, deleteModule, editModule, updateModule, saveModule, selectModule} from "../actions/courseModuleActions";

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
  activemodule: state.moduleReducer.activemodule,
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteModule: (moduleId) => deleteModule(dispatch, moduleId),
  createModule: (courseId, newModule) => createModule(dispatch, courseId, newModule),
  updateModule: (module) => updateModule(dispatch, module),
  editModule: (module) => editModule(dispatch, module),
  saveModule: (module) => saveModule(dispatch, module),
  selectModule: (module) => selectModule(dispatch, module)
})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper)
(CourseModuleListComponent)