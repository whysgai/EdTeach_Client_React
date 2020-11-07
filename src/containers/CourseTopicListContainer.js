import React from "react";
import {connect} from "react-redux";
import CourseTopicListComponent from "../components/course_editor/CourseTopicListComponent";
import {createTopic, deleteTopic, editTopic, updateTopic, saveTopic} from "../actions/courseTopicActions";

const stateToPropertyMapper = (state) => ({
  topics: state.topicReducer.topics,
  topicId: state.widgetReducer.topicId,
  lessonId: state.topicReducer.lessonId,
  moduleId: state.lessonReducer.moduleId,
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteTopic: (topic) => deleteTopic(dispatch, topic),
  createTopic: (lessonId, newTopic) => createTopic(dispatch, lessonId, newTopic),
  updateTopic: (topic) => updateTopic(dispatch, topic),
  editTopic: (topic) => editTopic(dispatch, topic),
  saveTopic: (topic) => saveTopic(dispatch, topic),
})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper)
(CourseTopicListComponent)
