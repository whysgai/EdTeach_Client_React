import {CREATE_MODULE, DELETE_MODULE, UPDATE_MODULE} from "../actions/courseModuleActions";

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
        },
        {
            _id: 6,
            modname: 'Module 6'
        }
    ]
}

// Finite state machine
const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case CREATE_MODULE:
            return {
                ...state,
                modules: [... state.modules,
                    action.module
                ]
                // modules: [...state.modules, {
                //     _id: Date.now()+"",
                //     modname: "New Module"
                // }]
            }
        case UPDATE_MODULE:
            return {
                modules: state.modules.map(
                    module => module._id === action.module._id ? action.module : module
                )
            }
        case DELETE_MODULE:
            return {
                ...state,
                modules: state.modules.filter(module => module !== action.module)
            }
        default:
            return state;
    }
}

export default moduleReducer;