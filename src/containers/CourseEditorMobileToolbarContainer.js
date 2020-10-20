import React from "react";
import {connect} from "react-redux";
import CourseEditorMobileToolbarComponent from "../components/course_editor/CourseEditorMobileToolbarComponent";

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    lessons: state.lessonReducer.lessons,
    topics: state.topicReducer.topics
})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper)
(CourseEditorMobileToolbarComponent)