import TopicService from "../services/TopicService";

export const CREATE_TOPIC = "CREATE_TOPIC"
export const READ_TOPICS_FOR_LESSON = "READ_TOPICS_FOR_LESSON"
export const READ_TOPIC = "READ_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"

export const createTopic = (dispatch, lessonId, newTopic) =>
    TopicService.createTopicForLesson(lessonId, newTopic)
        .then(actualTopic => dispatch({type: CREATE_TOPIC, topic: actualTopic}))

export const editTopic = (dispatch, topic) =>
    TopicService.updateTopic(topic._id, {...topic, editing: true})
        .then(status => dispatch({type: UPDATE_TOPIC, topic: {...topic, editing: true}}))

export const saveTopic = (dispatch, topic) =>
    TopicService.updateTopic(topic._id, {...topic, editing: false})
        .then(status => dispatch({type: UPDATE_TOPIC, topic: {...topic, editing: false}}))

export const updateTopic = (dispatch, topic) =>
    dispatch({type: UPDATE_TOPIC, topic})

export const deleteTopic = (dispatch, topic) =>
    TopicService.deleteTopic(topic._id)
        .then(status => dispatch({type: DELETE_TOPIC, topic}))