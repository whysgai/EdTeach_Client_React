export const DELETE_TOPIC = "DELETE_TOPIC"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"

export const editTopic = (dispatch, topic) =>
    dispatch({type: UPDATE_TOPIC, topic: {...topic, editing: true}})

export const saveTopic = (dispatch, topic) =>
    dispatch({type: UPDATE_TOPIC, topic: {...topic, editing: false}})

export const updateTopic = (dispatch, topic) =>
    dispatch({type: UPDATE_TOPIC, topic})

export const deleteTopic = (dispatch, topic) =>
    dispatch({type: DELETE_TOPIC, topic})

export const createTopic = (dispatch) =>
    dispatch({type: CREATE_TOPIC})