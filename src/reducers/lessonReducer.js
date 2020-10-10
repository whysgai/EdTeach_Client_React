import {CREATE_MODULE, DELETE_MODULE, UPDATE_MODULE} from "../actions/courseModuleActions";

const initialState = {
    lesson: [
        {
            _id: 1,
            lessonname: 'Module 1'
        },
        {
            _id: 2,
            modname: 'Module 2'
        },
        {
            _id: 3,
            modname: 'Module 3'
        },
        {
            _id: 4,
            modname: 'Module 4'
        },
        {
            _id: 5,
            modname: 'Module 5'
        }
    ]
}

const lessonReducer = (state = initialState, action = action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                lessons: [...state.lesson, {
                    _id: Date.now()+"",
                    lessonname: "New Module"
                }]
            }
        case UPDATE_LESSON:
            return {
                lessons: state.lessons.map(
                    lesson => lesson._id === action.lesson._id ? action.lesson : lesson
                )
            }
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson !== action.lesson)
            }
        default:
            return state;
    }
}

export default lessonReducer;