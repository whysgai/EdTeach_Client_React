import { courseUrl } from '../URLs'
import { moduleUrl } from '../URLs'

export const createModuleForCourse = (courseId, newModule) =>
    fetch(`${courseUrl}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`${courseUrl}/${courseId}/modules`)
        .then(response => response.json())

export const findModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}`)
        .then(response => response.json())

export const updateModule = (moduleId, newModule) =>
    fetch(`${moduleUrl}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    createModuleForCourse, findModulesForCourse, updateModule, deleteModule
}
