import {CREATE_LESSON, DELETE_LESSON, UPDATE_LESSON} from "../actions/courseLessonActions";

const initialState = {
    lessons: [
        {
            _id: 1,
            lessonname: 'Lesson 1'
        },
        {
            _id: 2,
            lessonname: 'Lesson 2'
        },
        {
            _id: 3,
            lessonname: 'Lesson 3'
        },
        {
            _id: 4,
            lessonname: 'Lesson 4'
        },
        {
            _id: 5,
            lessonname: 'Lesson 5'
        }
    ]
}

const lessonReducer = (state = initialState, action = action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                lessons: [...state.lessons, {
                    _id: Date.now()+"",
                    lessonname: "New Lesson"
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