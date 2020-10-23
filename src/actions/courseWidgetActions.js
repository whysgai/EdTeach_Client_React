import WidgetService from "../services/WidgetService";

export const CREATE_WIDGET = "CREATE_WIDGET"
export const READ_WIDGETS_FOR_TOPIC = "READ_WIDGETS_FOR_TOPIC"
export const READ_WIDGET = "READ_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"

export const createWidget = (dispatch, topicId, newWidget) =>
    WidgetService.createWidgetForTopic(topicId, newWidget)
        .then(actualWidget => dispatch({type: CREATE_WIDGET, widget: actualWidget}))

export const editWidget = (dispatch, widget) =>
    WidgetService.updateWidget(widget._id, {...widget, editing: true})
        .then(status => dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: true}}))

export const saveWidget = (dispatch, widget) =>
    WidgetService.updateWidget(widget._id, {...widget, editing: false})
        .then(status => dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: false}}))

export const updateWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget})

export const deleteWidget = (dispatch, widget) =>
    WidgetService.deleteWidget(widget._id)
        .then(status => dispatch({type: DELETE_WIDGET, widget}))