const widgetUrl = "http://localhost:8080/api"

export const createWidgetForTopic = (topicId, newWidget) =>
    fetch(`${widgetUrl}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    })

// export const findWidgetsForTopic = async (topicId) => {
//     const response = await fetch(`${widgetUrl}/topics/${topicId}/widgets`)
//     console.log("Read widgets for topic SERVICE")
//     console.log(response)
//     return await response.json()
// }

export const findWidgetsForTopic = (topicId) =>
    fetch(`${widgetUrl}/topics/${topicId}/widgets`)
        .then(response => response.json())
        // .then(status => console.log("Read widgets for topic SERVICE"))

export const findWidget = (widgetId) =>
    fetch(`${widgetUrl}/widgets/${widgetId}`)
        .then(response => response.json())

export const updateWidget = (widgetId, newWidget) =>
    fetch(`${widgetUrl}/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const updateWidgetsForTopic = (topicId, widgets) =>
    fetch(`${widgetUrl}/topics/${topicId}/widgets`, {
        method: "PUT",
        body: JSON.stringify(widgets),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${widgetUrl}/widgets/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    createWidgetForTopic,
    findWidgetsForTopic,
    findWidget,
    updateWidgetsForTopic,
    updateWidget,
    deleteWidget,
}