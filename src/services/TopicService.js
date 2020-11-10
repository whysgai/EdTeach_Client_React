import { lessonUrl } from '../URLs'
import { topicUrl } from '../URLs'

export const createTopicForLesson = (lessonId, newTopic) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json())

export const findTopic = (topicId) =>
    fetch(`${topicUrl}/${topicId}`)
        .then(response => response.json())

export const updateTopic = (topicId, newTopic) =>
    fetch(`${topicUrl}/${topicId}`, {
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
