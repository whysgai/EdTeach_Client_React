import LessonService from "../services/LessonService";
import ModuleService from "../services/ModuleService";
import {DELETE_MODULE} from "./courseModuleActions";

export const CREATE_LESSON = "CREATE_LESSON"
export const READ_LESSONS = "READ_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"


export const createLesson = (dispatch, moduleId, newLesson) =>
    LessonService.createLessonForModule(moduleId, newLesson)
        .then(actualLesson => dispatch({type: CREATE_LESSON, lesson: actualLesson}))

export const editLesson = (dispatch, lesson) =>
    dispatch({type: UPDATE_LESSON, lesson: {...lesson, editing: true}})

export const saveLesson = (dispatch, lesson) =>
    dispatch({type: UPDATE_LESSON, lesson: {...lesson, editing: false}})

export const updateLesson = (dispatch, lesson) =>
    dispatch({type: UPDATE_LESSON, lesson})

export const deleteLesson = (dispatch, lesson) =>
    LessonService.deleteLesson(less._id)
        .then(status => dispatch({type: DELETE_LESSON, lesson}))
