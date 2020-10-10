import React from "react";
import {connect} from "react-redux";
import CourseLessonListComponent from "../components/course_editor/CourseLessonListComponent";
import {createLesson, deleteLesson, editLesson, updateLesson, saveLesson} from "../actions/courseLessonActions";

const stateToPropertyMapper = (state) => ({
  modules: state.lessonReducer.modules
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
  createLesson: () => createLesson(dispatch),
  updateLesson: (lesson) => updateLesson(dispatch, lesson),
  editLesson: (lesson) => editLesson(dispatch, lesson),
  saveLesson: (lesson) => saveLesson(dispatch, lesson)
})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper)
(CourseLessonListComponent)