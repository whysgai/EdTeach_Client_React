import {
    CREATE_WIDGET,
    READ_WIDGETS_FOR_TOPIC,
    READ_WIDGET,
    UPDATE_WIDGET,
    DELETE_WIDGET,
    UPDATE_WIDGETS_FOR_TOPIC,
    PREVIEW_WIDGETS
} from "../actions/courseWidgetActions"

const initialState = {
    widgets: [
        {_id: 'Local1', title: 'LocalStaticWidgetOne', type: 'HEADING', widgetOrder: 1},
        {_id: 'Local2', title: 'LocalStaticWidgetTwo', type: 'PARAGRAPH', widgetOrder: 1}
    ],
    topicId: "",
    preview: false
}

const widgetReducer = (state = initialState, action = action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [...state.widgets,
                    action.widget
                ]
            }
        case READ_WIDGETS_FOR_TOPIC:
            console.log("Read widgets for topic REDUCER")
            console.log(action.widgets)
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        case READ_WIDGET:
            return {
                ...state,
                topic: action.topic
            }
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget._id === action.widget._id ? action.widget : widget
                )
            }
        case UPDATE_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget !== action.widget)
            }
        case PREVIEW_WIDGETS:
            return {
                ...state,
                preview: action.preview
            }
        case ADVANCE_WIDGET:
            let moveWidget = action.widget
            let precedeWidget = {}
            for (let widget in state.widgets) {
                if (widget.widgetOrder === --moveWidget.widgetOrder) {
                    precedeWidget = widget
                }
            }
            moveWidget.widgetOrder = --moveWidget.widgetOrder
            precedeWidget.widgetOrder = ++precedeWidget.widgetOrder
            return {
                ...state,
                widgets: state.widgets.map(
                    widget =>
                        widget._id === moveWidget._id ?
                            moveWidget : widget
                        || widget._id === precedeWidget._id ?
                            precedeWidget : widget
                )
            }

        default:
            return state;
    }
}

export default widgetReducer;