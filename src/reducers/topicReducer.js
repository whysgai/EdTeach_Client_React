import {CREATE_TOPIC, DELETE_TOPIC, UPDATE_TOPIC} from "../actions/courseTopicActions";

const initialState = {
    topics: [
        {
            _id: 1,
            topicname: 'Topic 1'
        },
        {
            _id: 2,
            topicname: 'Topic 2'
        },
        {
            _id: 3,
            topicname: 'Topic 3'
        },
        {
            _id: 4,
            topicname: 'Topic 4'
        }
    ]
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