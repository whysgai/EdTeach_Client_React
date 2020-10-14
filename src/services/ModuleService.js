const courseUrl = "https://wbdv-generic-server.herokuapp.com/api/cohenw/courses"
const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/cohenw/modules"

export const findModulesForCourse = (courseId) =>
    fetch(`${courseUrl}/${courseId}/modules`)
        .then(response => response.json())

export const createModuleForCourse = (courseId, newModule) =>
    fetch(`${courseUrl}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export default {
    findModulesForCourse, createModuleForCourse
}