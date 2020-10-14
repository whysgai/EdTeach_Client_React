import React from "react";
import {connect} from "react-redux";
import CourseModuleListComponent from "../components/course_editor/CourseModuleListComponent";
import {createModule, deleteModule, editModule, updateModule, saveModule} from "../actions/courseModuleActions";

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteModule: (module) => deleteModule(dispatch, module),
  createModule: () => createModule(dispatch),
  updateModule: (module) => updateModule(dispatch, module),
  editModule: (module) => editModule(dispatch, module),
  saveModule: (module) => saveModule(dispatch, module)
})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper)
(CourseModuleListComponent)