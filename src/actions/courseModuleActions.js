import ModuleService from "../services/ModuleService";

export const DELETE_MODULE = "DELETE_MODULE"
export const CREATE_MODULE = "CREATE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"


export const editModule = (dispatch, module) =>
    dispatch({type: UPDATE_MODULE, module: {...module, editing: true}})

export const saveModule = (dispatch, module) =>
    dispatch({type: UPDATE_MODULE, module: {...module, editing: false}})

export const updateModule = (dispatch, module) =>
    dispatch({type: UPDATE_MODULE, module})

export const deleteModule = (dispatch, module) =>
    ModuleService.deleteModule(module._id)
        .then(status => dispatch({type: DELETE_MODULE, module}))

export const createModule = (dispatch, courseId, newModule) =>
    ModuleService.createModuleForCourse(courseId, newModule)
        .then(actualModule => dispatch({type: CREATE_MODULE, module: actualModule}))
