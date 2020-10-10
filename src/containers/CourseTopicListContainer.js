import React from "react";
import {connect} from "react-redux";
import CourseTopicListComponent from "../components/course_editor/CourseTopicListComponent";
import {createTopic, deleteTopic, editTopic, updateTopic, saveTopic} from "../actions/courseTopicActions";

const stateToPropertyMapper = (state) => ({
  topics: state.topicReducer.topics
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteLesson: (topic) => deleteTopic(dispatch, topic),
  createLesson: () => createTopic(dispatch),
  updateLesson: (topic) => updateTopic(dispatch, topic),
  editLesson: (topic) => editTopic(dispatch, topic),
  saveLesson: (topic) => saveTopic(dispatch, topic)
})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper)
(CourseTopicListComponent)