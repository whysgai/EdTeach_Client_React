import ModuleService from "../services/ModuleService";

export const CREATE_MODULE = "CREATE_MODULE"
export const READ_MODULES = "READ_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"

export const createModule = (dispatch, courseId, newModule) =>
    ModuleService.createModuleForCourse(courseId, newModule)
        .then(actualModule => dispatch({type: CREATE_MODULE, module: actualModule}))

export const editModule = (dispatch, module) =>
    ModuleService.updateModule(module._id, {...module, editing: true})
        .then(status => dispatch({
            type: UPDATE_MODULE,
            module: {...module, editing: true}
        }))

export const saveModule = (dispatch, module) =>
    ModuleService.updateModule(module._id, {...module, editing: false})
        .then(status => dispatch({
            type: UPDATE_MODULE,
            module: {...module, editing: false}
        }))

export const updateModule = (dispatch, module) =>
    dispatch({type: UPDATE_MODULE, module})
    // ModuleService.updateModule(module._id, module)
    //     .then(status => dispatch({type: UPDATE_MODULE, module}))

export const deleteModule = (dispatch, module) =>
    ModuleService.deleteModule(module._id)
        .then(status => dispatch({type: DELETE_MODULE, module}))


