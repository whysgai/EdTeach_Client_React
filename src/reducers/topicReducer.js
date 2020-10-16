import {CREATE_TOPIC, READ_TOPICS, UPDATE_TOPIC, DELETE_TOPIC} from "../actions/courseTopicActions";

const initialState = {
    topics: []
}

const topicReducer = (state = initialState, action = action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                topics: [...state.topics, {
                    _id: Date.now()+"",
                    topicname: "New Topic"
                }]
            }
        case READ_TOPICS:
        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(
                    topic => topic._id === action.topic._id ? action.topic : topic
                )
            }
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic !== action.topic)
            }
        default:
            return state;
    }
}

export default topicReducer;