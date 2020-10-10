const initialState = {
    modules: [
        {
            _id: 1,
            modname: 'Module 1'
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

const CREATE_MODULE = (state = initialState, action = action) => {
    alert("Called CREATE_MODULE")
}

export default CREATE_MODULE;