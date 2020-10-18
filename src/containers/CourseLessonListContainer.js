import React from "react";
import {connect} from "react-redux";
import CourseLessonListComponent from "../components/course_editor/CourseLessonListComponent";
import {createLesson, deleteLesson, editLesson, updateLesson, saveLesson, selectLesson} from "../actions/courseLessonActions";

const stateToPropertyMapper = (state) => ({
  lessons: state.lessonReducer.lessons,
  activelesson: state.lessonReducer.activelesson,
  activemodule: state.moduleReducer.activemodule,
  moduleId: state.lessonReducer.moduleId,
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
  createLesson: (moduleId, newLesson) => createLesson(dispatch, moduleId, newLesson),
  updateLesson: (lesson) => updateLesson(dispatch, lesson),
  editLesson: (lesson) => editLesson(dispatch, lesson),
  saveLesson: (lesson) => saveLesson(dispatch, lesson),
  selectLesson: (lesson) => selectLesson(dispatch, lesson)
})

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper)
(CourseLessonListComponent)