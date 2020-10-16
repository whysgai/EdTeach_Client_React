const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/cohenw/lessons"
const topicUrl = "https://wbdv-generic-server.herokuapp.com/api/cohenw/topics"

export const createTopicForLesson = (lessonId, newTopic) =>
    fetch(`${lessonUrl}/${lessonId}/lessons`, {
        method: "POST",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/lessons`)
        .then(response => response.json())

export const updateTopic = (lessonId, newTopic) =>
    fetch(`${topicUrl}/${newTopic}`, {
        method: "PUT",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const deleteTopic = (newTopic) =>
    fetch(`${topicUrl}/${newTopic}`, {
        method: "DELETE"
    })
        .then(response => response.json())



export default {
    createTopicForLesson,
    findTopicsForLesson,
    updateTopic,
    deleteTopic
}