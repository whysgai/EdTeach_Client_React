import React from "react";
import {connect} from "react-redux";
import CourseEditorMobileToolbarComponent from "../components/course_editor/CourseEditorMobileToolbarComponent";

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course,
    modules: state.moduleReducer.modules,
    moduleId: state.lessonReducer.moduleId,
    lessons: state.lessonReducer.lessons,
    lessonId: state.topicReducer.lessonId,
    topics: state.topicReducer.topics,
    topicId: state.topicReducer.topicId
})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper)
(CourseEditorMobileToolbarComponent)