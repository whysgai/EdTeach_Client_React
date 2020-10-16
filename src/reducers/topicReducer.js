import {CREATE_TOPIC, READ_TOPICS, UPDATE_TOPIC, DELETE_TOPIC} from "../actions/courseTopicActions";

const initialState = {
    topics: [],
    lessonId: ""
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
        case READ_TOPICS:
            return {
                ...state,
                topics: action.topics,
                lessonId: action.lessonId
            }
        case UPDATE_TOPIC:
            console.log("Update from reducer")
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