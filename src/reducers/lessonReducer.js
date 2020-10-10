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
    //alert("Called lessonReducer");
    return state;
}

export default lessonReducer;