import {CREATE_LESSON, READ_LESSONS, UPDATE_LESSON, DELETE_LESSON} from "../actions/courseLessonActions";

const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action = action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                ...state,
                lessons: [...state.lessons,
                    action.lesson
                ]
            }
        case READ_LESSONS:
            return {
                ...state,
                lessons: action.lessons,
                moduleId: action.moduleId,
                courseId: action.courseId,
            }
        case UPDATE_LESSON:
            return {
                ...state,
                lessons: state.lessons.map(
                    lesson => lesson._id === action.lesson._id ? action.lesson : lesson
                )
            }
        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson !== action.lesson)
            }
        default:
            return state;
    }
}

export default lessonReducer;