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

// Finite state machine
const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            return {
                modules: [...state.modules, {
                    _id: Date.now()+"",
                    modname: "New Module"
                }]
            }
        case "UPDATE_MODULE":
        case "DELETE_MODULE":
            return {
                modules: state.modules.filter(module => module !== action.module)
            }
        default:
            return state;
    }
}

export default moduleReducer;