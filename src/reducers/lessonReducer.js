import {CREATE_LESSON, READ_LESSONS_FOR_MODULE, READ_LESSON, UPDATE_LESSON, DELETE_LESSON} from "../actions/courseLessonActions";

const initialState = {
    lessons: [],
    moduleId: ""
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
        case READ_LESSONS_FOR_MODULE:
            return {
                ...state,
                lessons: action.lessons
                ,
                moduleId: action.moduleId
            }
        case READ_LESSON:
            return {
                ...state,
                lesson: action.lesson
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