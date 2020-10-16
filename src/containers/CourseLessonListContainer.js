import React from "react";
import {connect} from "react-redux";
import CourseLessonListComponent from "../components/course_editor/CourseLessonListComponent";
import {createLesson, deleteLesson, editLesson, updateLesson, saveLesson} from "../actions/courseLessonActions";

const stateToPropertyMapper = (state) => ({
  lessons: state.lessonReducer.lessons,
  moduleId: state.lessonReducer.moduleId,
  module: state.moduleReducer.module
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
  createLesson: (moduleId, newLesson) => createLesson(dispatch, moduleId, newLesson),
  updateLesson: (lesson) => updateLesson(dispatch, lesson),
  editLesson: (lesson) => editLesson(dispatch, lesson),
  saveLesson: (lesson) => saveLesson(dispatch, lesson)
})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper)
(CourseLessonListComponent)