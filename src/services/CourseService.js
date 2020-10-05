const url = "https://wbdv-generic-server.herokuapp.com/api/cohenw/courses"

export const findAllCourses = async () => {
    const response = await fetch(url)
    return await response.json()
}

export const findCourseById = (course) =>
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
    fetch(`${url}/${course._id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const updateCourse = (oldCourse, newCourse) => {
    return fetch(`${url}/${oldCourse._id}`, {
        method: 'PUT',
        body: JSON.stringify(newCourse),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

}