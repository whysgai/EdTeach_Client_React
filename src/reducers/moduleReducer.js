import {CREATE_MODULE, READ_MODULES, UPDATE_MODULE, DELETE_MODULE, SELECT_MODULE} from "../actions/courseModuleActions";

const initialState = {
    modules: [],
    activemodule: {}
}

// Finite state machine
const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case READ_MODULES:
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
            }
        case UPDATE_MODULE:
            return {
                ...state,
                modules: state.modules.map(
                    module => module._id === action.module._id ? action.module : module
                )
            }
        case DELETE_MODULE:
            return {
                ...state,
                modules: state.modules.filter(module => module !== action.module)
            }
        case SELECT_MODULE:
            return {
                ...state,
                activemodule: action.module
            }
        default:
            return state;
    }
}

export default moduleReducer;