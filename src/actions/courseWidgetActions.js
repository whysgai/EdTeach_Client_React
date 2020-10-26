import WidgetService from "../services/WidgetService";

export const CREATE_WIDGET = "CREATE_WIDGET"
export const READ_WIDGETS_FOR_TOPIC = "READ_WIDGETS_FOR_TOPIC"
export const READ_WIDGET = "READ_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const UPDATE_WIDGETS_FOR_TOPIC = "UPDATE_WIDGETS_FOR_TOPIC"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const PREVIEW_WIDGETS = "PREVIEW_WIDGETS"
export const ADVANCE_WIDGET = "ADVANCE_WIDGET"

export const createWidget = (dispatch, topicId, newWidget) =>
    WidgetService.createWidgetForTopic(topicId, newWidget)
        .then(actualWidget => dispatch({type: CREATE_WIDGET, widget: actualWidget}))

export const createLocalWidget = (dispatch, topicId, newWidget) =>
    dispatch({type: CREATE_WIDGET, topicId: topicId, widget: newWidget})

export const editWidget = (dispatch, widget) =>
    WidgetService.updateWidget(widget._id, {...widget, editing: true})
        .then(status => dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: true}}))

export const editLocalWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: true}})

export const saveWidget = (dispatch, widget) =>
    WidgetService.updateWidget(widget._id, {...widget, editing: false})
        .then(status => dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: false}}))

export const saveLocalWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: false}})

export const updateLocalWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget})

export const saveAllWidgets = (dispatch, topicId, widgets) =>
    WidgetService.updateWidgetsForTopic(topicId, widgets)
        .then(status => dispatch({type: UPDATE_WIDGETS_FOR_TOPIC, widgets}))

export const deleteWidget = (dispatch, widget) =>
    WidgetService.deleteWidget(widget._id)
        .then(status => dispatch({type: DELETE_WIDGET, widget}))

export const deleteLocalWidget = (dispatch, widget) =>
    dispatch({type: DELETE_WIDGET, widget})

export const previewWidgets = (dispatch, preview) =>
    dispatch({type: PREVIEW_WIDGETS, preview})

export const advanceWidget = (dispatch, widget) =>
    dispatch({type: ADVANCE_WIDGET, widget})
