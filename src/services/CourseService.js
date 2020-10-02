const url = "https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses"

export const findAllCourses = () =>
    fetch(url)
        .then(response => response.json())

export const findCourseById = () =>
    fetch(`${url}/${course._id}`)
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
    fetch(`${url}/${course}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const updateCourse = (oldCourse, newCourse) => {}