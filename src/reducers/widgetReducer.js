import {CREATE_WIDGET, READ_WIDGETS_FOR_LESSON, READ_WIDGET, UPDATE_WIDGET, DELETE_WIDGET} from "../actions/courseWidgetActions"

const initialState = {
    widgets: [],
    topicId: ""
}

const widgetReducer = (state = initialState, action = action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [...state.widget,
                    action.widget
                ]
            }
        case READ_WIDGETS_FOR_LESSON:
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
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget !== action.widget)
            }
        default:
            return state;
    }
}

export default widgetReducer;