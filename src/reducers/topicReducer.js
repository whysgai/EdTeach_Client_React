import {CREATE_TOPIC, READ_TOPICS_FOR_LESSON, READ_TOPIC, UPDATE_TOPIC, DELETE_TOPIC} from "../actions/courseTopicActions";

const initialState = {
    topics: [],
    lessonId: "",
    topicId: ""
}

const topicReducer = (state = initialState, action = action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                ...state,
                topics: [...state.topics,
                    action.topic
                ]
            }
        case READ_TOPICS_FOR_LESSON:
            return {
                ...state,
                topics: action.topics
                ,
                lessonId: action.lessonId
                ,
                topicId: action.topicId
            }
        case READ_TOPIC:
            return {
                ...state,
                topic: state.topic
            }

        case UPDATE_TOPIC:
            return {
                ...state,
                topics: state.topics.map(
                    topic => topic._id === action.topic._id ? action.topic : topic
                )
            }
        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => topic !== action.topic)
            }
        default:
            return state;
    }
}

export default topicReducer;