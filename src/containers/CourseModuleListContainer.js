import React from "react";
import {connect} from "react-redux";
import CourseModuleListComponent from "../components/course_editor/CourseModuleListComponent";

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules
})

export default connect
(stateToPropertyMapper)
(CourseModuleListComponent)