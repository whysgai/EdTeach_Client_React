import { courseUrl } from '../URLs'

// const url = "https://wbdv-generic-server.herokuapp.com/api/cohenw/courses"

export const findAllCourses = async () => {
    const response = await fetch(courseUrl)
    return await response.json()
}

export const findCourseById = (courseId) =>
    fetch(`${courseUrl}/${courseId}`)
        .then(response => response.json())

export const createCourse = (newCourse) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newCourse),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteCourse = (course) =>
    fetch(`${courseUrl}/${course._id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const updateCourse = (oldCourse, newCourse) => {
    return fetch(`${courseUrl}/${oldCourse._id}`, {
        method: 'PUT',
        body: JSON.stringify(newCourse),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

}
