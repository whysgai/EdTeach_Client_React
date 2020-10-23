import React from "react";

import { connect } from "react-redux"
import {createWidget, deleteWidget, editWidget, updateWidget} from "../actions/courseWidgetActions"
import CourseEditorWidgetPaneComponent from "../components/course_editor/CourseEditorWidgetPaneComponent";

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId,
    lessonId: state.topicReducer.lessonId,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidget: (topicId, newWidget) => createWidget(dispatch, topicId, newWidget),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    saveWidget: (widget) => saveWidget(dispatch, widget)
})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)
(CourseEditorWidgetPaneComponent)