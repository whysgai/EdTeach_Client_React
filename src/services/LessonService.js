const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/cohenw/modules"
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/cohenw/lessons"

export const createLessonForModule = (moduleId, newLesson) => {}

export const findLessonsForModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`)
        .then(response => response.json())

export const updateLesson = (lessonId, newLesson) => {}

export const deleteLesson = (lessonId) => {}



export default {
    createLessonForModule,
    findLessonsForModule,
    updateLesson,
    deleteLesson
}