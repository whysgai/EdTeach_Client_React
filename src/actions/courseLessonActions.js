export const DELETE_LESSON = "DELETE_LESSON"
export const CREATE_LESSON = "CREATE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"

export const editLesson = (dispatch, lesson) =>
    dispatch({type: UPDATE_LESSON, lesson: {...lesson, editing: true}})

export const saveLesson = (dispatch, lesson) =>
    dispatch({type: UPDATE_LESSON, lesson: {...lesson, editing: false}})

export const updateLesson = (dispatch, lesson) =>
    dispatch({type: UPDATE_LESSON, lesson})

export const deleteLesson = (dispatch, lesson) =>
    dispatch({type: DELETE_LESSON, lesson})

export const createLesson = (dispatch) =>
    dispatch({type: CREATE_LESSON})