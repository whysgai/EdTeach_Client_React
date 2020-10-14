const initialState = {
    courses: [],
    course: {
        _id: "1337",
        title: "Reducer Course"
    }
}

const courseReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default courseReducer