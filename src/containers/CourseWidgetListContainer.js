import React from "react";

import { connect } from "react-redux"
import {
    createWidget, createLocalWidget,
    editWidget, editLocalWidget,
    saveWidget, saveLocalWidget,
    updateLocalWidget, saveAllWidgets,
    deleteWidget, deleteLocalWidget,
    previewWidgets
} from "../actions/courseWidgetActions"
import CourseEditorWidgetPaneComponent from "../components/course_editor/CourseEditorWidgetPaneComponent";

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId,
    lessonId: state.topicReducer.lessonId,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course,
    preview: state.widgetReducer.preview
})

const propertyToDispatchMapper = (dispatch) => ({
    createWidget: (topicId, newWidget) => createWidget(dispatch, topicId, newWidget),
    createLocalWidget: (topicId, newWidget) => createLocalWidget(dispatch, topicId, newWidget),
    updateLocalWidget: (widget) => updateLocalWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    editLocalWidget: (widget) => editLocalWidget(dispatch, widget),
    saveWidget: (widget) => saveWidget(dispatch, widget),
    saveLocalWidget: (widget) => saveLocalWidget(dispatch, widget),
    saveAllWidgets: (topicId, widgets) => saveAllWidgets(dispatch, topicId, widgets),
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    deleteLocalWidget: (widget) => deleteLocalWidget(dispatch, widget),
    previewWidgets: (preview) => previewWidgets(dispatch, preview)
})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)
(CourseEditorWidgetPaneComponent)